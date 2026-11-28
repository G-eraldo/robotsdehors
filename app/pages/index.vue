<script setup>
import { site, categories } from '#shared/data/site.js'
import { guides } from '#shared/data/guides.js'
import { productsByCategory } from '#shared/data/products.js'

const featuredGuides = guides.filter(g => g.featured)
const counts = Object.fromEntries(categories.map(c => [c.key, productsByCategory(c.key).length]))

usePageSeo({
  title: site.name,
  description: site.description,
  path: '/',
  jsonLd: [
    { '@type': 'WebSite', name: site.name, url: `https://${site.domain}/`, inLanguage: 'fr-FR' },
    { '@type': 'Organization', name: site.name, url: `https://${site.domain}/`, logo: `https://${site.domain}/logo.png`, founder: { '@type': 'Person', name: site.publisher.name } }
  ]
})
</script>

<template>
  <div>
    <section class="px-3 pt-3 sm:px-5 sm:pt-5">
      <div class="relative overflow-hidden rounded-[1.75rem] bg-[#0f2a1d] text-white">
        <div class="absolute inset-0 bg-[radial-gradient(70%_90%_at_0%_100%,rgb(47_154_90/0.45),transparent_60%),radial-gradient(60%_80%_at_100%_0%,rgb(11_127_171/0.45),transparent_60%)]" />
        <div class="relative mx-auto max-w-6xl px-6 py-16 sm:px-10 md:py-24">
          <p class="text-sm font-semibold uppercase tracking-[0.14em] text-[#9fe0b6]">Robots d’extérieur</p>
          <h1 class="mt-4 max-w-4xl text-[clamp(2.5rem,6.6vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
            Le jardin et la piscine,<br><span class="text-white/60">sans y passer le week-end.</span>
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Robot tondeuse ou robot de piscine : on part de votre terrain et de votre bassin pour trouver le bon guidage, la bonne autonomie, le bon format. Données fabricants vérifiées, limites comprises.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink v-for="c in categories" :key="c.slug" :to="`/${c.slug}`" class="press rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink">{{ c.label }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto mt-16 max-w-6xl px-5 sm:px-8" aria-label="Rubriques">
      <div class="grid gap-5 md:grid-cols-2">
        <NuxtLink
          v-for="c in categories" :key="c.slug" :to="`/${c.slug}`"
          class="press group grid overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-card transition-shadow duration-200 hover:shadow-lift sm:grid-cols-[1fr_1.1fr]"
        >
          <div class="aspect-[4/3] sm:aspect-auto"><ProductArt :kind="c.key" :tint="c.tint" :color="c.color" /></div>
          <div class="flex flex-col p-6">
            <p class="text-xs font-semibold uppercase tracking-[0.1em]" :style="{ color: c.color }">{{ c.short }}</p>
            <h2 class="mt-1 text-2xl font-semibold tracking-[-0.025em]">{{ c.label }}</h2>
            <p class="mt-2 text-[0.95rem] leading-relaxed text-muted">{{ c.pitch }}</p>
            <p class="mt-auto pt-5 text-sm font-medium">
              {{ counts[c.key] }} modèles comparés
              <span class="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </p>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
      <div class="flex items-end justify-between gap-4">
        <h2 class="text-[clamp(1.7rem,3.4vw,2.5rem)] font-semibold tracking-[-0.03em]">Les bonnes questions d’abord</h2>
        <NuxtLink to="/guides" class="text-sm font-medium text-accent-ink hover:underline">Tous les guides</NuxtLink>
      </div>
      <ol class="mt-8 grid gap-4 sm:grid-cols-2">
        <li v-for="(g, i) in featuredGuides" :key="g.slug">
          <NuxtLink :to="`/guides/${g.slug}`" class="press flex h-full gap-5 rounded-[var(--radius-card)] bg-surface p-6 shadow-card transition-shadow duration-200 hover:shadow-lift">
            <span class="text-3xl font-semibold tabular-nums tracking-[-0.04em] text-ink/20">{{ String(i + 1).padStart(2, '0') }}</span>
            <span>
              <span class="block text-lg font-semibold leading-snug tracking-[-0.02em]">{{ g.title }}</span>
              <span class="mt-2 block text-[0.95rem] leading-relaxed text-muted">{{ g.description }}</span>
            </span>
          </NuxtLink>
        </li>
      </ol>
    </section>

    <section class="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
      <div class="grid gap-6 border-t border-line pt-10 md:grid-cols-3">
        <div>
          <p class="font-semibold">Données du fabricant</p>
          <p class="mt-2 text-sm leading-relaxed text-muted">Surface, pente, autonomie, filtration : chaque valeur renvoie à sa source et à sa date de vérification. Les écarts entre sources sont signalés.</p>
        </div>
        <div>
          <p class="font-semibold">Pas de faux tests</p>
          <p class="mt-2 text-sm leading-relaxed text-muted">Quand un robot n’a pas été utilisé, la fiche le dit. Aucune note inventée.</p>
        </div>
        <div>
          <p class="font-semibold">Affiliation affichée</p>
          <p class="mt-2 text-sm leading-relaxed text-muted">Les liens Amazon sont signalés et ne changent pas votre prix. <NuxtLink to="/methode" class="underline underline-offset-2">Notre méthode</NuxtLink></p>
        </div>
      </div>
    </section>
  </div>
</template>
