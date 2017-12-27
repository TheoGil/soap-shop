<template>
  <transition appear name="fade">
    <div class="product-wrapper-outer">
      <div class="product-wrapper-inner">
        <div class="product">
          <router-link to="/product" class="navbar-entry">
            <div class="product-thumbnail-placeholder">
              <svg class="icon" width="200" height="200">
                  <use xlink:href="#icon-logo"></use>
                </svg>
            </div>
            <img 
              v-lazy="thumbnail"
              alt="" 
              class="product-thumbnail lazy"
            >
            <div class="product-infos">
              <div class="product-name product-data">{{ title }}</div>
              <div class="product-name product-data">{{ price }}</div>
              <div class="product-name product-data product-icons">
                <svg class="icon">
                  <use xlink:href="#icon-binoculars"></use>
                </svg>
                <svg class="icon">
                  <use xlink:href="#icon-leaf"></use>
                </svg>
                <svg class="icon">
                  <use xlink:href="#icon-bookmark"></use>
                </svg>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'ProductsThumbnail',
    props: ['title', 'price', 'thumbnail'],
  };
</script>