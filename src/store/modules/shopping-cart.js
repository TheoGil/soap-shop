const state = {
  products: [
    {
      title: 'Some soap',
      quantity: 1,
      price: 15,
    },
    {
      title: 'Some other soap',
      quantity: 2,
      price: 8.5,
    },
  ],
  testData: 'Coucou les musclés! :)',
};

/*
const mutations = {
  ADD_TO_CART(state, { product, quantity }) {
    const record = state.products.find(product => product.id === product);

    if (!record) {
      state.products.push(product);
    } else {
      record.quantity += quantity;
    }
  },
  REMOVE_FROM_CART(state, item) {
    const index = state.products.findIndex(products => products.id === item.id);
    state.products.splice(index, 1);
  },
};
*/

export default {
  state,
  // mutations,
};
