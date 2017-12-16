<template>
  <header class="header">
    <div class="container">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-start">
          
          <button class="transparent navbar-entry" v-on:click="toggleOffCanvas">
            <svg class="icon icon-angle-down">
              <use xlink:href="#icon-menu"></use>
            </svg>
          </button>

          <router-link to="/" class="navbar-entry">
            Home
          </router-link>
        </div>
        <div class="navbar-end">
          <button class="navbar-entry transparent">
            <svg class="icon icon-angle-down">
              <use xlink:href="#icon-search"></use>
            </svg>
          </button>

          <router-link to="/cart" class="navbar-entry">
            <svg class="icon icon-angle-down">
              <use xlink:href="#icon-cart"></use>
            </svg>
          </router-link>
        </div>
      </nav> 
    </div>
    <off-canvas :offCanvasIsActive="offCanvasIsActive" v-on:toggleOffCanvas="toggleOffCanvas"/>
  </header>
</template>

<script>
  import OffCanvas from '../components/OffCanvas';

  export default {
    name: 'Header',
    data() {
      return {
        offCanvasIsActive: false,
      };
    },
    methods: {
      toggleOffCanvas() {
        this.offCanvasIsActive = !this.offCanvasIsActive;
      },
    },
    components: {
      'off-canvas': OffCanvas,
    },
  };
</script>