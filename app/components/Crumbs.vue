<script setup>
// items : [{ label, to? }] ; le dernier élément est la page courante.
defineProps({ items: { type: Array, required: true } })
</script>
<template>
  <nav aria-label="Fil d’Ariane" class="text-[0.82rem] text-muted">
    <ol class="flex flex-wrap items-center gap-1.5">
      <li><NuxtLink to="/" class="hover:text-ink">Accueil</NuxtLink></li>
      <li v-for="(item, i) in items" :key="i" class="flex items-center gap-1.5">
        <span aria-hidden="true" class="text-muted/50">›</span>
        <NuxtLink v-if="item.to && i < items.length - 1" :to="item.to" class="hover:text-ink">{{ item.label }}</NuxtLink>
        <span v-else aria-current="page" class="text-ink/80">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>
