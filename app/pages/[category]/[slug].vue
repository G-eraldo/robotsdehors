<script setup>
import { site, categoryBySlug } from '#shared/data/site.js'
import { productBySlug, productsByCategory } from '#shared/data/products.js'
import { guideBySlug } from '#shared/data/guides.js'
import { amazonUrl } from '~/composables/usePageSeo.js'

const route = useRoute()
const cat = categoryBySlug(route.params.category)
const product = productBySlug(route.params.slug)
if (!cat || product?.category !== cat.key) throw createError({ statusCode: 404, statusMessage: 'Fiche introuvable', fatal: true })

const alternatives = productsByCategory(cat.key).filter(p => p.slug !== product.slug).slice(0, 3)
const guide = guideBySlug(product.guide || cat.pillarGuide)
const checked = new Date(product.checkedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
const path = `/${cat.slug}/${product.slug}`
// La source Amazon passe aussi par le lien partenaire (et donc rel=sponsored).
const isAmazonSource = product.sourceUrl.startsWith('https://www.amazon.fr/')
const sourceHref = isAmazonSource ? (amazonUrl(product.asin, useRuntimeConfig().public.amazonTag) || product.sourceUrl) : product.sourceUrl
usePageSeo({
  title: product.name.length > 34 ? product.name : `${product.name} : avis et fiche`,
  description: `${product.name} (${product.type}) : ${product.bestFor}`.slice(0, 158),
  path,
  breadcrumbs: [[cat.label, `/${cat.slug}`], [product.name, path]]
})
</script>

<template>
  <div v-if="product" class="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
    <Crumbs :items="[{ label: cat.label, to: `/${cat.slug}` }, { label: product.name }]" />

    <section class="mt-6 grid items-center gap-8 md:grid-cols-[1.05fr_1fr] md:gap-12">
      <figure class="overflow-hidden rounded-[2rem] bg-surface shadow-card">
        <div class="aspect-[4/3]"><ProductArt :kind="product.category" :tint="cat.tint" :color="cat.color" /></div>
        <figcaption class="px-5 pb-4 text-xs text-muted">Illustration générique, pas une photo du modèle.</figcaption>
      </figure>
      <div>
        <p class="text-sm font-medium uppercase tracking-[0.08em]" :style="{ color: cat.color }">{{ product.brand }} · {{ product.type }}</p>
        <h1 class="mt-2 text-[clamp(2rem,4.4vw,3.1rem)] font-semibold leading-[1.05] tracking-[-0.035em]">{{ product.name }}</h1>
        <p class="mt-4 text-lg leading-relaxed text-ink/80">{{ product.bestFor }}</p>
        <dl class="mt-6 grid grid-cols-2 gap-3">
          <div v-for="[k, v] in product.keySpecs" :key="k" class="rounded-2xl bg-surface px-4 py-3 shadow-card">
            <dt class="text-xs text-muted">{{ k }}</dt>
            <dd class="mt-0.5 font-semibold tracking-[-0.01em]">{{ v }}</dd>
          </div>
        </dl>
        <div class="mt-7 flex flex-wrap items-center gap-4">
          <AmazonButton :asin="product.asin" size="lg" />
          <p class="text-xs leading-snug text-muted">Lien partenaire Amazon.<br>Prix et disponibilité sur la page du marchand.</p>
        </div>
      </div>
    </section>

    <div class="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <article class="min-w-0">
        <h2 class="text-[1.6rem] font-semibold tracking-[-0.02em]">Notre lecture</h2>
        <ContentBlocks class="mt-4" :blocks="product.verdict" />

        <div class="mt-10 grid gap-4 sm:grid-cols-2">
          <div class="rounded-[var(--radius-card)] bg-surface p-6 shadow-card">
            <h2 class="font-semibold">Points forts</h2>
            <ul class="mt-3 space-y-2.5 text-[0.95rem]">
              <li v-for="s in product.strengths" :key="s" class="flex gap-2.5"><span class="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-leaf" />{{ s }}</li>
            </ul>
          </div>
          <div class="rounded-[var(--radius-card)] bg-surface p-6 shadow-card">
            <h2 class="font-semibold">Limites</h2>
            <ul class="mt-3 space-y-2.5 text-[0.95rem]">
              <li v-for="s in product.limits" :key="s" class="flex gap-2.5"><span class="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-accent" />{{ s }}</li>
            </ul>
          </div>
        </div>

        <h2 class="mt-14 text-[1.6rem] font-semibold tracking-[-0.02em]">Caractéristiques</h2>
        <dl class="mt-4 divide-y divide-line overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-card">
          <div v-for="[k, v] in product.specs" :key="k" class="grid grid-cols-[minmax(0,11rem)_1fr] gap-4 px-5 py-3 text-[0.95rem]">
            <dt class="text-muted">{{ k }}</dt><dd class="font-medium">{{ v }}</dd>
          </div>
        </dl>
        <p class="mt-3 text-xs text-muted">
          Source : <a :href="sourceHref" target="_blank" :rel="isAmazonSource ? 'sponsored nofollow noopener' : 'noopener'" class="underline underline-offset-2">{{ product.sourceLabel }}</a>, vérifiée le {{ checked }}.
          Fiche documentaire : {{ site.name }} n’a pas testé cet appareil.
        </p>
      </article>

      <aside class="space-y-4 lg:sticky lg:top-24 lg:self-start">
        <div class="rounded-[var(--radius-card)] p-6" :style="{ background: cat.tint }">
          <p class="text-sm font-semibold">Pas sûr que ce soit le bon ?</p>
          <p class="mt-1.5 text-sm leading-relaxed text-ink/75">Le guide explique les critères qui comptent vraiment pour ce choix.</p>
          <NuxtLink v-if="guide" :to="`/guides/${guide.slug}`" class="press mt-4 inline-flex rounded-full bg-surface px-4 py-2 text-sm font-medium shadow-card">{{ guide.short }}</NuxtLink>
        </div>
        <div class="rounded-[var(--radius-card)] bg-surface p-6 shadow-card">
          <p class="text-sm font-semibold">{{ product.name }}</p>
          <p class="mt-1 text-xs text-muted">{{ product.model }}</p>
          <AmazonButton class="mt-4 w-full" :asin="product.asin" />
        </div>
      </aside>
    </div>

    <section v-if="alternatives.length" class="mt-20">
      <h2 class="text-[1.6rem] font-semibold tracking-[-0.02em]">Autres {{ cat.label.toLowerCase() }}</h2>
      <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard v-for="p in alternatives" :key="p.slug" :product="p" />
      </div>
    </section>
  </div>
</template>
