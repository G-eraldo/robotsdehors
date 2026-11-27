<script setup>
const props = defineProps({
  title: { type: String, required: true },
  lead: { type: String, default: '' },
  path: { type: String, required: true },
  description: { type: String, required: true },
  noindex: { type: Boolean, default: false }
})
usePageSeo({ title: props.title, description: props.description, path: props.path, noindex: props.noindex, breadcrumbs: [[props.title, props.path]] })
</script>
<template>
  <div class="mx-auto max-w-3xl px-5 pt-8 sm:px-8">
    <Crumbs :items="[{ label: title }]" />
    <h1 class="mt-8 text-[clamp(2.2rem,5vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.04em]">{{ title }}</h1>
    <p v-if="lead" class="mt-4 text-lg leading-relaxed text-ink/75">{{ lead }}</p>
    <div class="prose-cd mt-10"><slot /></div>
  </div>
</template>
