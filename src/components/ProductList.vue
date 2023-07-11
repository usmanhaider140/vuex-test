<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "ProductList",
  data() {
    return {
      loading: false,
    };
  },

  computed: {
    ...mapState({
      products: (state) => state.products.items,
    }),
    ...mapGetters({
      productsInStock: "productsInStock",
    }),
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchProducts").then(() => {
      this.loading = false;
    });
  },
  methods: {
    ...mapActions({
      addProductToCart: "addProductToCart",
    }),
  },
};
</script>
<!-- Vue JSX -->
<template>
  <div>
    <h1>Product List</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="loading" />
    <u v-else>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price }} - {{ product.inventory }}
        <button
          :disabled="!productsInStock(product)"
          @click="addProductToCart(product)">
          Add to Cart
        </button>
      </li>
    </u>
  </div>
</template>
