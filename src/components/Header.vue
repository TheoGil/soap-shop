<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        
        <button class="navbar-item">
          <svg class="icon icon-angle-down">
            <use xlink:href="#icon-menu"></use>
          </svg>
        </button>

        <router-link to="/" class="navbar-item">
          Home
        </router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <button class="navbar-item">
            <svg class="icon icon-angle-down">
              <use xlink:href="#icon-search"></use>
            </svg>
          </button>

          <router-link to="/cart" class="navbar-item">
            <svg class="icon icon-angle-down">
              <use xlink:href="#icon-cart"></use>
            </svg>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'Header',
  };
</script>