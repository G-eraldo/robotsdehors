// Guides et contenus des pages rubriques. Méthode de choix ; aucun test revendiqué.
export const guides = [
  // ——— Robots tondeuses ———
  {
    slug: 'quel-robot-tondeuse-choisir', category: 'tondeuse', featured: true,
    kicker: 'Guide d’achat', short: 'Quel robot tondeuse ?',
    title: 'Quel robot tondeuse choisir pour votre jardin ?',
    description: 'Surface, pentes, arbres, passages étroits : les cinq critères qui décident du bon robot tondeuse, avant même la marque.',
    publishedAt: '2026-11-27', updatedAt: '2026-11-27',
    answer: 'Partez de votre terrain : surface réelle avec une marge de 20 à 30 %, pente la plus forte, présence d’arbres et de zones séparées. Jardin simple et dégagé : un robot à fil suffit. Pentes fortes, plusieurs zones ou envie de ne rien installer : un robot sans fil (RTK, vision ou LiDAR), en vérifiant la couverture satellite ou mobile.',
    products: ['worx-landroid-plus-wr165e', 'segway-navimow-i205-awd', 'dreame-a1-pro'],
    body: [
      { h2: 'Quelle surface de tonte prévoir ?' },
      { p: 'La surface maximale annoncée suppose un terrain simple et un robot qui tond presque tous les jours. Avec des massifs, des recoins ou une pelouse qui pousse vite au printemps, prenez un modèle dont la capacité dépasse votre surface de 20 à 30 %.' },
      { h2: 'Quelle pente le robot doit-il gravir ?' },
      { p: 'Repérez la pente la plus raide du terrain, pas la moyenne. Une pente de 35 % correspond à 35 cm de dénivelé sur 1 m à l’horizontale. Au-delà de 35 à 40 %, regardez les robots à roues motrices intégrales (AWD).' },
      { h2: 'Fil, satellite ou capteurs : quel guidage ?' },
      { table: { head: ['Guidage', 'Installation', 'Atouts', 'Points de vigilance'], rows: [
        ['Fil périmétrique', 'Fil à poser ou enterrer autour de la pelouse', 'Fiable, indépendant du ciel et du réseau', 'Pose longue, fil à réparer s’il est coupé'],
        ['RTK avec antenne', 'Antenne à placer, zones dessinées dans l’appli', 'Tonte en lignes, zones multiples', 'Signal satellite gêné par les arbres et les murs'],
        ['RTK réseau (NRTK)', 'Aucune antenne, correction via le réseau mobile', 'Mise en route rapide', 'Dépend de la couverture mobile ; abonnement possible'],
        ['Vision / LiDAR', 'Cartographie par capteurs', 'À l’aise sous les arbres', 'Technologie récente, réglages dans l’appli']
      ] } },
      { p: 'Le détail est dans [robot tondeuse avec ou sans fil](/guides/robot-tondeuse-avec-ou-sans-fil).' },
      { h2: 'Votre jardin a-t-il plusieurs zones ?' },
      { p: 'Plusieurs pelouses reliées par un passage étroit, un portillon, une allée ? Vérifiez la largeur minimale de passage indiquée dans la notice et la gestion des zones multiples. Les robots sans fil gèrent généralement mieux plusieurs zones que les robots filaires d’entrée de gamme.' },
      { h2: 'Quelles sécurités exiger ?' },
      { ul: [
        '**Capteurs de levage et d’inclinaison** : la lame s’arrête quand le robot est soulevé.',
        '**Antivol** : code PIN au minimum ; alarme et localisation GPS sur les modèles connectés.',
        '**Faune** : plusieurs associations de protection de la nature conseillent de ne pas tondre la nuit, quand les hérissons sont actifs. Programmez la tonte en journée.',
        '**Enfants et animaux** : pas de tonte quand ils jouent sur la pelouse, même avec détection d’obstacles.'
      ] },
      { callout: 'La fiche produit Amazon et la page du fabricant ne disent pas toujours la même chose (largeur de coupe, contenu de la boîte). En cas de doute, nos fiches signalent l’écart ; vérifiez la référence exacte avant de commander.', title: 'Comparer les sources' }
    ]
  },
  {
    slug: 'robot-tondeuse-avec-ou-sans-fil', category: 'tondeuse', featured: true,
    kicker: 'Comparer', short: 'Avec ou sans fil ?',
    title: 'Robot tondeuse avec ou sans fil périmétrique ?',
    description: 'Fil, RTK avec antenne, RTK réseau, vision ou LiDAR : comment chaque robot sait où il est, et lequel convient à votre terrain.',
    publishedAt: '2026-11-27', updatedAt: '2026-11-27',
    answer: 'Le fil reste le plus fiable sur un terrain simple et dégagé, mais demande une installation. Le sans-fil (RTK) évite la pose et tond en lignes, à condition d’avoir assez de ciel dégagé. Sous beaucoup d’arbres ou entre des murs, préférez un robot guidé par caméra ou LiDAR.',
    products: ['bosch-indego-m-plus-700', 'mammotion-luba-mini-2-awd-1000', 'ecovacs-goat-o600-rtk', 'dreame-a1-pro'],
    body: [
      { h2: 'Comment fonctionne le fil périmétrique ?' },
      { p: 'Un fil basse tension, posé au sol avec des cavaliers ou enterré, délimite la zone à tondre. Le robot le détecte et ne le franchit pas. C’est éprouvé et indépendant du ciel ou du réseau. En contrepartie : une pose qui prend du temps, et un fil qu’il faut réparer s’il est coupé par une bêche ou un scarificateur.' },
      { h2: 'Qu’est-ce que le RTK ?' },
      { p: 'Le RTK corrige la position satellite pour atteindre une précision de quelques centimètres. Deux variantes : une **antenne** à installer chez vous, ou une **correction par le réseau** mobile (NRTK), sans antenne. Dans les deux cas, le robot a besoin de voir une bonne part du ciel. Grands arbres, murs hauts ou abri de jardin peuvent créer des zones où il perd sa précision.' },
      { h2: 'Et les robots à caméra ou LiDAR ?' },
      { p: 'Certains robots se repèrent avec des caméras ou un LiDAR (un capteur laser qui mesure les distances). Ils n’ont pas besoin du ciel, ce qui les rend intéressants sous les arbres. Beaucoup de modèles récents combinent RTK et vision pour cumuler les avantages.' },
      { table: { head: ['Votre terrain', 'Guidage conseillé'], rows: [
        ['Pelouse simple, dégagée, une seule zone', 'Fil périmétrique ou RTK'],
        ['Plusieurs zones, envie de ne rien poser', 'RTK (antenne ou réseau)'],
        ['Beaucoup d’arbres, murs hauts', 'Vision ou LiDAR, ou RTK + vision'],
        ['Couverture mobile faible au jardin', 'Fil, RTK avec antenne ou LiDAR (pas de RTK réseau)']
      ] } },
      { h2: 'Quels coûts prévoir après l’achat ?' },
      { ul: ['**Abonnement cellulaire** sur certains modèles connectés en 4G, parfois gratuit la première année seulement.', '**Lames** de rechange, à changer régulièrement.', '**Fil et cavaliers** supplémentaires si vous agrandissez la zone.'] }
    ]
  },

  // ——— Robots de piscine ———
  {
    slug: 'quel-robot-piscine-choisir', category: 'piscine', featured: true,
    kicker: 'Guide d’achat', short: 'Quel robot de piscine ?',
    title: 'Quel robot de piscine choisir ?',
    description: 'Taille et type de bassin, zones à nettoyer, filaire ou batterie, filtration : comment choisir un robot de piscine sans payer pour l’inutile.',
    publishedAt: '2026-11-27', updatedAt: '2026-11-27',
    answer: 'Vérifiez d’abord que le robot est compatible avec votre type de bassin (enterré, hors-sol rigide ou souple) et sa longueur. Prenez un modèle qui nettoie fond, parois et ligne d’eau si votre bassin a des parois verticales. Filaire pour la puissance et les longs cycles, sans fil pour la simplicité.',
    products: ['zodiac-cnx-20', 'dolphin-liberty-300', 'beatbot-aquasense-2'],
    body: [
      { h2: 'Le robot est-il compatible avec votre bassin ?' },
      { p: 'C’est le critère éliminatoire. Un robot prévu pour une piscine enterrée peut ne pas convenir à un hors-sol à parois souples. Vérifiez aussi la longueur maximale ou la surface du bassin : pour un modèle filaire, la longueur de câble doit permettre d’atteindre le point le plus éloigné.' },
      { h2: 'Quelles zones doit-il nettoyer ?' },
      { table: { head: ['Nettoie', 'Pour qui'], rows: [
        ['Fond seul', 'Petits bassins, budget serré'],
        ['Fond + parois', 'La plupart des bassins enterrés et hors-sol rigides'],
        ['Fond + parois + ligne d’eau', 'Bassins où la ligne d’eau s’encrasse (crème solaire, pollens)'],
        ['Surface (skimmer)', 'En complément, sous les arbres']
      ] } },
      { h2: 'Filaire ou sur batterie ?' },
      { p: 'Le filaire offre des cycles longs et une puissance constante, au prix d’un câble à gérer. Le sans-fil est plus simple à lancer, mais son autonomie limite la surface couverte et il faut le sortir de l’eau pour le recharger. Détails dans [filaire ou sans fil](/guides/robot-piscine-filaire-ou-sans-fil).' },
      { h2: 'Quelle filtration et quel entretien ?' },
      { ul: [
        '**Finesse de filtration** en microns : plus le chiffre est bas, plus les particules retenues sont fines. Les filtres fins se colmatent aussi plus vite.',
        '**Volume du panier** : un grand panier se vide moins souvent, utile au printemps et en automne.',
        '**Poids** : un robot plein d’eau est lourd. Une remontée automatique ou un robot léger simplifie la sortie.'
      ] },
      { callout: 'Les notices recommandent généralement de ne pas se baigner pendant le cycle de nettoyage et de rincer le filtre après chaque utilisation.', title: 'Usage' }
    ]
  },
  {
    slug: 'robot-piscine-filaire-ou-sans-fil', category: 'piscine', featured: true,
    kicker: 'Comparer', short: 'Filaire ou sans fil ?',
    title: 'Robot de piscine filaire ou sans fil ?',
    description: 'Câble ou batterie : autonomie, surface couverte, recharge, sortie de l’eau. Ce qui change vraiment au quotidien.',
    publishedAt: '2026-11-27', updatedAt: '2026-11-27',
    answer: 'Filaire si votre bassin est grand ou si vous voulez des cycles longs sans vous soucier de la charge. Sans fil si vous voulez lancer le robot en dix secondes, sans câble qui s’emmêle, et que son autonomie couvre votre bassin.',
    products: ['zodiac-tornax-gt3220', 'dolphin-nautilus-cc-pro', 'wybot-c1', 'aiper-scuba-s1'],
    body: [
      { h2: 'Qu’est-ce qui change au quotidien ?' },
      { table: { head: ['', 'Filaire', 'Sans fil'], rows: [
        ['Mise en route', 'Brancher le boîtier, dérouler le câble', 'Poser le robot dans l’eau'],
        ['Durée de nettoyage', 'Cycles programmés, puissance constante', 'Limitée par la batterie'],
        ['Taille de bassin', 'Limitée par la longueur du câble', 'Limitée par l’autonomie'],
        ['Câble', 'Peut s’entortiller avec le temps', 'Aucun'],
        ['Recharge', 'Aucune', 'Robot à sortir et recharger (sauf rares exceptions)']
      ] } },
      { h2: 'Comment sortir un robot sans fil de l’eau ?' },
      { p: 'Un robot sans fil doit être récupéré pour être rechargé. Certains reviennent vers le bord ou remontent seuls à la surface en fin de cycle, ce qui évite de les pêcher avec un crochet. C’est un critère de confort majeur si vous le lancez souvent.' },
      { h2: 'Alors, filaire ou sans fil ?' },
      { ul: ['Bassin de plus de 10 m ou très fréquenté : un filaire à long cycle.', 'Usage simple, plusieurs fois par semaine : un sans-fil avec retour au bord ou remontée automatique.', 'Sous les arbres : ajoutez un skimmer de surface, quel que soit le robot principal.'] }
    ]
  }
]

