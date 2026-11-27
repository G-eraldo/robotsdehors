# Leçons durables

- Tester `pnpm dev` en plus de `pnpm build` + `check:seo` : en dev, Nitro réécrit mal les imports relatifs `../../app/...` depuis `server/` (erreur « Cannot find module '/app/data/site.js' »), alors que la production fonctionne.
- Données partagées entre pages et routes serveur : dossier `shared/` et alias `#shared/...` (Nuxt 4), jamais d'import relatif vers `app/`.
- Page dynamique introuvable : `throw createError({ statusCode: 404, fatal: true })` dans le setup **et** `v-if` sur la racine du template ; `definePageMeta({ validate })` seul n'empêche pas le setup de s'exécuter en SSR.
