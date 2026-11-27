<script setup>
import { categoryByKey } from '#shared/data/site.js'
const props = defineProps({ product: { type: Object, required: true } })
const cat = categoryByKey(props.product.category)
</script>

<template>
  <article class="group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-card transition-shadow duration-200 hover:shadow-lift">
    <div class="aspect-[4/3]"><ProductArt :kind="product.category" :tint="cat.tint" :color="cat.color" /></div>
    <div class="flex flex-1 flex-col p-5">
      <p class="text-xs font-medium uppercase tracking-[0.08em]" :style="{ color: cat.color }">{{ product.type }}</p>
      <h3 class="mt-1.5 text-[1.15rem] font-semibold leading-snug tracking-[-0.015em]">
        <NuxtLink :to="`/${cat.slug}/${product.slug}`" class="after:absolute after:inset-0">{{ product.name }}</NuxtLink>
      </h3>
      <p class="mt-2 text-sm leading-relaxed text-muted">{{ product.bestFor }}</p>
      <dl class="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-line pt-4 text-[0.82rem]">
        <div v-for="[k, v] in product.keySpecs" :key="k">
          <dt class="text-muted">{{ k }}</dt>
          <dd class="font-medium">{{ v }}</dd>
        </div>
      </dl>
    </div>
  </article>
</template>
