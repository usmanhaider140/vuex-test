import shop from "@/api/shop";

export default {
  state: { items: [] },
  getters: {
    // computed properties
    availableProducts(state) {
      return state.items.filter((product) => product.inventory > 0);
    },

    productsInStock() {
      return (product) => {
        return product.inventory > 0;
      };
    },
  },
  actions: {
    // = methods
    fetchProducts(context) {
      //  make the call
      // run setProducts mutation
      return new Promise((resolve) => {
        shop.getProducts((products) => {
          context.commit("setProducts", products);
          resolve();
        });
      });
    },
  },
  mutations: {
    setProducts(state, payload) {
      // update the products
      // mutations should be to update a single piece of state
      state.items = payload;
    },

    decrementProductInventory(state, product) {
      product.inventory--;
    },
  },
};
