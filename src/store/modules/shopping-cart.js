const state = {
  products: [],
};

const mutations = {
  ADD_TO_CART(state, { product, quantity }) {
    const record = state.products.find(product => product.id === product);

    if (!record) {
      state.products.push({
        id: product,
        quantity,
      });
    } else {
      record.quantity += quantity;
    }
  },

  REMOVE_FROM_CART(state, item) {
    const index = state.products.findIndex(products => products.id === item.id);
    state.products.splice(index, 1);
  },
};

export default {
  state,
  mutations,
};
