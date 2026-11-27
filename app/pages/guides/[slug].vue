<script setup>
import { site, categoryByKey } from '#shared/data/site.js'
import { guideBySlug } from '#shared/data/guides.js'
import { productBySlug } from '#shared/data/products.js'

const route = useRoute()
const guide = guideBySlug(route.params.slug)
if (!guide) throw createError({ statusCode: 404, statusMessage: 'Guide introuvable', fatal: true })
const cat = categoryByKey(guide.category)
const related = (guide.products || []).map(productBySlug).filter(Boolean)
const fmt = d => new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
const toc = guide.body.filter(b => b.h2).map(b => b.h2)
const anchor = s => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
const path = `/guides/${guide.slug}`

usePageSeo({
  title: guide.metaTitle || guide.title,
  description: guide.description,
  path,
  type: 'article',
  breadcrumbs: [['Guides', '/guides'], [guide.title, path]],
  jsonLd: [{
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    inLanguage: 'fr-FR',
    author: { '@type': 'Person', name: site.publisher.name },
    publisher: { '@type': 'Organization', name: site.name },
    mainEntityOfPage: `https://${site.domain}${path}`
  }]
})
</script>

<template>
  <div v-if="guide" class="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
    <Crumbs :items="[{ label: 'Guides', to: '/guides' }, { label: guide.short || guide.title }]" />
    <header class="mt-8 max-w-3xl">
      <p class="text-sm font-semibold uppercase tracking-[0.1em]" :style="{ color: cat.color }">{{ guide.kicker }}</p>
      <h1 class="mt-2 text-[clamp(2.1rem,5vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.04em]">{{ guide.title }}</h1>
      <p class="mt-5 text-lg leading-relaxed text-ink/75 sm:text-xl">{{ guide.description }}</p>
      <p class="mt-5 text-sm text-muted">Par {{ site.publisher.name }} · mis à jour le {{ fmt(guide.updatedAt) }}</p>
    </header>

    <div class="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem]">
      <article class="min-w-0 max-w-3xl">
        <aside v-if="guide.answer" class="mb-10 rounded-[var(--radius-card)] p-6" :style="{ background: cat.tint }">
          <p class="text-xs font-semibold uppercase tracking-[0.08em]" :style="{ color: cat.color }">La réponse courte</p>
          <p class="mt-2 text-[1.08rem] leading-relaxed">{{ guide.answer }}</p>
        </aside>
        <ContentBlocks :blocks="guide.body" />

        <section v-if="related.length" class="mt-14">
          <h2 class="text-[1.6rem] font-semibold tracking-[-0.02em]">Appareils cités</h2>
          <div class="mt-6 grid gap-5 sm:grid-cols-2">
            <ProductCard v-for="p in related" :key="p.slug" :product="p" />
          </div>
        </section>

        <section v-if="guide.sources?.length" class="mt-14 border-t border-line pt-6">
          <h2 class="text-sm font-semibold">Sources</h2>
          <ul class="mt-3 space-y-1.5 text-sm text-muted">
            <li v-for="s in guide.sources" :key="s.url"><a :href="s.url" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-ink">{{ s.label }}</a></li>
          </ul>
        </section>
      </article>

      <aside class="hidden lg:block">
        <div class="sticky top-24 space-y-6">
          <nav v-if="toc.length > 2" aria-label="Sommaire">
            <p class="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Sommaire</p>
            <ol class="mt-3 space-y-2 border-l border-line text-sm">
              <li v-for="t in toc" :key="t"><a :href="`#${anchor(t)}`" class="-ml-px block border-l border-transparent pl-4 text-ink/70 hover:border-ink hover:text-ink">{{ t }}</a></li>
            </ol>
          </nav>
          <NuxtLink :to="`/${cat.slug}`" class="press block rounded-[var(--radius-card)] p-5 text-sm" :style="{ background: cat.tint }">
            <span class="font-semibold">La sélection {{ cat.label.toLowerCase() }}</span>
            <span class="mt-1 block text-ink/70">Comparer les modèles vérifiés →</span>
          </NuxtLink>
        </div>
      </aside>
    </div>
  </div>
</template>
