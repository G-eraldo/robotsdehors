<script setup>
import { site, categoryBySlug } from '#shared/data/site.js'
import { productsByCategory, productBySlug } from '#shared/data/products.js'
import { hubs, guidesByCategory } from '#shared/data/guides.js'

const route = useRoute()
const cat = categoryBySlug(route.params.category)
if (!cat) throw createError({ statusCode: 404, statusMessage: 'Page introuvable', fatal: true })

const hub = hubs[cat.key]
const products = productsByCategory(cat.key)
const guides = guidesByCategory(cat.key)
const path = `/${cat.slug}`
const picks = (hub.picks || []).map(p => ({ ...p, product: productBySlug(p.slug) })).filter(p => p.product)
const updated = new Date(hub.updatedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

usePageSeo({
  title: hub.metaTitle,
  description: hub.description,
  path,
  breadcrumbs: [[cat.label, path]],
  jsonLd: [{
    '@type': 'FAQPage',
    mainEntity: hub.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  }]
})
</script>

<template>
  <div v-if="cat">
    <header class="relative overflow-hidden">
      <div class="absolute inset-0 -z-10" :style="{ background: `radial-gradient(70% 90% at 85% 0%, ${cat.tint}, transparent 70%)` }" />
      <div class="mx-auto max-w-6xl px-5 pb-10 pt-8 sm:px-8 md:pt-12">
        <Crumbs :items="[{ label: cat.label }]" />
        <p class="mt-8 text-sm font-semibold uppercase tracking-[0.1em]" :style="{ color: cat.color }">{{ cat.short }}</p>
        <h1 class="mt-2 max-w-3xl text-[clamp(2.3rem,5.5vw,4rem)] font-semibold leading-[1.02] tracking-[-0.04em]">{{ hub.h1 }}</h1>
        <p class="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75 sm:text-xl">{{ hub.lead }}</p>
        <p class="mt-4 text-sm text-muted">Mis à jour le {{ updated }} par <NuxtLink to="/a-propos" class="underline underline-offset-2 hover:text-ink">{{ site.publisher.name }}</NuxtLink></p>
        <div class="mt-7 flex flex-wrap gap-2">
          <a href="#selection" class="press rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white">Voir la sélection</a>
          <a href="#choisir" class="press rounded-full bg-surface px-5 py-2.5 text-sm font-medium shadow-card">Comment choisir</a>
        </div>
      </div>
    </header>

    <div class="mx-auto max-w-6xl px-5 sm:px-8">
      <p class="mb-8 max-w-3xl text-sm text-muted">En tant que Partenaire Amazon, {{ site.name }} réalise un bénéfice sur les achats remplissant les conditions requises. Cela ne change pas le prix payé.</p>
      <section v-if="picks.length" aria-labelledby="en-bref">
        <h2 id="en-bref" class="text-[clamp(1.4rem,2.6vw,1.8rem)] font-semibold tracking-[-0.025em]">En bref : notre choix selon votre cas</h2>
        <p class="mt-1.5 text-sm text-muted">Choix fondés sur les caractéristiques publiées par les fabricants, pas sur un essai.</p>
        <div class="mt-5 grid gap-4 sm:grid-cols-2" :class="picks.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'">
          <div v-for="p in picks" :key="p.slug" class="flex flex-col rounded-[var(--radius-card)] bg-surface p-5 shadow-card">
            <p class="text-xs font-semibold uppercase tracking-[0.08em]" :style="{ color: cat.color }">{{ p.label }}</p>
            <NuxtLink :to="`/${cat.slug}/${p.slug}`" class="mt-2 text-[1.05rem] font-semibold leading-snug tracking-[-0.015em] hover:text-accent-ink">{{ p.product.name }}</NuxtLink>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-muted">{{ p.why }}</p>
            <AmazonButton class="mt-4 self-start" :asin="p.product.asin" size="sm" label="Voir le prix" />
          </div>
        </div>
      </section>

      <section id="selection" class="mt-20 scroll-mt-24">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 class="text-[clamp(1.6rem,3vw,2.2rem)] font-semibold tracking-[-0.03em]">Quel {{ cat.singular }} choisir ? La sélection</h2>
            <p class="mt-2 max-w-2xl text-muted">{{ hub.selectionNote }}</p>
          </div>
        </div>
        <div v-if="products.length" class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard v-for="p in products" :key="p.slug" :product="p" />
        </div>
        <p v-else class="mt-8 rounded-2xl bg-surface p-6 text-muted shadow-card">La sélection est en cours de vérification.</p>
      </section>

      <section v-if="products.length > 1" class="mt-20">
        <h2 class="text-[clamp(1.6rem,3vw,2.2rem)] font-semibold tracking-[-0.03em]">Quelles différences entre les modèles ?</h2>
        <div class="relative -mx-5 mt-6 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <table class="w-full min-w-[44rem] border-separate border-spacing-0 overflow-hidden rounded-[var(--radius-card)] bg-surface text-left text-[0.9rem] shadow-card">
            <thead>
              <tr>
                <th scope="col" class="border-b border-line bg-ink/[0.03] px-4 py-3 font-semibold">Modèle</th>
                <th v-for="col in hub.compare" :key="col.label" scope="col" class="border-b border-line bg-ink/[0.03] px-4 py-3 font-semibold">{{ col.label }}</th>
                <th scope="col" class="border-b border-line bg-ink/[0.03] px-4 py-3 font-semibold"><span class="sr-only">Lien marchand</span></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="p in products" :key="p.slug" class="[&:last-child>*]:border-0">
                <th scope="row" class="border-b border-line px-4 py-3 font-medium">
                  <NuxtLink :to="`/${cat.slug}/${p.slug}`" class="hover:text-accent-ink">{{ p.name }}</NuxtLink>
                </th>
                <td v-for="col in hub.compare" :key="col.label" class="border-b border-line px-4 py-3 text-ink/80">{{ p.table[col.key] ?? '—' }}</td>
                <td class="border-b border-line px-4 py-2.5 text-right"><AmazonButton :asin="p.asin" size="sm" label="Voir le prix" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="mt-3 text-xs text-muted">« — » : donnée non publiée par le fabricant. Les valeurs viennent des fiches officielles citées sur chaque page produit.</p>
      </section>

      <section id="choisir" class="mt-20 grid scroll-mt-24 gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div class="min-w-0 max-w-3xl">
          <h2 class="text-[clamp(1.6rem,3vw,2.2rem)] font-semibold tracking-[-0.03em]">Comment choisir un {{ cat.singular }} ?</h2>
          <ContentBlocks class="mt-4" :blocks="hub.body" />
        </div>
        <aside v-if="guides.length" class="lg:sticky lg:top-24 lg:self-start">
          <p class="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Pour aller plus loin</p>
          <ul class="mt-3 space-y-2">
            <li v-for="g in guides" :key="g.slug">
              <NuxtLink :to="`/guides/${g.slug}`" class="press block rounded-2xl bg-surface px-4 py-3 text-[0.95rem] font-medium leading-snug shadow-card hover:shadow-lift">{{ g.title }}</NuxtLink>
            </li>
          </ul>
        </aside>
      </section>

      <section class="mt-20 max-w-3xl">
        <h2 class="text-[clamp(1.6rem,3vw,2.2rem)] font-semibold tracking-[-0.03em]">Questions fréquentes</h2>
        <FaqList class="mt-6" :items="hub.faq" />
      </section>
    </div>
  </div>
</template>
