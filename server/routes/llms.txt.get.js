import { site, categories, categoryByKey } from '#shared/data/site.js'
import { products } from '#shared/data/products.js'
import { guides } from '#shared/data/guides.js'

export default defineEventHandler(event => {
  const base = String(useRuntimeConfig().public.siteUrl).replace(/\/$/, '')
  setResponseHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  const lines = [`# ${site.name}`, '', `> ${site.description}`, '', 'Fiches documentaires : caractéristiques issues des sites fabricants, sans test revendiqué. Liens partenaires Amazon signalés.', '']
  for (const c of categories) {
    lines.push(`## ${c.label}`, '', `- [Sélection et comparatif](${base}/${c.slug})`)
    for (const g of guides.filter(g => g.category === c.key)) lines.push(`- [${g.title}](${base}/guides/${g.slug}) : ${g.description}`)
    for (const p of products.filter(p => p.category === c.key)) lines.push(`- [${p.name}](${base}/${categoryByKey(p.category).slug}/${p.slug}) : ${p.bestFor}`)
    lines.push('')
  }
  return lines.join('\n')
})
