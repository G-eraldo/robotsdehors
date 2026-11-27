<script setup>
defineProps({ items: { type: Array, required: true } }) // [{ q, a }]
</script>
<template>
  <div class="divide-y divide-line overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-card">
    <details v-for="item in items" :key="item.q" class="group px-5 py-4 sm:px-6 [&_summary::-webkit-details-marker]:hidden">
      <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
        <span>{{ item.q }}</span>
        <span aria-hidden="true" class="grid size-6 shrink-0 place-items-center rounded-full bg-ink/5 text-muted transition-transform duration-200 group-open:rotate-45">+</span>
      </summary>
      <p class="mt-3 text-[0.98rem] leading-relaxed text-ink/80">{{ item.a }}</p>
    </details>
  </div>
</template>
