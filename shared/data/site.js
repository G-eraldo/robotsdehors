// Identité et structure du site. Les contenus vivent dans products.js et guides.js.
export const site = {
  name: 'Le Robot Idéal',
  domain: 'lerobotideal.fr',
  tagline: 'Robot tondeuse et robot de piscine bien choisis',
  description: 'Guides d’achat et fiches vérifiées pour choisir un robot tondeuse ou un robot de piscine adapté à votre terrain et à votre bassin.',
  themeColor: '#f4f7f4',
  publisher: {
    name: 'Gérald François',
    company: 'La Fabrique du Code — Gérald François, entrepreneur individuel',
    rcs: 'R.C.S. d’Amiens : 994 074 458',
    siret: '994 074 458 00010',
    address: '11 rue de la Gare, 80360 Guillemont, France',
    email: 'contact@lafabriqueducode.fr',
    phone: '07 67 26 53 66',
    phoneHref: '+33767265366'
  },
  host: {
    name: 'IONOS SARL',
    address: '7 place de la Gare, BP 70109, 57200 Sarreguemines Cedex, France',
    phone: '0805 54 21 80'
  }
}

// key = valeur de `category` dans les produits/guides ; slug = segment d'URL.
export const categories = [
  {
    key: 'tondeuse',
    slug: 'robots-tondeuses',
    label: 'Robots tondeuses',
    singular: 'robot tondeuse',
    short: 'Pelouse',
    pillarGuide: 'quel-robot-tondeuse-choisir',
    color: '#1f7a4a',
    tint: '#e3f1e7',
    pitch: 'Avec ou sans fil périmétrique : le bon guidage pour votre terrain, ses pentes et ses arbres.'
  },
  {
    key: 'piscine',
    slug: 'robots-piscine',
    label: 'Robots de piscine',
    singular: 'robot de piscine',
    short: 'Piscine',
    pillarGuide: 'quel-robot-piscine-choisir',
    color: '#0b7fab',
    tint: '#e0f1f8',
    pitch: 'Fond, parois, ligne d’eau, filaire ou sur batterie : ce qui compte selon votre bassin.'
  }
]

export const categoryBySlug = slug => categories.find(c => c.slug === slug)
export const categoryByKey = key => categories.find(c => c.key === key)

export const legalLinks = [
  { to: '/a-propos', label: 'À propos' },
  { to: '/methode', label: 'Notre méthode' },
  { to: '/affiliation', label: 'Affiliation' },
  { to: '/contact', label: 'Contact' },
  { to: '/mentions-legales', label: 'Mentions légales' },
  { to: '/confidentialite', label: 'Confidentialité' }
]
