import { site } from '#shared/data/site.js'

/**
 * Métadonnées SSR d'une page : title, description, canonical, robots, Open Graph et JSON-LD.
 * La config runtime est lue une seule fois dans le setup (jamais dans un computed).
 */
export function usePageSeo({ title, description, path, type = 'website', noindex = false, jsonLd = [], breadcrumbs = null }) {
  const config = useRuntimeConfig()
  const live = config.public.siteLive === true || config.public.siteLive === 'true'
  const base = String(config.public.siteUrl).replace(/\/$/, '')
  const url = base + (path === '/' ? '/' : path)
  // breadcrumbs : [[libellé, chemin], ...] sans l'accueil, ajouté automatiquement.
  const graph = [...jsonLd]
  if (breadcrumbs) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [['Accueil', '/'], ...breadcrumbs].map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, item: base + p }))
    })
  }
  // Le suffixe de marque saute si le titre dépasserait 65 caractères : le mot-clé passe avant la marque.
  const branded = `${title} · ${site.name}`
  const fullTitle = path === '/' ? `${site.name} · ${site.tagline}` : (branded.length > 65 ? title : branded)

  useSeoMeta({
    title: fullTitle,
    description,
    ogTitle: fullTitle,
    ogDescription: description,
    ogType: type,
    ogUrl: url,
    ogSiteName: site.name,
    ogLocale: 'fr_FR',
    twitterCard: 'summary',
    robots: live && !noindex ? 'index,follow,max-image-preview:large' : 'noindex,follow'
  })
  useHead({
    link: [{ rel: 'canonical', href: url }],
    script: graph.length
      ? [{ type: 'application/ld+json', innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }]
      : []
  })
  return { url, base }
}

export function amazonUrl(asin, tag) {
  return tag ? `https://www.amazon.fr/dp/${asin}?tag=${encodeURIComponent(tag)}` : null
}
