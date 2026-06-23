<script setup>
import ProductGrid from './components/ProductGrid.vue'
import logoSrc from './assets/praisafest-logo.png'
import { products } from './data/products'
</script>

<template>
  <div class="site-shell min-h-screen font-body text-slate-900">
    <div class="site-frame">
      <header class="site-header">
        <img :src="logoSrc" alt="Praisafest logo" class="site-logo" />
      </header>

      <main class="space-y-0">
        <ProductGrid :products="products" />
      </main>

      <footer class="site-footer">
        <p>&copy; Praisafest 2026. All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>
