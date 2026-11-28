// Catalogue Le Robot Idéal. ASIN contrôlés un par un sur amazon.fr le 27 novembre 2026 (titre = modèle exact).
// Caractéristiques : page du fabricant quand elle était lisible, sinon fiche Amazon.fr. Les valeurs Amazon
// manifestement fausses ne sont pas reprises. Donnée absente = non publiée. Aucun prix, aucune note.
// Fiches documentaires : aucun de ces robots n'a été testé par l'éditeur.
// Écarté : Husqvarna Aspire R4 (B0D9BRY75Y), fiche Amazon qui mélange variante filaire et sans fil.
const checkedAt = '2026-11-27'
const amazonSource = asin => ({ sourceUrl: `https://www.amazon.fr/dp/${asin}`, sourceLabel: 'fiche produit Amazon.fr' })

const raw = [
  // ——— Robots tondeuses ———
  {
    slug: 'worx-landroid-plus-wr165e', category: 'tondeuse', brand: 'Worx', model: 'Landroid Plus WR165E (M500 Plus)', name: 'Worx Landroid Plus WR165E', asin: 'B0913J9BTB',
    type: 'Fil périmétrique',
    bestFor: 'Pour un petit jardin jusqu’à 500 m², avec appli Wi-Fi et capteur de pluie.',
    keySpecs: [['Surface max', '500 m²'], ['Pente max', '35 %'], ['Largeur de coupe', '18 cm'], ['Appli', 'Oui (Wi-Fi)']],
    table: { guidage: 'Fil', surface: '500 m²', pente: '35 %', hauteur: null },
    specs: [['Guidage', 'Fil périphérique (130 m et 180 cavaliers fournis)'], ['Surface maximale', '500 m² (usage idéal annoncé 500 à 600 m²)'], ['Pente maximale', '35 %'], ['Largeur de coupe', '18 cm'], ['Batterie', 'PowerShare 20 V 2 Ah'], ['Capteur de pluie', 'Oui'], ['Appli', 'Oui, via Wi-Fi']],
    strengths: ['Format adapté aux petits terrains', 'Batterie compatible avec l’outillage PowerShare de la marque', 'Appli et capteur de pluie'],
    limits: ['Fil à poser soi-même : compter une demi-journée ou plus', 'Hauteur de coupe non confirmée par une source officielle', 'Page fabricant indisponible au moment de la vérification'],
    verdict: [{ p: 'Une valeur sûre des petits jardins simples. Le fil impose une installation, mais il ne dépend ni du GPS ni de la couverture réseau. Voir [avec ou sans fil](/guides/robot-tondeuse-avec-ou-sans-fil).' }]
  },
  {
    slug: 'bosch-indego-m-plus-700', category: 'tondeuse', brand: 'Bosch', model: 'Indego M+ 700 (06008B0303)', name: 'Bosch Indego M+ 700', asin: 'B08VJKC5RC',
    type: 'Fil périmétrique + cartographie',
    bestFor: 'Pour un jardin moyen jusqu’à 700 m² : tonte en lignes parallèles grâce à la cartographie LogiCut.',
    keySpecs: [['Surface max', '700 m²'], ['Pente max', '27 %'], ['Hauteur de coupe', '30 à 50 mm'], ['Autonomie', '75 min']],
    table: { guidage: 'Fil + cartographie', surface: '700 m²', pente: '27 %', hauteur: '30–50 mm' },
    specs: [['Guidage', 'Fil périphérique et cartographie LogiCut (175 m de fil, 240 cavaliers)'], ['Surface maximale', '700 m²'], ['Pente maximale', '27 %'], ['Largeur de coupe', '19 cm'], ['Hauteur de coupe', '30, 40 ou 50 mm'], ['Autonomie', '75 min'], ['Puissance acoustique garantie', '63 dB'], ['Appli', 'Oui ; compatible Alexa, Google Assistant, IFTTT']],
    strengths: ['Tonte méthodique en lignes plutôt qu’aléatoire', 'Bonne intégration aux assistants vocaux', 'Fabricant établi'],
    limits: ['Pente maximale plus modeste (27 %)', 'Seulement trois hauteurs de coupe', 'Fil à installer'],
    verdict: [{ p: 'Pour un terrain plutôt plat de taille moyenne, avec une tonte plus régulière qu’un robot aléatoire.' }],
    sourceUrl: 'https://www.bosch-presse.de/pressportal/de/en/autonomous-lawn-care-for-medium-and-large-gardens-bosch-robotic-lawnmowers-indego-m-700-and-indego-m-700-207232.html', sourceLabel: 'communiqué Bosch'
  },
  {
    slug: 'gardena-sileno-life-1000', category: 'tondeuse', brand: 'Gardena', model: 'SILENO life 1000 m² (15102-26)', name: 'Gardena SILENO life 1000', asin: 'B07MXQMML9',
    type: 'Fil périmétrique',
    bestFor: 'Pour un jardin jusqu’à 1 000 m² avec des pentes jusqu’à 35 %, piloté au clavier.',
    keySpecs: [['Surface max', '1 000 m²'], ['Pente max', '35 %'], ['Largeur de coupe', '22 cm'], ['Hauteur de coupe', '20 à 50 mm']],
    table: { guidage: 'Fil', surface: '1 000 m²', pente: '35 %', hauteur: '20–50 mm' },
    specs: [['Guidage', 'Fil périphérique (200 m et 300 cavaliers fournis)'], ['Surface maximale', '1 000 m²'], ['Pente maximale', '35 %'], ['Largeur de coupe', '22 cm'], ['Hauteur de coupe', '20 à 50 mm'], ['Commande', 'Clavier (version non « smart »)']],
    strengths: ['Grande surface pour un robot filaire', 'Hauteur de coupe basse possible (20 mm)', 'Pente de 35 %'],
    limits: ['Version sans appli Wi-Fi (la version smart a une autre référence)', 'Modèle ancien, risque de fin de série', 'Fil à installer'],
    verdict: [{ p: 'Un robot filaire simple pour les grands jardins, sans dépendance à une appli. Vérifiez la disponibilité : c’est une gamme en fin de cycle chez certains revendeurs.' }]
  },
  {
    slug: 'segway-navimow-i205-awd', category: 'tondeuse', brand: 'Segway', model: 'Navimow i205 AWD (avec Garage S)', name: 'Segway Navimow i205 AWD', asin: 'B0GDZ3W3PZ',
    type: 'Sans fil : RTK réseau + caméra',
    bestFor: 'Pour un jardin jusqu’à 500 m² en pente, sans fil ni antenne à installer, avec trois roues motrices.',
    keySpecs: [['Surface max', '500 m²'], ['Pente max', '45 %'], ['Hauteur de coupe', '20 à 60 mm'], ['Antenne RTK', 'Aucune (réseau)']],
    table: { guidage: 'NRTK + caméra', surface: '500 m²', pente: '45 %', hauteur: '20–60 mm' },
    specs: [['Guidage', 'EFLS : réseau RTK (NRTK) + caméra 140°, sans fil ni antenne'], ['Surface maximale', '500 m²'], ['Pente maximale', '45 %'], ['Transmission', '3 roues motrices'], ['Largeur de coupe', '18 cm'], ['Hauteur de coupe', '20 à 60 mm, réglage manuel'], ['Autonomie', '60 min'], ['Bruit', '59 dB'], ['Antivol', 'Suivi GPS, alarmes de levage et de sortie de zone, code PIN'], ['Connectivité', 'Connect+ cellulaire gratuit 1 an, puis 29,90 €/an selon Navimow'], ['Inclus', 'Garage S']],
    strengths: ['Aucune installation de fil ni d’antenne', 'Motricité intégrale pour les pentes', 'Antivol complet'],
    limits: ['Abonnement cellulaire payant après la première année', 'Petite surface pour un robot de ce type', 'Hauteur de coupe à régler à la main'],
    verdict: [{ p: 'Le plus simple à mettre en route de la sélection : pas de fil, pas d’antenne. Le positionnement réseau suppose une bonne couverture mobile au jardin.' }],
    sourceUrl: 'https://fr.navimow.com/products/navimow-i2-awd-robot-lawn-mower', sourceLabel: 'site Navimow France'
  },
  {
    slug: 'ecovacs-goat-o600-rtk', category: 'tondeuse', brand: 'Ecovacs', model: 'GOAT O600 RTK', name: 'Ecovacs GOAT O600 RTK', asin: 'B0G5WQ1N37',
    type: 'Sans fil : RTK + vision',
    bestFor: 'Pour un jardin jusqu’à 600 m² avec obstacles : la caméra reconnaît plus de 200 types d’objets, dont les hérissons.',
    keySpecs: [['Surface max', '600 m²'], ['Pente max', '45 %'], ['Hauteur de coupe', '30 à 80 mm'], ['Bruit', '58 dB']],
    table: { guidage: 'RTK + vision', surface: '600 m²', pente: '45 %', hauteur: '30–80 mm' },
    specs: [['Guidage', 'RTK TrueMapping 2.0 + positionnement visuel'], ['Surface maximale', '600 m²'], ['Pente maximale', '45 %'], ['Hauteur de coupe', '30 à 80 mm'], ['Largeur de coupe', 'Non confirmée (valeur Amazon incohérente)'], ['Bruit', '58 dB'], ['Détection', 'Caméra IA, plus de 200 types d’obstacles'], ['Mise en route', 'Annoncée en 15 minutes']],
    strengths: ['Détection d’obstacles avancée', 'Plage de hauteur de coupe très large', 'Sans fil périmétrique'],
    limits: ['Présence d’une station RTK dans la boîte non précisée par le fabricant', 'Largeur de coupe non confirmée', 'Assemblage requis'],
    verdict: [{ p: 'Intéressant pour un jardin encombré (jeux, mobilier, animaux). Avant achat, vérifiez sur la page du marchand si la station RTK est fournie et où l’installer, à l’écart des arbres et des murs.' }],
    sourceUrl: 'https://www.ecovacs.com/fr/goat-robotic-lawn-mower/goat-o600-rtk', sourceLabel: 'site Ecovacs France'
  },
  {
    slug: 'mammotion-luba-mini-2-awd-1000', category: 'tondeuse', brand: 'Mammotion', model: 'LUBA mini 2 AWD 1000', name: 'Mammotion LUBA mini 2 AWD', asin: 'B0GL27NDQB',
    type: 'Sans fil : RTK réseau + vision',
    bestFor: 'Pour un terrain jusqu’à 1 000 m² très pentu, sans antenne à installer, avec module 4G intégré.',
    keySpecs: [['Surface max', '1 000 m²'], ['Pente annoncée', '80 %'], ['Hauteur de coupe', '20 à 65 mm'], ['Autonomie', '150 min']],
    table: { guidage: 'NetRTK + vision', surface: '1 000 m²', pente: '80 %', hauteur: '20–65 mm' },
    specs: [['Guidage', 'NetRTK + vision IA à trois caméras, sans antenne'], ['Surface maximale', '1 000 m²'], ['Pente maximale annoncée', '80 %'], ['Transmission', 'Roues motrices intégrales'], ['Largeur de coupe', '20 cm + disque de bordure 12 cm'], ['Hauteur de coupe', '20 à 65 mm, réglable dans l’appli'], ['Autonomie', '150 min'], ['Bruit', '58 dB'], ['Connectivité', '4G intégrée, 3 ans de service inclus selon Mammotion']],
    strengths: ['Capacité de pente la plus élevée de la sélection', 'Disque de bordure pour finir les contours', 'Grande autonomie'],
    limits: ['Conditions du service 4G après trois ans non précisées', 'Fonctions antivol non détaillées par le fabricant', 'Robot plus complexe, beaucoup de réglages dans l’appli'],
    verdict: [{ p: 'Le choix des terrains difficiles. Vérifiez la couverture mobile au fond du jardin : elle conditionne le positionnement réseau.' }],
    sourceUrl: 'https://eu.mammotion.com/products/luba-mini-2-awd-1000-robot-lawn-mower', sourceLabel: 'site Mammotion Europe'
  },
  {
    slug: 'dreame-a1-pro', category: 'tondeuse', brand: 'Dreame', model: 'A1 Pro (MLLA7210)', name: 'Dreame A1 Pro', asin: 'B0DR35G7P3',
    type: 'Sans fil : LiDAR 3D',
    bestFor: 'Pour un grand terrain jusqu’à 2 000 m² sous les arbres : guidage LiDAR, sans fil, sans RTK ni signal satellite.',
    keySpecs: [['Surface max', '2 000 m²'], ['Pente max', '45 %'], ['Hauteur de coupe', '30 à 70 mm'], ['Guidage', 'LiDAR 3D']],
    table: { guidage: 'LiDAR 3D', surface: '2 000 m²', pente: '45 %', hauteur: '30–70 mm' },
    specs: [['Guidage', 'LiDAR 3D 360° OmniSense, ni fil ni RTK'], ['Surface maximale', '2 000 m² (mode efficacité, 1 000 m² par 24 h en standard)'], ['Pente maximale', '45 %'], ['Largeur de coupe', '22 cm'], ['Hauteur de coupe', '30 à 70 mm'], ['Batterie', '5 Ah, recharge 65 min'], ['Étanchéité', 'IPX6'], ['Antivol', 'Alerte sonore et notification en cas de levage'], ['Option', 'Module cellulaire vendu à part']],
    strengths: ['Ne dépend ni du GPS ni du réseau : à l’aise sous les arbres', 'Grande surface', 'Recharge rapide'],
    limits: ['Le module cellulaire est en option', 'Autonomie non publiée', 'Robot volumineux pour un petit jardin'],
    verdict: [{ p: 'Le LiDAR contourne la principale faiblesse des robots RTK : les zones couvertes par les arbres ou entourées de murs. Le plus polyvalent de la sélection pour les grands terrains.' }],
    sourceUrl: 'https://fr.dreametech.com/products/robot-tondeuse-dreame-a1-pro', sourceLabel: 'site Dreame France'
  },

  // ——— Robots de piscine ———
  {
    slug: 'zodiac-tornax-gt3220', category: 'piscine', brand: 'Zodiac', model: 'TornaX GT 3220 (WR000189)', name: 'Zodiac TornaX GT 3220', asin: 'B089KNWSZL',
    type: 'Filaire, fond + parois',
    bestFor: 'Pour un petit bassin jusqu’à 9 × 4 m, enterré ou hors-sol à parois rigides : simple et léger.',
    keySpecs: [['Bassin max', '9 × 4 m'], ['Nettoie', 'Fond + parois'], ['Câble', '16,5 m'], ['Poids', '5,5 kg']],
    table: { nettoie: 'Fond, parois', alim: 'Filaire', duree: '150 min (câble 16,5 m)', bassin: '9 × 4 m' },
    specs: [['Alimentation', 'Filaire 230 V, câble 16,5 m'], ['Bassin', 'Jusqu’à 36 m², 9 × 4 m'], ['Nettoie', 'Fond et parois'], ['Cycle', '150 min'], ['Filtration', '100 µm (filtres 60 et 200 µm en option)'], ['Poids', '5,5 kg'], ['Type de piscine', 'Enterrée et hors-sol à parois rigides'], ['Appli', 'Non']],
    strengths: ['Léger, facile à sortir de l’eau', 'Filtres optionnels selon la saison', 'Compatible hors-sol rigide'],
    limits: ['Ne nettoie pas la ligne d’eau', 'Petits bassins uniquement', 'Pas de baignade pendant le cycle'],
    verdict: [{ p: 'Une entrée en matière fiable pour les petits bassins. Le titre Amazon parle de « robot de fond », mais la fiche et le catalogue Zodiac indiquent fond et parois.' }]
  },
  {
    slug: 'zodiac-cnx-20', category: 'piscine', brand: 'Zodiac', model: 'CNX 20', name: 'Zodiac CNX 20', asin: 'B08QMJZCPX',
    type: 'Filaire, fond + parois + ligne d’eau',
    bestFor: 'Pour une piscine familiale jusqu’à 10 × 5 m : nettoyage complet avec un grand filtre cyclonique de 4 L.',
    keySpecs: [['Bassin max', '10 × 5 m'], ['Nettoie', 'Fond, parois, ligne'], ['Câble', '15 m'], ['Filtre', '4 L, 100 µm']],
    table: { nettoie: 'Fond, parois, ligne', alim: 'Filaire', duree: '90 / 150 min (câble 15 m)', bassin: '10 × 5 m' },
    specs: [['Alimentation', 'Filaire, câble 15 m'], ['Bassin', 'Jusqu’à 10 × 5 m (50 m²)'], ['Nettoie', 'Fond, parois et ligne d’eau'], ['Cycles', '90 min (fond seul) ou 150 min (complet)'], ['Filtration', 'Filtre cyclonique 4 L, 100 µm'], ['Appli', 'Non']],
    strengths: ['Nettoyage complet jusqu’à la ligne d’eau', 'Grand filtre, moins de vidages', 'Deux cycles au choix'],
    limits: ['Poids du robot seul non confirmé', 'Câble à démêler de temps en temps', 'Fiche officielle non consultée'],
    verdict: [{ p: 'Le robot filaire « tout-en-un » pour le bassin familial classique.' }]
  },
  {
    slug: 'dolphin-nautilus-cc-pro', category: 'piscine', brand: 'Dolphin (Maytronics)', model: 'Nautilus CC Pro (99996207-EU)', name: 'Dolphin Nautilus CC Pro', asin: 'B0BP8G6T4Z',
    type: 'Filaire, fond + parois + ligne d’eau',
    bestFor: 'Pour une grande piscine enterrée jusqu’à 15 m, avec pilotage depuis l’appli.',
    keySpecs: [['Bassin max', '15 m'], ['Nettoie', 'Fond, parois, ligne'], ['Câble', '17 m'], ['Cycle', '120 min']],
    table: { nettoie: 'Fond, parois, ligne', alim: 'Filaire', duree: '120 min (câble 17 m)', bassin: '15 m' },
    specs: [['Alimentation', 'Filaire, câble 17 m (fiche Maytronics EU)'], ['Bassin', 'Jusqu’à 15 m de long'], ['Nettoie', 'Fond, parois et ligne d’eau'], ['Cycle', '120 min'], ['Filtration', 'Kits fins et ultra-fins (microns non publiés)'], ['Poids', '7,88 kg'], ['Type de piscine', 'Enterrée selon Maytronics Europe (Amazon le présente comme hors-sol)'], ['Appli', 'Oui, Wi-Fi']],
    strengths: ['Grands bassins jusqu’à 15 m', 'Appli pour programmer et piloter', 'Marque spécialisée'],
    limits: ['Désaccord entre Amazon (hors-sol) et le fabricant (enterrée) : vérifiez votre type de bassin', 'Finesse de filtration non chiffrée', 'Filaire'],
    verdict: [{ p: 'Pour les grandes piscines enterrées. Si votre bassin est hors-sol, interrogez le vendeur avant achat : la fiche européenne du fabricant ne le prévoit pas.' }],
    sourceUrl: 'https://www.maytronics.com/global/robotic-pool-cleaners/dolphin-pool-cleaners/best-performance/dolphin-nautilus-cc-pro/99996207-EU.html', sourceLabel: 'site Maytronics'
  },
  {
    slug: 'dolphin-liberty-300', category: 'piscine', brand: 'Dolphin (Maytronics)', model: 'Liberty 300 (99998130-EU)', name: 'Dolphin Liberty 300', asin: 'B0BZSRXWGB',
    type: 'Sans fil, fond + parois + ligne d’eau',
    bestFor: 'Pour une piscine jusqu’à 10 m, enterrée ou hors-sol, sans câble à gérer et sans appli.',
    keySpecs: [['Bassin max', '10 m'], ['Autonomie', '150 min'], ['Recharge', 'Induction'], ['Poids', '8,1 kg']],
    table: { nettoie: 'Fond, parois, ligne', alim: 'Batterie', duree: '150 min', bassin: '10 m' },
    specs: [['Alimentation', 'Batterie 126 Wh, recharge par induction (connecteur magnétique)'], ['Autonomie', '150 min'], ['Bassin', 'Jusqu’à 10 m'], ['Nettoie', 'Fond, parois et ligne d’eau'], ['Mode Éco', '3 cycles de fond par charge'], ['Filtration', 'Kits combiné et ultra-fin fournis (microns non publiés)'], ['Poids', '8,1 kg'], ['Type de piscine', 'Enterrée et hors-sol'], ['Appli', 'Non']],
    strengths: ['Aucun câble dans le bassin', 'Recharge sans contact électrique exposé', 'Compatible hors-sol'],
    limits: ['Il faut le sortir de l’eau pour le recharger', 'Pas d’appli', 'Finesse de filtration non chiffrée'],
    verdict: [{ p: 'Le sans-fil d’une marque spécialisée, sans fioriture. Pensez au poids du robot plein d’eau au moment de le sortir.' }],
    sourceUrl: 'https://www.maytronics.com/global/dolphin-liberty-300/99998130-EU.html', sourceLabel: 'site Maytronics'
  },
  {
    slug: 'wybot-c1', category: 'piscine', brand: 'Wybot', model: 'C1 (OS7010C)', name: 'Wybot C1', asin: 'B0CR44HK52',
    type: 'Sans fil, fond + parois + ligne d’eau',
    bestFor: 'Pour une piscine jusqu’à 150 m² : sans fil, retour automatique au bord en fin de batterie, planification.',
    keySpecs: [['Bassin max', '150 m²'], ['Autonomie', '150 min'], ['Filtration', '180 µm'], ['Poids', '8,5 kg']],
    table: { nettoie: 'Fond, parois, ligne', alim: 'Batterie', duree: '150 min', bassin: '150 m²' },
    specs: [['Alimentation', 'Batterie, recharge en 3 h'], ['Autonomie', '150 min'], ['Bassin', 'Jusqu’à 150 m²'], ['Nettoie', 'Fond, parois et ligne d’eau'], ['Filtration', '180 µm (manuel Wybot)'], ['Poids', '8,5 kg'], ['Planification', 'Tous les 2, 3 ou 7 jours'], ['Retour', 'Revient vers le bord batterie faible'], ['Appli', 'Oui']],
    strengths: ['Retour automatique au bord', 'Planification intégrée', 'Grande surface annoncée'],
    limits: ['Filtration moins fine (180 µm) que d’autres modèles', 'Type de piscine non précisé', 'Un modèle plus récent existe sous une autre référence'],
    verdict: [{ p: 'Un sans-fil bien équipé pour les bassins moyens à grands. Vérifiez la référence exacte au moment de l’achat : un C1 plus récent circule sous un autre ASIN.' }]
  },
  {
    slug: 'aiper-scuba-s1', category: 'piscine', brand: 'Aiper', model: 'Scuba S1 (2026)', name: 'Aiper Scuba S1', asin: 'B0CPSQBFNG',
    type: 'Sans fil, fond + parois + ligne d’eau',
    bestFor: 'Pour un nettoyage complet sans fil, avec filtration ultra-fine et un mode Éco qui prolonge l’autonomie.',
    keySpecs: [['Autonomie', '180 min (270 en Éco)'], ['Filtration', '180 µm + 3 µm'], ['Filtre', '3,5 L'], ['Poids', '7,5 kg']],
    table: { nettoie: 'Fond, parois, ligne', alim: 'Batterie', duree: '180 min (Éco 270)', bassin: null },
    specs: [['Alimentation', 'Batterie 112 Wh'], ['Autonomie', 'Jusqu’à 180 min (Auto/Fond/Parois), 240 à 270 min en Éco'], ['Nettoie', 'Fond, parois et ligne d’eau'], ['Filtration', '180 µm + filtre ultra-fin 3 µm'], ['Panier', '3,5 L'], ['Poids', '7,5 kg'], ['Appli', 'Oui'], ['Taille de bassin', 'Non confirmée par une source primaire']],
    strengths: ['Filtration ultra-fine', 'Autonomie étendue en mode Éco', 'Léger pour un sans-fil'],
    limits: ['Taille de bassin maximale non confirmée', 'Plusieurs millésimes et couleurs sous des ASIN différents', 'Page fabricant indisponible'],
    verdict: [{ p: 'Un sans-fil complet et léger. Assurez-vous d’acheter le millésime 2026 indiqué sur la page.' }]
  },
  {
    slug: 'beatbot-aquasense-2', category: 'piscine', brand: 'Beatbot', model: 'AquaSense 2', name: 'Beatbot AquaSense 2', asin: 'B0DNMCFQ7K',
    type: 'Sans fil, fond + parois + ligne d’eau',
    bestFor: 'Pour une grande piscine jusqu’à 300 m² : remonte seul en surface pour être récupéré, recharge sans fil.',
    keySpecs: [['Bassin max', '300 m²'], ['Autonomie', '150 à 240 min'], ['Remontée', 'Automatique'], ['Poids', '10,5 kg']],
    table: { nettoie: 'Fond, parois, ligne', alim: 'Batterie', duree: '150 min (240 fond seul)', bassin: '300 m²' },
    specs: [['Alimentation', 'Batterie 10 000 mAh, recharge sans fil 3,5 à 4 h'], ['Autonomie', '240 min (fond seul) ; 150 min annoncées en mode complet'], ['Bassin', 'Jusqu’à 300 m²'], ['Nettoie', 'Fond, parois et ligne d’eau'], ['Sortie de l’eau', 'Remontée automatique SmartDrain, rappel depuis l’appli'], ['Filtration', '150 µm (fiche Beatbot US)'], ['Panier', '2 L'], ['Poids', '10,47 kg']],
    strengths: ['Remonte seul : plus besoin de crochet pour le sortir', 'Très grande surface', 'Recharge sans fil'],
    limits: ['Le plus lourd de la sélection', 'Panier de 2 L, plus petit que d’autres', 'Type de piscine non précisé'],
    verdict: [{ p: 'Le confort d’usage avant tout : la remontée automatique règle le principal défaut des robots sans fil, les sortir de l’eau.' }],
    sourceUrl: 'https://fr.beatbot.com/products/aquasense-2', sourceLabel: 'site Beatbot France'
  },
  {
    slug: 'aiper-ecosurfer-s2', category: 'piscine', brand: 'Aiper', model: 'EcoSurfer S2 (SKS2-FR)', name: 'Aiper EcoSurfer S2', asin: 'B0GFWKSQVZ',
    type: 'Skimmer solaire de surface',
    bestFor: 'En complément d’un robot de fond : il ramasse feuilles et insectes à la surface, rechargé par le soleil.',
    keySpecs: [['Nettoie', 'Surface'], ['Recharge', 'Solaire + secteur'], ['Filtration', '150 µm'], ['Chlore', 'Compartiment 3"']],
    table: { nettoie: 'Surface', alim: 'Solaire + batterie', duree: 'Continu au soleil', bassin: null },
    specs: [['Alimentation', 'Batterie, recharge solaire et secteur'], ['Autonomie', 'En continu au soleil ; jusqu’à 35 h annoncées avec recharge secteur'], ['Nettoie', 'Surface uniquement'], ['Filtration', '150 µm'], ['Diffuseur', 'Compartiment pour pastilles de chlore 3 pouces'], ['Appli', 'Oui']],
    strengths: ['Capte les débris avant qu’ils ne coulent', 'Fonctionne en continu au soleil', 'Peu d’entretien'],
    limits: ['Ne nettoie ni le fond ni les parois', 'Compatibilité hors-sol non confirmée sur la fiche française', 'Poids non communiqué'],
    verdict: [{ p: 'Pas un robot de fond, mais un excellent complément sous les arbres : moins de feuilles au fond, moins de travail pour le robot principal.' }]
  }
]

export const products = raw.map(p => ({ ...amazonSource(p.asin), ...p, checkedAt: p.checkedAt ?? checkedAt }))

export const productBySlug = slug => products.find(p => p.slug === slug)
export const productsByCategory = key => products.filter(p => p.category === key)
