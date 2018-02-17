<template>
    <div class="cart-product-item">
        <div class="row">
            <div class="columns small-4 large-2">
                <div class="thumbnail-outer">
                    <img
                            class="thumbnail lazy"
                            v-lazy="'/static/img/eponna.c42561e.jpg'"
                            :alt="title"
                    >
                </div>
            </div>
            <div class="columns small-8 large-10">
                <div class="header">
                    <div class="product-info title">{{ title }}</div>
                    <div class="product-info secondary">Description courte ou sous-titre à définir</div>
                    <div class="product-info secondary size">{{ size }}</div>
                </div>
                <div class="form-control">
                    <quantity
                        :value="quantity"
                        :input-name="`${id}-quantity`"
                        :maxValue="stockAvailable"
                        :isDisabled="isDisabled"
                        v-on:setQuantity="setQuantity"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Quantity from './Quantity';

  export default {
    name: 'CartItem',
    data() {
      return {
        isDisabled: false,
      };
    },
    props: ['id', 'title', 'price', 'quantity', 'size', 'stockAvailable'],
    methods: {
      setQuantity(newQuantity) {
        const data = {
          productId: this.id,
          quantity: newQuantity,
        };

        // If we ADD more product, we check it's availability from server
        if (newQuantity > this.quantity) {
          this.isDisabled = true;
          this.$store.dispatch('updateProductQuantity', data).then(() => {
            this.isDisabled = false;
          }, () => {
            alert('Oups... Les stocks ne sont pas suffisant pour en commander autant...');
            this.isDisabled = false;
          });
        } else {
          // If decrement quantity, no questions aksed
          this.$store.commit('updateProductQuantity', data);
        }
      },
    },
    components: {
      quantity: Quantity,
    },
  };
</script>