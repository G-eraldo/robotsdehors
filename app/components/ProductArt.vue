<script setup>
// Rendu générique « studio » par famille d'appareil : sans marque ni logo, jamais présenté comme photo du produit.
const props = defineProps({
  kind: { type: String, required: true }, // tondeuse | piscine
  tint: { type: String, default: '#eef3ef' },
  color: { type: String, default: '#1f7a4a' }
})
const uid = `pa-${props.kind}-${useId()}`.replace(/[^a-zA-Z0-9-]/g, '')
</script>

<template>
  <svg viewBox="0 0 400 300" role="img" :aria-label="`Illustration générique : robot ${kind === 'piscine' ? 'de piscine' : 'tondeuse'}`" class="block h-full w-full">
    <defs>
      <linearGradient :id="`${uid}-bg`" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#ffffff" />
        <stop offset="1" :stop-color="tint" />
      </linearGradient>
      <linearGradient :id="`${uid}-shell`" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#f7f8f7" />
        <stop offset=".55" stop-color="#dfe3e0" />
        <stop offset="1" stop-color="#b9bfbb" />
      </linearGradient>
      <linearGradient :id="`${uid}-dark`" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#3a403d" />
        <stop offset="1" stop-color="#141816" />
      </linearGradient>
      <linearGradient :id="`${uid}-water`" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#bfe6f4" />
        <stop offset="1" stop-color="#5fb6d6" />
      </linearGradient>
      <filter :id="`${uid}-blur`" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="9" /></filter>
    </defs>
    <rect width="400" height="300" :fill="`url(#${uid}-bg)`" />

    <!-- Robot tondeuse sur pelouse -->
    <g v-if="kind === 'tondeuse'">
      <path d="M0 238 Q200 214 400 238 L400 300 L0 300 Z" :fill="color" opacity=".18" />
      <g :stroke="color" stroke-opacity=".45" stroke-width="2" stroke-linecap="round">
        <path v-for="i in 18" :key="i" :d="`M${i * 22 - 6} 262 l3 -10 M${i * 22 + 4} 270 l-2 -9`" />
      </g>
      <ellipse cx="200" cy="246" rx="118" ry="13" fill="#13201a" opacity=".2" :filter="`url(#${uid}-blur)`" />
      <circle cx="116" cy="222" r="26" :fill="`url(#${uid}-dark)`" />
      <circle cx="116" cy="222" r="10" fill="#6b716e" />
      <circle cx="284" cy="222" r="26" :fill="`url(#${uid}-dark)`" />
      <circle cx="284" cy="222" r="10" fill="#6b716e" />
      <path d="M92 214 Q96 150 170 140 L250 140 Q312 146 312 214 Z" :fill="`url(#${uid}-shell)`" stroke="#c6ccc8" />
      <path d="M150 146 Q200 132 260 148 L254 168 Q200 158 156 168 Z" :fill="color" />
      <rect x="186" y="122" width="34" height="18" rx="6" :fill="`url(#${uid}-dark)`" />
      <circle cx="210" cy="131" r="3.5" fill="#8fe0a8" />
      <path d="M100 204 L304 204" stroke="#c6ccc8" stroke-width="2" />
    </g>

    <!-- Robot de piscine au fond du bassin -->
    <g v-else>
      <rect x="0" y="40" width="400" height="260" :fill="`url(#${uid}-water)`" opacity=".55" />
      <path d="M0 52 Q50 40 100 52 T200 52 T300 52 T400 52" fill="none" stroke="#ffffff" stroke-width="3" opacity=".8" />
      <path d="M0 64 Q50 54 100 64 T200 64 T300 64 T400 64" fill="none" stroke="#ffffff" stroke-width="2" opacity=".45" />
      <g stroke="#ffffff" stroke-opacity=".35" stroke-width="2" fill="none">
        <path d="M40 120 q20 -10 40 0 t40 0" /><path d="M280 100 q20 -10 40 0 t40 0" /><path d="M210 150 q16 -8 32 0" />
      </g>
      <ellipse cx="200" cy="262" rx="112" ry="11" fill="#0a3a4d" opacity=".25" :filter="`url(#${uid}-blur)`" />
      <rect x="98" y="226" width="204" height="30" rx="15" :fill="`url(#${uid}-dark)`" />
      <g stroke="#59605c" stroke-width="3"><path v-for="i in 12" :key="i" :d="`M${110 + i * 15} 230 v22`" /></g>
      <path d="M108 226 Q112 168 170 160 L238 160 Q292 168 294 226 Z" :fill="`url(#${uid}-shell)`" stroke="#c6ccc8" />
      <path d="M140 176 Q200 160 262 176 L258 196 Q200 184 144 196 Z" :fill="color" />
      <circle cx="252" cy="208" r="5" fill="#9fe3ff" />
      <g fill="#ffffff" opacity=".85">
        <circle cx="168" cy="140" r="4" /><circle cx="176" cy="118" r="3" /><circle cx="164" cy="98" r="2.4" /><circle cx="230" cy="132" r="3" /><circle cx="236" cy="110" r="2.2" />
      </g>
    </g>
  </svg>
</template>
