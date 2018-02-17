<!-- ./src/pages/Cart.vue -->
<template>
  <div>
    <p>Le panier contient {{ count }} articles</p>
    <ul class="cart-product-listing">
      <li v-for="product in products">
        <product
          :title="product.title"
          :price="product.price"
          :quantity="product.quantity"
          :size="product.size"
        />
      </li>
    </ul>
    <div class="cart-review-container">
      <div class="row column">
        <div class="cart-review">
          <div class="cart-review-line">
            <div class="cart-review-key">Item Total</div>
            <div class="cart-review-value">15.50</div>
          </div>
          <div class="cart-review-line">
            <div class="cart-review-key">Estimated Shipping</div>
            <div class="cart-review-value">7.00</div>
          </div>
          <div class="cart-review-line bold">
            <div class="cart-review-key">Order Total</div>
            <div class="cart-review-value">{{ subTotal }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import CartItem from '../components/CartItem';

  export default {
    name: 'cart',
    computed: {
      // Using speard operator in case we want to add our own custom computed properties
      ...mapGetters({
        products: 'getAllProducts',
        subTotal: 'getSubTotal',
        count: 'getProductsCount',
      }),
    },
    components: {
      product: CartItem,
    },
  };
</script>