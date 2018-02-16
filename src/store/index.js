import Vue from 'vue';
import Vuex from 'vuex';
import shoppingCart from './modules/shopping-cart';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  actions,
  getters,
  modules: {
    shoppingCart,
  },
});
