// Return every products in cart
const getAllProducts = state => state.cart.products;

// Return total price of cart
const getSubTotal = (state) => {
  let subTotal = 0;
  state.cart.products.forEach((product) => {
    subTotal += product.quantity * product.price;
  });
  return subTotal;
};

export { getAllProducts, getSubTotal };
