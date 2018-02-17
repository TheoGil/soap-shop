import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/shopping-cart';
import * as getters from './getters';
// import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
  },
  getters,
  mutations: {
    addProduct: (state, product) => {
      state.cart.products.push(product);
    },
    updateProductQuantity: (state, data) => {
      const productIndex = state.cart.products.findIndex(product => product.id === data.productId);
      state.cart.products[productIndex].quantity = data.quantity;
    },
  },
  actions: {
    // Here I'm using a setTimeout to mimick a call to the server.
    // Ultimately, we should make an ajax request to check for product availability
    // before adding it to the cart.
    addProduct: ({ commit }, product) => new Promise((resolve, reject) => {
      setTimeout(() => {
          // canAddToCart should come from the server
        const canAddToCart = Math.random() >= 0.25;
        if (canAddToCart) {
          commit('addProduct', product);
          resolve();
        } else {
          reject();
        }
      }, Math.random() * 3000);
    }),
    updateProductQuantity: ({ commit }, data) => new Promise((resolve, reject) => {
      setTimeout(() => {
          // Ask server is data.quantity X data.productId are available
          // const stockIsAvailable = Math.random() >= 0.25;
        const stockIsAvailable = true;
        if (stockIsAvailable) {
          commit('updateProductQuantity', data);
          resolve();
        } else {
          reject();
        }
      }, Math.random() * 1000);
    }),
  },
});