// Pages rubriques (hubs).
export const hubs = {
  tondeuse: {
    h1: 'Robots tondeuses',
    metaTitle: 'Robot tondeuse : comparatif avec et sans fil',
    description: 'Sept robots tondeuses comparés : fil périmétrique, RTK, vision et LiDAR. Surface, pente, hauteur de coupe, avec leurs limites.',
    lead: 'Fil ou pas fil, petit ou grand terrain, pentes et arbres : sept robots comparés sur les données de leurs fabricants.',
    updatedAt: '2026-11-28',
    picks: [
      { label: 'Petit jardin simple', slug: 'worx-landroid-plus-wr165e', why: 'Jusqu’à 500 m² avec fil : fiable, indépendant du ciel et du réseau, appli et capteur de pluie.' },
      { label: 'Rien à installer', slug: 'segway-navimow-i205-awd', why: 'Ni fil ni antenne (RTK réseau + caméra), 3 roues motrices, jusqu’à 500 m² et 45 % de pente.' },
      { label: 'Terrain très pentu', slug: 'mammotion-luba-mini-2-awd-1000', why: 'La plus forte pente annoncée de la sélection (80 %), jusqu’à 1 000 m², disque de bordure.' },
      { label: 'Grand terrain arboré', slug: 'dreame-a1-pro', why: 'Guidage LiDAR sans satellite, à l’aise sous les arbres, jusqu’à 2 000 m².' }
    ],
    selectionNote: 'Caractéristiques relevées sur les pages fabricants ou fiches Amazon.fr le 27 novembre 2026. Robots non testés par l’éditeur.',
    compare: [{ key: 'guidage', label: 'Guidage' }, { key: 'surface', label: 'Surface max' }, { key: 'pente', label: 'Pente max' }, { key: 'hauteur', label: 'Hauteur de coupe' }],
    body: [
      { p: 'Notez trois choses avant de comparer : **la surface réelle** (et ajoutez 20 à 30 %), **la pente la plus forte**, et **ce qui gêne la vue du ciel** (arbres, murs, abri).' },
      { ul: ['Terrain dégagé, une zone : fil ou RTK.', 'Plusieurs zones, pas envie de poser de fil : RTK avec antenne ou réseau.', 'Beaucoup d’arbres : vision ou LiDAR.', 'Pentes de plus de 35 % : roues motrices intégrales.'] },
      { p: 'Méthode complète dans le [guide d’achat](/guides/quel-robot-tondeuse-choisir) et comparaison des guidages dans [avec ou sans fil](/guides/robot-tondeuse-avec-ou-sans-fil).' }
    ],
    faq: [
      { q: 'Un robot tondeuse sans fil a-t-il besoin d’une antenne ?', a: 'Ça dépend du modèle. Certains robots RTK utilisent une antenne à installer dans le jardin ; d’autres corrigent leur position via le réseau mobile, sans antenne. Les robots à vision ou LiDAR n’ont besoin ni de l’une ni de l’autre.' },
      { q: 'Peut-on laisser un robot tondeuse dehors l’hiver ?', a: 'La plupart des fabricants recommandent de le nettoyer, recharger la batterie et le ranger à l’abri du gel pendant l’hiver. Suivez la notice de votre modèle.' },
      { q: 'Un robot tondeuse est-il dangereux pour les hérissons ?', a: 'Il peut l’être, notamment la nuit quand ils sont actifs. Programmez la tonte en journée ; certains robots à caméra annoncent en plus reconnaître les hérissons.' },
      { q: 'Faut-il ramasser l’herbe ?', a: 'Non : un robot tond souvent et peu, l’herbe coupée très fine reste au sol (mulching).' }
    ]
  },
  piscine: {
    h1: 'Robots de piscine',
    metaTitle: 'Robot de piscine : comparatif filaire et sans fil',
    description: 'Huit robots de piscine comparés : filaires, sans fil, skimmer solaire. Zones nettoyées, taille de bassin, autonomie et filtration.',
    lead: 'Type de bassin, zones à nettoyer, câble ou batterie : huit robots comparés pour trouver celui qui correspond à votre piscine.',
    updatedAt: '2026-11-28',
    picks: [
      { label: 'Petit bassin', slug: 'zodiac-tornax-gt3220', why: 'Filaire léger (5,5 kg) pour bassins jusqu’à 9 × 4 m, enterrés ou hors-sol rigides.' },
      { label: 'Bassin familial', slug: 'zodiac-cnx-20', why: 'Fond, parois et ligne d’eau jusqu’à 10 × 5 m, grand filtre cyclonique de 4 L.' },
      { label: 'Sans fil, sans appli', slug: 'dolphin-liberty-300', why: 'Batterie 150 min, recharge par induction, enterrée et hors-sol jusqu’à 10 m.' },
      { label: 'Grand bassin, confort', slug: 'beatbot-aquasense-2', why: 'Remonte seul en surface pour être récupéré, jusqu’à 300 m².' }
    ],
    selectionNote: 'Caractéristiques relevées sur les pages fabricants ou fiches Amazon.fr le 27 novembre 2026. Robots non testés par l’éditeur.',
    compare: [{ key: 'nettoie', label: 'Nettoie' }, { key: 'alim', label: 'Alimentation' }, { key: 'duree', label: 'Cycle / autonomie' }, { key: 'bassin', label: 'Bassin max' }],
    body: [
      { p: 'Commencez par vérifier la **compatibilité avec votre bassin** (enterré, hors-sol rigide ou souple) et sa **taille**. Ensuite seulement, choisissez entre filaire et batterie.' },
      { ul: ['Parois verticales : fond + parois au minimum.', 'Ligne d’eau qui jaunit : modèle qui la nettoie.', 'Grand bassin : filaire long cycle ou sans-fil à grande autonomie.', 'Beaucoup de feuilles : grand panier, et un skimmer en complément.'] },
      { p: 'Méthode complète dans le [guide d’achat](/guides/quel-robot-piscine-choisir) et comparaison détaillée dans [filaire ou sans fil](/guides/robot-piscine-filaire-ou-sans-fil).' }
    ],
    faq: [
      { q: 'Un robot de piscine remplace-t-il la filtration ?', a: 'Non. Il ramasse les débris au fond et sur les parois, mais la pompe et le filtre de la piscine restent indispensables pour filtrer et traiter l’eau.' },
      { q: 'Combien de fois par semaine le lancer ?', a: 'Cela dépend de l’environnement et de la fréquentation. Beaucoup de modèles proposent une planification tous les deux à sept jours.' },
      { q: 'Peut-on se baigner pendant le nettoyage ?', a: 'Les notices le déconseillent généralement. Lancez le cycle quand personne n’est dans l’eau.' },
      { q: 'Un robot pour piscine enterrée va-t-il dans un hors-sol ?', a: 'Pas forcément. Vérifiez la compatibilité indiquée par le fabricant, en particulier pour les bassins à parois souples.' }
    ]
  }
}

