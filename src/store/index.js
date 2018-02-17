import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/shopping-cart';
import * as getters from './getters';
// import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  /* strict: true,
  actions, */
  modules: {
    cart,
  },
  getters,
  mutations: {
    addProduct: (state, product) => {
      state.cart.products.push(product);
    },
  },
  actions: {
    addProduct: ({ commit }, product) =>
       // Here I'm using a setTimeout to mimick a call to the server.
       // Ultimately, we should make an ajax request to check for product availability
       // before adding it to the cart.
       new Promise((resolve, reject) => {
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
  },
});
