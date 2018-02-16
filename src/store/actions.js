export const addToCart = ({ commit }, { product, quantity }) => {
  commit('ADD_TO_CART', { product, quantity });
};

export const removeFromCart = ({ commit }, product) => {
  commit('REMOVE_FROM_CART', product);
};
