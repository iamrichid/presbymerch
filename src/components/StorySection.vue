<script setup>
defineProps({
  highlights: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section id="lookbook" class="editorial-shell">
    <div class="story-panel">
      <p class="section-label">Brand Atmosphere</p>
      <h2 class="mt-4 font-display text-3xl font-bold text-praiseInk md:text-4xl">
        Let the shop feel premium first, then let the color accents do the celebration.
      </h2>
      <p class="mt-4 max-w-2xl text-base leading-7 text-slate-600">
        The collection page set the tone. This section carries that same restraint into the wider site with crisp typography, gallery-like blocks, and small but memorable color hits from the Praisafest artwork.
      </p>

      <div class="mt-8 grid gap-4 sm:grid-cols-3">
        <div class="story-stat">
          <span>Bold</span>
          <p>for merch launches</p>
        </div>
        <div class="story-stat">
          <span>Clean</span>
          <p>for easy shopping</p>
        </div>
        <div class="story-stat">
          <span>Flexible</span>
          <p>for real checkout flows</p>
        </div>
      </div>
    </div>

    <div class="story-notes">
      <p class="section-label">Template Notes</p>
      <div
        v-for="item in highlights"
        :key="item"
        class="story-note"
      >
        <p class="text-sm font-semibold leading-6 text-slate-700">
          {{ item }}
        </p>
      </div>
    </div>
  </section>
</template>
