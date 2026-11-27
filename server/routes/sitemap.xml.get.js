import { categories, categoryByKey } from '#shared/data/site.js'
import { products } from '#shared/data/products.js'
import { guides } from '#shared/data/guides.js'

const xml = v => String(v).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

export default defineEventHandler(event => {
  const config = useRuntimeConfig()
  const live = config.public.siteLive === true || config.public.siteLive === 'true'
  const base = String(config.public.siteUrl).replace(/\/$/, '')
  setResponseHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  if (!live) return '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"/>'

  const entries = [['/'], ['/guides'], ['/a-propos'], ['/methode'], ['/affiliation'], ['/contact']]
  for (const c of categories) entries.push([`/${c.slug}`])
  for (const g of guides) entries.push([`/guides/${g.slug}`, g.updatedAt])
  for (const p of products) entries.push([`/${categoryByKey(p.category).slug}/${p.slug}`, p.checkedAt])
  const urls = entries.map(([p, d]) => `<url><loc>${xml(base + p)}</loc>${d ? `<lastmod>${xml(d)}</lastmod>` : ''}</url>`).join('')
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`
})
