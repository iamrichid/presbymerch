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
const selectedColor = ref('')
const mediaMode = ref('image')
const galleryIndex = ref(0)

const totalAmount = computed(() => quantity.value * amount.value)
const hasSizes = computed(() => Boolean(selectedProduct.value?.sizes?.length))
const hasColors = computed(() => Boolean(selectedProduct.value?.colors?.length))
const hasVideo = computed(() => Boolean(selectedProduct.value?.video))
const hasGallery = computed(() => Boolean(selectedProduct.value?.gallery?.length))
const showGallery = computed(() => hasVideo.value || hasGallery.value)

const activeImage = computed(() => {
  if (!selectedProduct.value) return ''
  if (hasGallery.value) {
    return selectedProduct.value.gallery[galleryIndex.value] ?? selectedProduct.value.image
  }
  return selectedProduct.value.image
})

const mediaFitClass = computed(() => {
  const fit = selectedProduct.value?.mediaFit ?? 'cover'
  return fit === 'contain' ? 'product-modal__media-fit--contain' : 'product-modal__media-fit--cover'
})

const mediaStyle = computed(() => {
  const position = selectedProduct.value?.mediaPosition
  return position ? { objectPosition: position } : undefined
})

const openProductModal = (product) => {
  selectedProduct.value = product
  quantity.value = 1
  amount.value = product.amount ?? MIN_AMOUNT
  selectedSize.value = product.sizes?.[0] ?? ''
  selectedColor.value = product.colors?.[0] ?? ''
  mediaMode.value = product.video ? 'video' : 'image'
  galleryIndex.value = 0
}

const closeProductModal = () => {
  selectedProduct.value = null
  selectedSize.value = ''
  selectedColor.value = ''
  mediaMode.value = 'image'
  galleryIndex.value = 0
}

const selectVideo = () => {
  mediaMode.value = 'video'
}

const selectGalleryImage = (index) => {
  mediaMode.value = 'image'
  galleryIndex.value = index
}

const changeQuantity = (delta) => {
  quantity.value = Math.max(1, quantity.value + delta)
}

const changeAmount = (delta) => {
  amount.value = Math.max(MIN_AMOUNT, amount.value + delta)
}

const sendWhatsAppOrder = () => {
  if (!selectedProduct.value) return

  const colour = selectedColor.value || selectedProduct.value.color

  const message = [
    'Hello Praisafest Team,',
    '',
    'I would like to order:',
    `Item: ${selectedProduct.value.name}`,
    ...(colour ? [`Colour: ${colour}`] : []),
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
          <div
            class="collection-visual"
            :class="{ 'collection-visual--has-video': product.video }"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="collection-image"
              :style="product.mediaPosition ? { objectPosition: product.mediaPosition } : undefined"
            />
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
            <div class="product-modal__stage" :class="mediaFitClass">
              <video
                v-if="hasVideo && mediaMode === 'video'"
                :key="selectedProduct.video"
                class="product-modal__video"
                :poster="selectedProduct.image"
                autoplay
                muted
                loop
                playsinline
              >
                <source :src="selectedProduct.video" type="video/mp4" />
              </video>
              <img
                v-else
                :key="activeImage"
                :src="activeImage"
                :alt="selectedProduct.name"
                class="product-modal__image"
                :style="mediaStyle"
              />
            </div>

            <div v-if="showGallery" class="product-modal__gallery">
              <button
                v-if="hasVideo"
                type="button"
                class="product-modal__thumb"
                :class="{ 'product-modal__thumb--active': mediaMode === 'video' }"
                @click="selectVideo"
              >
                <img :src="selectedProduct.image" alt="Product video" class="product-modal__thumb-image" />
                <span class="product-modal__thumb-play" aria-hidden="true">▶</span>
              </button>
              <button
                v-for="(image, index) in selectedProduct.gallery"
                :key="`${selectedProduct.id}-gallery-${index}`"
                type="button"
                class="product-modal__thumb"
                :class="{ 'product-modal__thumb--active': mediaMode === 'image' && galleryIndex === index }"
                @click="selectGalleryImage(index)"
              >
                <img :src="image" :alt="`${selectedProduct.name} view ${index + 1}`" class="product-modal__thumb-image" />
              </button>
            </div>
          </div>

          <div class="product-modal__content">
            <p class="collection-category">{{ selectedProduct.category }}</p>
            <h2 class="product-modal__title">{{ selectedProduct.name }}</h2>
            <p class="product-modal__description">{{ selectedProduct.description }}</p>
            <p class="product-modal__description">
              Pay more to support Praisafest by purchasing a product and May God bless you.
            </p>

            <div class="product-modal__meta">
              <span class="collection-meta">{{ selectedProduct.badge }}</span>
              <p class="product-modal__rule">Price is 100 cedis.</p>
            </div>

            <div class="product-modal__controls">
              <div v-if="hasColors" class="product-stepper">
                <p class="product-stepper__label">Colour</p>
                <div class="size-options">
                  <button
                    v-for="color in selectedProduct.colors"
                    :key="color"
                    type="button"
                    class="size-option"
                    :class="{ 'size-option--active': selectedColor === color }"
                    @click="selectedColor = color"
                  >
                    {{ color }}
                  </button>
                </div>
              </div>

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
              <div v-if="selectedColor" class="summary-line">
                <span>Colour</span>
                <strong>{{ selectedColor }}</strong>
              </div>
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
