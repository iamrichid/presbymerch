<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
})

const WHATSAPP_NUMBER = '233269890770'
const MIN_AMOUNT = 100
const AMOUNT_STEP = 10

const selectedProduct = ref(null)
const quantity = ref(1)
const amount = ref(MIN_AMOUNT)
const selectedSize = ref('')

const totalAmount = computed(() => quantity.value * amount.value)
const hasSizes = computed(() => Boolean(selectedProduct.value?.sizes?.length))

const openProductModal = (product) => {
  selectedProduct.value = product
  quantity.value = 1
  amount.value = product.amount ?? MIN_AMOUNT
  selectedSize.value = product.sizes?.[0] ?? ''
}

const closeProductModal = () => {
  selectedProduct.value = null
  selectedSize.value = ''
}

const changeQuantity = (delta) => {
  quantity.value = Math.max(1, quantity.value + delta)
}

const changeAmount = (delta) => {
  amount.value = Math.max(MIN_AMOUNT, amount.value + delta)
}

const sendWhatsAppOrder = () => {
  if (!selectedProduct.value) return

  const message = [
    'Hello Praisafest Team,',
    '',
    'I would like to order:',
    `Item: ${selectedProduct.value.name}`,
    `Colour: ${selectedProduct.value.color}`,
    ...(selectedSize.value ? [`Size: ${selectedSize.value}`] : []),
    `Quantity: ${quantity.value}`,
    `Amount per item: GHS ${amount.value}`,
    `Total: GHS ${totalAmount.value}`,
  ].join('\n')

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <section id="shop" class="collection-shell">
    <div class="collection-layout">
      <div class="collection-products">
        <article
          v-for="product in props.products"
          :key="product.id"
          class="collection-card"
          @click="openProductModal(product)"
        >
          <div class="collection-visual">
            <img :src="product.image" :alt="product.name" class="collection-image" />
          </div>

          <div class="collection-copy">
            <div class="collection-copy__top">
              <div class="collection-title-block">
                <p class="collection-category">{{ product.category }}</p>
                <p class="collection-name">{{ product.name }}</p>
                <p class="collection-description-text">{{ product.description }}</p>
              </div>
              <div class="collection-badge-stack">
                <span class="collection-meta">{{ product.badge }}</span>
                <p class="collection-price-inline">GHS {{ product.amount }}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div
      v-if="selectedProduct"
      class="product-modal-overlay"
      @click.self="closeProductModal"
    >
      <div class="product-modal">
        <button class="product-modal__close" type="button" @click="closeProductModal">
          Close
        </button>

        <div class="product-modal__layout">
          <div class="product-modal__media">
            <img :src="selectedProduct.image" :alt="selectedProduct.name" class="product-modal__image" />
          </div>

          <div class="product-modal__content">
            <p class="collection-category">{{ selectedProduct.category }}</p>
            <h2 class="product-modal__title">{{ selectedProduct.name }}</h2>
            <p class="product-modal__description">{{ selectedProduct.description }}</p>

            <div class="product-modal__meta">
              <span class="collection-meta">{{ selectedProduct.badge }}</span>
              <p class="product-modal__rule">Minimum is GHS {{ MIN_AMOUNT }}. Customers can increase it.</p>
            </div>

            <div class="product-modal__controls">
              <div v-if="hasSizes" class="product-stepper">
                <p class="product-stepper__label">Size</p>
                <div class="size-options">
                  <button
                    v-for="size in selectedProduct.sizes"
                    :key="size"
                    type="button"
                    class="size-option"
                    :class="{ 'size-option--active': selectedSize === size }"
                    @click="selectedSize = size"
                  >
                    {{ size }}
                  </button>
                </div>
              </div>

              <div class="product-stepper">
                <p class="product-stepper__label">Quantity</p>
                <div class="product-stepper__row">
                  <button type="button" class="stepper-button" @click="changeQuantity(-1)">-</button>
                  <span class="stepper-value">{{ quantity }}</span>
                  <button type="button" class="stepper-button" @click="changeQuantity(1)">+</button>
                </div>
              </div>

              <div class="product-stepper">
                <p class="product-stepper__label">Amount per item</p>
                <div class="product-stepper__row">
                  <button type="button" class="stepper-button" @click="changeAmount(-AMOUNT_STEP)">-</button>
                  <span class="stepper-value">GHS {{ amount }}</span>
                  <button type="button" class="stepper-button" @click="changeAmount(AMOUNT_STEP)">+</button>
                </div>
              </div>
            </div>

            <div class="product-modal__summary">
              <div v-if="selectedSize" class="summary-line">
                <span>Size</span>
                <strong>{{ selectedSize }}</strong>
              </div>
              <div class="summary-line">
                <span>Quantity</span>
                <strong>{{ quantity }}</strong>
              </div>
              <div class="summary-line">
                <span>Amount per item</span>
                <strong>GHS {{ amount }}</strong>
              </div>
              <div class="summary-line summary-line--total">
                <span>Total</span>
                <strong>GHS {{ totalAmount }}</strong>
              </div>
            </div>

            <button type="button" class="cta-primary product-modal__pay" @click="sendWhatsAppOrder">
              Pay on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
