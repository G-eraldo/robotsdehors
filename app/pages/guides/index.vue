<script setup>
import { categories } from '#shared/data/site.js'
import { guides } from '#shared/data/guides.js'

const groups = categories.map(c => ({ ...c, items: guides.filter(g => g.category === c.key) })).filter(g => g.items.length)
usePageSeo({
  title: 'Guides d’achat et conseils',
  description: 'Tous les guides pour bien choisir un robot tondeuse ou un robot de piscine selon votre terrain et votre bassin.',
  path: '/guides',
  breadcrumbs: [['Guides', '/guides']]
})
</script>

<template>
  <div class="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
    <Crumbs :items="[{ label: 'Guides' }]" />
    <h1 class="mt-8 text-[clamp(2.3rem,5.5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.04em]">Guides</h1>
    <p class="mt-4 max-w-2xl text-lg text-ink/75">Des réponses courtes d’abord, le détail ensuite. Chaque guide cite ses sources.</p>
    <section v-for="g in groups" :key="g.key" class="mt-14">
      <h2 class="text-sm font-semibold uppercase tracking-[0.1em]" :style="{ color: g.color }">{{ g.label }}</h2>
      <div class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink v-for="item in g.items" :key="item.slug" :to="`/guides/${item.slug}`" class="press rounded-[var(--radius-card)] bg-surface p-6 shadow-card transition-shadow hover:shadow-lift">
          <p class="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{{ item.kicker }}</p>
          <h3 class="mt-2 text-lg font-semibold leading-snug tracking-[-0.015em]">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted">{{ item.description }}</p>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
