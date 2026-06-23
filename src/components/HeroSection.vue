<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
  },
  logoSrc: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="hero-shell">
    <div class="hero-copy">
      <div class="hero-badge">
        <span class="hero-badge__dot"></span>
        Praisafest 2026 collection preview
      </div>

      <div class="space-y-5">
        <p class="section-label">Wear the sound. Carry the moment.</p>
        <h1 class="hero-title">
          A cleaner Praisafest storefront with fashion-led product focus.
        </h1>
        <p class="hero-text">
          We kept the festival energy, but the presentation now feels more elevated: sharper spacing, quiet surfaces, and controlled hits of orange, sky, pink, and violet.
        </p>
      </div>

      <div class="hero-actions">
        <a class="cta-primary" href="#shop">Shop collection</a>
        <a class="cta-secondary" href="#lookbook">See brand direction</a>
      </div>

      <div class="hero-tags">
        <span
          v-for="category in categories"
          :key="category"
          class="hero-tag"
        >
          {{ category }}
        </span>
      </div>
    </div>

    <div class="hero-card">
      <div class="hero-card__top">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.24em] text-praisePurple">
            Signature Drop
          </p>
          <h2 class="mt-3 font-display text-3xl font-bold text-praiseInk">
            Splash Logo Cap
          </h2>
        </div>
        <span class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
          Limited
        </span>
      </div>

      <div class="hero-stage">
        <div class="cap-stage">
          <div class="cap-top"></div>
          <div class="cap-brim"></div>
          <div class="splash splash-orange"></div>
          <div class="splash splash-sky"></div>
          <div class="splash splash-pink"></div>
          <img :src="logoSrc" alt="Praisafest logo" class="cap-logo" />
        </div>
      </div>

      <div class="hero-metrics">
        <div class="metric-card">
          <div>
            <span>12</span>
            <p>SKUs ready</p>
          </div>
        </div>
        <div class="metric-card">
          <div>
            <span>4</span>
            <p>Accent colors</p>
          </div>
        </div>
        <div class="metric-card">
          <div>
            <span>1</span>
            <p>Shared system</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
