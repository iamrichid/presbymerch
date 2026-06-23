<template>
  <section id="cart" class="checkout-shell">
    <div class="space-y-4">
      <p class="section-label">Checkout Block</p>
      <h2 class="font-display text-3xl font-bold text-praiseInk md:text-4xl">
        A checkout section that now belongs to the same design system.
      </h2>
      <p class="max-w-2xl text-base leading-7 text-slate-600">
        Keep this for a fast MVP or wire it into Shopify, Flutterwave, Paystack, Stripe, or custom Vue cart state without redesigning the whole page again.
      </p>
    </div>

    <div class="checkout-card">
      <div class="checkout-card__header">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Order Summary</p>
          <h3 class="mt-2 font-display text-2xl font-bold text-praiseInk">Event weekend bundle</h3>
        </div>
        <span class="rounded-full border border-praiseSky/30 bg-praiseSky/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-praiseViolet">
          Template
        </span>
      </div>

      <div class="space-y-4">
        <div class="checkout-line">
          <span>Splash Logo Cap</span>
          <strong>$24</strong>
        </div>
        <div class="checkout-line">
          <span>Festival Worship Tee</span>
          <strong>$32</strong>
        </div>
        <div class="checkout-line">
          <span>Volunteer wristband set</span>
          <strong>$12</strong>
        </div>
        <div class="checkout-line border-t border-slate-200 pt-4">
          <span>Estimated shipping</span>
          <strong>$8</strong>
        </div>
        <div class="checkout-line text-lg">
          <span>Total</span>
          <strong>$76</strong>
        </div>
      </div>

      <button class="cta-primary mt-8 w-full justify-center">
        Connect checkout
      </button>
      <p class="mt-4 text-center text-sm text-slate-500">
        Template action only. Replace with your live payment flow.
      </p>
    </div>
  </section>
</template>
