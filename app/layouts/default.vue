<script setup>
import { site, categories, legalLinks } from '#shared/data/site.js'

const config = useRuntimeConfig()
const live = config.public.siteLive === true || config.public.siteLive === 'true'
const route = useRoute()
const isActive = slug => route.path === `/${slug}` || route.path.startsWith(`/${slug}/`)
const year = new Date().getFullYear()
</script>

<template>
  <div class="min-h-dvh flex flex-col">
    <a href="#contenu" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">Aller au contenu</a>

    <div v-if="!live" class="bg-ink text-center text-[0.72rem] tracking-wide text-white/75 py-1.5 px-4">
      Version de recette — non indexée par les moteurs de recherche
    </div>

    <header class="glass sticky top-0 z-40 bg-canvas/75 backdrop-blur-xl backdrop-saturate-150 shadow-[0_1px_0_rgb(29_29_31/0.06)]">
      <div class="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5 sm:px-8">
        <NuxtLink to="/" class="flex items-center gap-2.5 text-[1.2rem] font-semibold tracking-[-0.03em]" :aria-label="`${site.name}, accueil`">
          <BrandMark :size="30" />
          <span>{{ site.name }}</span>
        </NuxtLink>
        <nav class="ml-auto hidden items-center gap-1 md:flex" aria-label="Rubriques">
          <NuxtLink
            v-for="c in categories" :key="c.slug" :to="`/${c.slug}`"
            class="press rounded-full px-3.5 py-1.5 text-[0.92rem] hover:bg-ink/5 hover:text-ink"
            :class="isActive(c.slug) ? 'bg-ink/[0.06] text-ink font-medium' : 'text-ink/75'"
          >{{ c.label }}</NuxtLink>
          <NuxtLink to="/guides" class="press rounded-full px-3.5 py-1.5 text-[0.92rem] hover:bg-ink/5 hover:text-ink" :class="isActive('guides') ? 'bg-ink/[0.06] text-ink font-medium' : 'text-ink/75'">Guides</NuxtLink>
        </nav>
      </div>
      <nav class="flex gap-2 overflow-x-auto px-5 pb-3 md:hidden [scrollbar-width:none]" aria-label="Rubriques (mobile)">
        <NuxtLink
          v-for="c in categories" :key="c.slug" :to="`/${c.slug}`"
          class="press shrink-0 rounded-full border px-3.5 py-1.5 text-sm"
          :class="isActive(c.slug) ? 'border-ink bg-ink text-white' : 'border-line bg-surface'"
        >{{ c.short }}</NuxtLink>
        <NuxtLink to="/guides" class="press shrink-0 rounded-full border px-3.5 py-1.5 text-sm" :class="isActive('guides') ? 'border-ink bg-ink text-white' : 'border-line bg-surface'">Guides</NuxtLink>
      </nav>
    </header>

    <main id="contenu" class="flex-1">
      <slot />
    </main>

    <footer class="mt-24 border-t border-line bg-surface/60">
      <div class="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <NuxtLink to="/" class="flex items-center gap-2 font-semibold tracking-[-0.02em]"><BrandMark :size="24" />{{ site.name }}</NuxtLink>
          <p class="mt-3 max-w-sm text-sm leading-relaxed text-muted">{{ site.description }}</p>
          <p class="mt-4 max-w-sm text-xs leading-relaxed text-muted">
            En tant que Partenaire Amazon, {{ site.name }} réalise un bénéfice sur les achats remplissant les conditions requises.
            Cela ne change pas le prix payé. <NuxtLink to="/affiliation" class="underline underline-offset-2">En savoir plus</NuxtLink>.
          </p>
        </div>
        <nav aria-label="Rubriques du pied de page">
          <p class="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Choisir</p>
          <ul class="mt-3 space-y-2 text-sm">
            <li v-for="c in categories" :key="c.slug"><NuxtLink :to="`/${c.slug}`" class="hover:text-accent-ink">{{ c.label }}</NuxtLink></li>
            <li><NuxtLink to="/guides" class="hover:text-accent-ink">Tous les guides</NuxtLink></li>
          </ul>
        </nav>
        <nav aria-label="Informations">
          <p class="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Le site</p>
          <ul class="mt-3 space-y-2 text-sm">
            <li v-for="l in legalLinks" :key="l.to"><NuxtLink :to="l.to" class="hover:text-accent-ink">{{ l.label }}</NuxtLink></li>
          </ul>
        </nav>
      </div>
      <p class="mx-auto max-w-6xl px-5 pb-10 text-xs text-muted sm:px-8">© {{ year }} {{ site.name }}. Aucun prix n’est affiché : il change souvent, il est vérifié sur la page du marchand.</p>
    </footer>
  </div>
</template>
