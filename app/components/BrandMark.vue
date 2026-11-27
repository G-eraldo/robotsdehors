<script setup>
defineProps({ size: { type: Number, default: 28 } })
</script>
<template>
  <svg :width="size" :height="size" viewBox="0 0 32 32" aria-hidden="true">
    <defs>
      <linearGradient id="rd-mark" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#3a9a5b" />
        <stop offset=".5" stop-color="#1f6f45" />
        <stop offset="1" stop-color="#0b7fab" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="16" fill="url(#rd-mark)" />
    <path d="M7 21h18" stroke="#fff" stroke-width="2.4" stroke-linecap="round" />
    <path d="M10 21v-4l3-4M16 21v-6M22 21v-4l-3-4" stroke="#fff" stroke-opacity=".75" stroke-width="2.2" stroke-linecap="round" fill="none" />
  </svg>
</template>
