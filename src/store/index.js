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
});
