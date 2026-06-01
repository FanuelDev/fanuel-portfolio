<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24"
       :fill="filled ? 'currentColor' : 'none'"
       stroke="currentColor"
       :stroke-width="stroke"
       stroke-linecap="round"
       stroke-linejoin="round"
       aria-hidden="true">

    <!-- ── Dev skills ── -->
    <template v-if="name === 'monitor'">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
    </template>

    <template v-else-if="name === 'smartphone'">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <path d="M12 18h.01"/>
    </template>

    <template v-else-if="name === 'layers'">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </template>

    <template v-else-if="name === 'cpu'">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <path d="M15 2v2M9 2v2M2 9h2M2 15h2M22 9h-2M22 15h-2M15 22v-2M9 22v-2"/>
    </template>

    <template v-else-if="name === 'cloud'">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>
    </template>

    <template v-else-if="name === 'users'">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </template>

    <!-- ── Projects ── -->
    <template v-else-if="name === 'anchor'">
      <circle cx="12" cy="5" r="3"/>
      <line x1="12" y1="22" x2="12" y2="8"/>
      <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
    </template>

    <template v-else-if="name === 'chart'">
      <path d="M3 3v18h18"/>
      <path d="m19 9-5 5-4-4-3 3"/>
    </template>

    <template v-else-if="name === 'megaphone'">
      <path d="m3 11 18-5v12L3 13v-2z"/>
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
    </template>

    <!-- ── Spiritual ── -->
    <template v-else-if="name === 'book-open'">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </template>

    <template v-else-if="name === 'flame'">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
    </template>

    <template v-else-if="name === 'radio'">
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/>
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/>
      <circle cx="12" cy="12" r="2"/>
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/>
      <path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1"/>
    </template>

    <!-- ── Media platforms ── -->
    <template v-else-if="name === 'tiktok'">
      <!-- TikTok logo (filled) -->
      <path fill="currentColor" stroke="none"
        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5
           2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01
           a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34
           6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76
           a4.85 4.85 0 0 1-1.01-.07z"/>
    </template>

    <template v-else-if="name === 'youtube'">
      <!-- YouTube logo (filled) -->
      <path fill="currentColor" stroke="none"
        d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55
           A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0
           2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14
           C24 15.92 24 12 24 12s0-3.92-.5-5.81zM9.75 15.52V8.48L15.5 12l-5.75 3.52z"/>
    </template>

    <template v-else-if="name === 'code'">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </template>

    <!-- ── Passion ── -->
    <template v-else-if="name === 'building'">
      <rect width="16" height="20" x="4" y="2" rx="2"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M12 14h.01M8 14h.01M16 14h.01"/>
    </template>

    <template v-else-if="name === 'brush'">
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/>
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1 1 2.48 1.02 3.5 1.02 2.98 0 5.5-2.5 5.5-5.51l-.6-1.55"/>
    </template>

    <!-- ── About pillars ── -->
    <template v-else-if="name === 'terminal'">
      <polyline points="4 17 10 11 4 5"/>
      <line x1="12" y1="19" x2="20" y2="19"/>
    </template>

    <template v-else-if="name === 'trending-up'">
      <polyline points="22 7 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="16 7 22 7 22 13"/>
    </template>

    <template v-else-if="name === 'cross'">
      <line x1="12" y1="2" x2="12" y2="22"/>
      <line x1="4" y1="7" x2="20" y2="7"/>
    </template>

    <template v-else-if="name === 'pen'">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
    </template>

    <!-- ── Misc ── -->
    <template v-else-if="name === 'target'">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </template>

    <template v-else-if="name === 'map-pin'">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </template>

    <template v-else-if="name === 'arrow-up-right'">
      <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
    </template>

  </svg>
</template>

<script setup>
defineProps({
  name:   { type: String, required: true },
  size:   { type: [String, Number], default: 20 },
  stroke: { type: [String, Number], default: 1.8 },
  filled: { type: Boolean, default: false },
})
</script>
