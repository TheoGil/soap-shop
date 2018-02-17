<!-- ./src/pages/Cart.vue -->
<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <ul>
      <li v-for="product in products">{{product.title}}</li>
    </ul>
    <p>Total: {{ subTotal }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'cart',
    computed: {
      // Using speard operator in case we want to add our own custom computed properties
      ...mapGetters({
        products: 'getAllProducts',
        subTotal: 'getSubTotal',
      }),
    },
    data() {
      return {
        msg: 'Welcome to the Cart Page',
      };
    },
  };
</script>