# Le Robot Idéal

Site d’affiliation Amazon consacré aux robots tondeuses et robots de piscine. Nuxt 4 (SSR) + Tailwind CSS 4, contenus dans le code, déployé sur Dokploy.

## Démarrer

```sh
pnpm install
pnpm dev
```

Contrôles avant chaque mise en ligne :

```sh
pnpm check:content   # catalogue : slugs, ASIN, références croisées
pnpm build
pnpm check:seo       # démarre le serveur compilé et contrôle toutes les pages (title, H1, canonical, liens Amazon)
```

## Où sont les contenus

- `shared/data/site.js` : identité, éditeur, rubriques et couleurs.
- `shared/data/products.js` : fiches produits (ASIN vérifiés le 27/11/2026, source et date sur chaque fiche).
- `shared/data/guides.js` : guides et contenu des pages rubriques (FAQ, tableau comparatif).
- `app/assets/css/main.css` : jetons du thème (bloc `@theme`).

Règles éditoriales (formation SEO) : une intention par page, réponse courte en tête, chiffres sourcés et datés, aucune note ni test inventé, aucun prix affiché, affiliation signalée, liens `rel="sponsored"`.

## Variables d’environnement (Dokploy)

```text
NUXT_PUBLIC_SITE_URL=https://lerobotideal.fr
NUXT_PUBLIC_SITE_LIVE=true        # false = recette (noindex, robots.txt bloquant, sitemap vide)
NUXT_PUBLIC_AMAZON_TAG=xxxxx-21   # identifiant de suivi propre à ce site
```

Sans `NUXT_PUBLIC_AMAZON_TAG`, les boutons Amazon ne s’affichent pas en production.

## Déploiement Dokploy

1. Créer un dépôt GitHub et pousser `main`.
2. Dans Dokploy : nouvelle application, source GitHub, build type **Dockerfile**, port **3000**.
3. Renseigner les variables ci-dessus (d’abord `SITE_LIVE=false` sur le domaine provisoire).
4. Ajouter le domaine `lerobotideal.fr` (+ `www` en redirection), HTTPS Let’s Encrypt.
5. Passer `NUXT_PUBLIC_SITE_LIVE=true`, redéployer, puis déclarer le site et `/sitemap.xml` dans Google Search Console et Bing Webmaster Tools.

Saison haute : mars à juin. Mettre en ligne dès que possible pour être indexé avant le printemps, et compléter les contenus en janvier-février.
