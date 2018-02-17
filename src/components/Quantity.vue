<template>
  <div class="quantity-input-container" :class="{disabled: isDisabled}">
    <button 
      class="button"
      type="button"
      v-on:click="decrement"
    >
      -
    </button>
    <input 
      type="number" 
      v-model="value" 
      v-bind:max="maxValue"
      min="1"
      :id="inputName"
      readonly
    >
    <button 
      class="button"
      type="button"
      v-on:click="increment"
    >
      +
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Quantity',
    props: {
      value: {},
      maxValue: {},
      inputName: {},
      isDisabled: {
        default: false,
      },
    },
    methods: {
      increment() {
        if ((this.value < this.maxValue) && !this.isDisabled) {
          this.$emit('setQuantity', this.value + 1);
        }
      },
      decrement() {
        if ((this.value > 1) && !this.isDisabled) {
          this.$emit('setQuantity', this.value - 1);
        }
      },
    },
  };
</script>