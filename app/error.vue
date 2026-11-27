<script setup>
import { site } from '#shared/data/site.js'
const props = defineProps({ error: Object })
const notFound = props.error?.statusCode === 404
useSeoMeta({ title: notFound ? `Page introuvable · ${site.name}` : `Erreur · ${site.name}`, robots: 'noindex,follow' })
</script>
<template>
  <NuxtLayout>
    <div class="mx-auto max-w-2xl px-5 py-28 text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.12em] text-accent-ink">{{ error?.statusCode }}</p>
      <h1 class="mt-3 text-4xl font-semibold tracking-[-0.035em]">{{ notFound ? 'Cette page n’existe pas.' : 'Un souci est survenu.' }}</h1>
      <p class="mt-4 text-muted">Repartez de l’accueil ou d’une rubrique.</p>
      <button class="press mt-8 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white" @click="clearError({ redirect: '/' })">Retour à l’accueil</button>
    </div>
  </NuxtLayout>
</template>
