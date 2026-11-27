<script setup>
import { amazonUrl } from '~/composables/usePageSeo.js'
const props = defineProps({
  asin: { type: String, required: true },
  label: { type: String, default: 'Voir le prix sur Amazon' },
  size: { type: String, default: 'md' } // md | lg
})
const config = useRuntimeConfig()
const href = amazonUrl(props.asin, config.public.amazonTag)
const isDev = import.meta.dev
</script>

<template>
  <a
    v-if="href" :href="href" target="_blank" rel="sponsored nofollow noopener"
    class="press inline-flex items-center justify-center gap-2 rounded-full bg-ink font-medium text-white shadow-card hover:bg-ink/85"
    :class="size === 'lg' ? 'px-6 py-3.5 text-[1rem]' : 'px-4 py-2.5 text-sm'"
  >
    {{ label }}
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3h8v8M13 3 3 13" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round" /></svg>
  </a>
  <span v-else-if="isDev" class="inline-flex rounded-full border border-dashed border-muted/50 px-4 py-2 text-xs text-muted">Lien Amazon : définir NUXT_PUBLIC_AMAZON_TAG</span>
</template>
