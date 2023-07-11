<template lang="">
  <h2>Shopping Cart</h2>
  <ul>
    <li v-for="(product, index) in products" :key="index">
      {{ product.title }} - {{ product.price }} -
      {{ product.quantity }}
    </li>
  </ul>
  <p>Total Price: {{ cartTotal }}</p>
  <button @click="checkout">checkout</button>
  <p v-if="checkoutStatus">{{ checkoutStatus }}</p>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "ShoppingCart",
  computed: {
    ...mapState({
      checkoutStatus: (state) => state.cart.checkoutStatus,
    }),
    ...mapGetters({
      products: "cartProducts",
      cartTotal: "cartTotal",
    }),
  },
  methods: {
    ...mapActions({
      checkout: "checkout",
    }),
  },
};
</script>
