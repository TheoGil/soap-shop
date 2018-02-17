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
                            :max-value="availableStock"
                            :input-name="'quantity'"
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
    props: ['title', 'price', 'quantity', 'size'],
    components: {
      quantity: Quantity,
    },
  };
</script>