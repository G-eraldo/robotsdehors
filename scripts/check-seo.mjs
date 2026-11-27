// Démarre le serveur compilé en mode « live », parcourt toutes les URL du sitemap et des liens internes,
// et vérifie : statut 200, un seul H1, title (≤ 65 car.), meta description, canonical, robots indexable,
// liens Amazon en rel=sponsored. Usage : pnpm build && pnpm check:seo
import { spawn } from 'node:child_process'

const PORT = 3999
const base = `http://localhost:${PORT}`
const server = spawn('node', ['.output/server/index.mjs'], {
  env: { ...process.env, PORT: String(PORT), NUXT_PUBLIC_SITE_LIVE: 'true', NUXT_PUBLIC_SITE_URL: base, NUXT_PUBLIC_AMAZON_TAG: 'test-21' },
  stdio: 'ignore'
})
const sleep = ms => new Promise(r => setTimeout(r, ms))
const errors = []
try {
  for (let i = 0; i < 50; i++) { try { await fetch(base + '/robots.txt'); break } catch { await sleep(200) } }
  const sitemap = await (await fetch(base + '/sitemap.xml')).text()
  const queue = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => new URL(m[1]).pathname)
  const seen = new Set()
  while (queue.length) {
    const path = queue.shift()
    if (seen.has(path)) continue
    seen.add(path)
    const res = await fetch(base + path)
    if (res.status !== 200) { errors.push(`${path} → HTTP ${res.status}`); continue }
    const html = await res.text()
    const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? ''
    const h1 = (html.match(/<h1[\s>]/g) || []).length
    const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? ''
    const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1]
    const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? ''
    if (!title) errors.push(`${path} : title manquant`)
    else if (title.length > 65) errors.push(`${path} : title long (${title.length}) « ${title} »`)
    if (h1 !== 1) errors.push(`${path} : ${h1} H1`)
    if (desc.length < 50 || desc.length > 170) errors.push(`${path} : description ${desc.length} car.`)
    if (canonical !== base + path) errors.push(`${path} : canonical ${canonical}`)
    const legal = ['/mentions-legales', '/confidentialite'].includes(path)
    if (!legal && !robots.startsWith('index')) errors.push(`${path} : robots ${robots}`)
    for (const a of html.matchAll(/<a [^>]*href="(https:\/\/www\.amazon\.fr[^"]*)"[^>]*>/g)) {
      if (!/rel="[^"]*sponsored/.test(a[0])) errors.push(`${path} : lien Amazon sans rel=sponsored`)
      if (!a[1].includes('tag=test-21')) errors.push(`${path} : lien Amazon sans tag`)
    }
    for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
      const p = m[1]
      if (!p.startsWith('/_nuxt') && !/\.(svg|png|ico|xml|txt)$/.test(p) && !seen.has(p)) queue.push(p)
    }
  }
  console.log(`${seen.size} pages contrôlées.`)
} finally {
  server.kill()
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log('SEO : OK')
