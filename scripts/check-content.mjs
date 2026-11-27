// Cohérence du catalogue : slugs uniques, ASIN au bon format, références croisées valides.
import { products } from '../shared/data/products.js'
import { guides, hubs } from '../shared/data/guides.js'
import { categories } from '../shared/data/site.js'

const errors = []
const slugs = new Set()
for (const p of products) {
  if (slugs.has(p.slug)) errors.push(`slug en double : ${p.slug}`)
  slugs.add(p.slug)
  if (!/^B0[A-Z0-9]{8}$/.test(p.asin)) errors.push(`${p.slug} : ASIN invalide ${p.asin}`)
  if (!categories.some(c => c.key === p.category)) errors.push(`${p.slug} : catégorie inconnue`)
  for (const k of ['bestFor', 'type', 'sourceUrl', 'checkedAt']) if (!p[k]) errors.push(`${p.slug} : ${k} manquant`)
  if (!p.strengths?.length || !p.limits?.length) errors.push(`${p.slug} : points forts/limites manquants`)
}
for (const g of guides) for (const s of g.products || []) if (!slugs.has(s)) errors.push(`guide ${g.slug} : produit inconnu ${s}`)
for (const c of categories) {
  if (!hubs[c.key]) errors.push(`hub manquant : ${c.key}`)
  if (!guides.some(g => g.slug === c.pillarGuide)) errors.push(`guide pilier introuvable : ${c.pillarGuide}`)
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Contenu : OK (${products.length} produits, ${guides.length} guides)`)
