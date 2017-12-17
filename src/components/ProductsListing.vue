<template>
  <div class="product-listing" id="product-listing">
    <div class="tabs-wrapper">
      <div class="row column">
        <ol class="tabs-container product-categories">
          <li>
            <a href="#">
              Category 1
            </a>
          </li>
          <li>
            <a href="#" class="is-active">
              Category 2
            </a>
          </li>
          <li>
            <a href="#">
              Category 3
            </a>
          </li>
        </ol>
      </div>
    </div>
    <div class="row column">
      <ul class="item-listing">
        <li v-for="soap in soaps" class="list-item" v-bind:class="{'is-large' : soap.isLarge}">
          <div class="product-wrapper-outer">
            <div class="product-wrapper-inner">
              <div class="product">
                <a href="#">
                  <div class="product-thumbnail-placeholder">
                    <svg class="icon" width="200" height="200">
                        <use xlink:href="#icon-logo"></use>
                      </svg>
                  </div>
                  <img 
                    v-lazy="soap.thumbnailUrl"
                    alt="" 
                    class="product-thumbnail lazy"
                  >
                  <div class="product-infos">
                    <div class="product-name product-data">{{ soap.name }}</div>
                    <div class="product-name product-data">{{ soap.price }}</div>
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
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductsListing',
    data() {
      return {
        soaps: [
          {
            name: 'Bulle d\'amandes douce',
            price: '5,90€',
            thumbnailUrl: 'https://source.unsplash.com/315x390/?soap',
          },
          {
            name: 'Bulle d\'amandes douce coffret édition limitée',
            price: '5,90€',
            thumbnailUrl: 'https://source.unsplash.com/315x390/?soap',
          },
          {
            name: 'Bulle d\'amandes douce',
            price: '5,90€',
            thumbnailUrl: 'https://source.unsplash.com/315x390/?soap',
          },
          {
            name: 'Bulle d\'amandes douce',
            price: '5,90€',
            isLarge: true,
            thumbnailUrl: 'https://source.unsplash.com/315x390/?soap',
          },
          {
            name: 'Bulle d\'amandes douce',
            price: '5,90€',
            thumbnailUrl: 'https://source.unsplash.com/315x390/?soap',
          },
          {
            name: 'Bulle d\'amandes douce',
            price: '5,90€',
            thumbnailUrl: 'https://source.unsplash.com/315x390/?soap',
          },
          {
            name: 'Bulle d\'amandes douce',
            price: '5,90€',
            thumbnailUrl: 'https://source.unsplash.com/315x390/?soap',
          },
          {
            name: 'Bulle d\'amandes douce',
            price: '5,90€',
            thumbnailUrl: 'https://source.unsplash.com/315x390/?soap',
          },
          {
            name: 'Bulle d\'amandes douce',
            price: '5,90€',
            thumbnailUrl: 'https://source.unsplash.com/315x390/?soap',
          },
          {
            name: 'Bulle d\'amandes douce',
            price: '5,90€',
            thumbnailUrl: 'https://source.unsplash.com/315x390/?soap',
          },
          {
            name: 'Bulle d\'amandes douce',
            price: '5,90€',
            thumbnailUrl: 'https://source.unsplash.com/315x390/?soap',
          },
        ],
      };
    },
  };
</script>