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

// Return total count of items in cart
const getProductsCount = (state) => {
  let count = 0;
  state.cart.products.forEach((product) => {
    count += 1 * product.quantity;
  });
  return count;
};

export {
  getAllProducts,
  getSubTotal,
  getProductsCount,
};