// FAQ des fiches produits : réponses construites à partir des données de la fiche, sans ajout.
export function productFaq(p) {
  const t = p.table
  const tested = { q: `Le ${p.name} a-t-il été testé par Le Robot Idéal ?`, a: 'Non. Cette fiche est documentaire : elle s’appuie sur les caractéristiques publiées par le fabricant ou le marchand, avec leur source et leur date de vérification. Les écarts entre sources sont signalés.' }
  if (p.category === 'tondeuse') {
    const wire = t.guidage.startsWith('Fil')
    const sky = /RTK/.test(t.guidage) ? ' Il a besoin d’une bonne vue du ciel' + (/NRTK|NetRTK/.test(t.guidage) ? ' et d’une couverture mobile correcte au jardin.' : '.') : ''
    return [
      { q: `Quelle surface peut tondre le ${p.name} ?`, a: `Le fabricant annonce jusqu’à ${t.surface}. Prévoyez 20 à 30 % de marge si le terrain a beaucoup de recoins ou si l’herbe pousse vite au printemps.` },
      { q: `Le ${p.name} a-t-il besoin d’un fil périmétrique ?`, a: wire ? `Oui. Il se guide avec un fil périphérique à poser ou enterrer autour de la pelouse (${t.guidage.toLowerCase()}).` : `Non. Il se repère sans fil, par ${t.guidage}.${sky}` },
      { q: `Quelle pente le ${p.name} peut-il gravir ?`, a: `${t.pente} selon le fabricant. Mesurez la pente la plus raide de votre terrain, pas la pente moyenne.` },
      tested
    ]
  }
  return [
    { q: `Quelles zones le ${p.name} nettoie-t-il ?`, a: `${t.nettoie}.` },
    { q: `Le ${p.name} est-il filaire ou sur batterie ?`, a: `${t.alim}. Cycle ou autonomie : ${t.duree}.` },
    { q: `Pour quelle taille de piscine ?`, a: t.bassin ? `Jusqu’à ${t.bassin} selon le fabricant. Vérifiez aussi la compatibilité avec votre type de bassin (enterré, hors-sol rigide ou souple).` : 'La taille de bassin maximale n’est pas confirmée par une source primaire. Interrogez le vendeur avant d’acheter pour un grand bassin.' },
    tested
  ]
}

export const guideBySlug = slug => guides.find(g => g.slug === slug)
export const guidesByCategory = key => guides.filter(g => g.category === key)
