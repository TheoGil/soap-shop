<template>
  <div itemscope itemtype="http://schema.org/Product" class="single-product">
    <div class="tabs-wrapper">
      <div class="row column">
        <ol class="tabs-container">
          <li>
            <a href="#">
              Fun facts
            </a>
          </li>
          <li>
            <a href="#" class="is-active">
              Product
            </a>
          </li>
          <li>
            <a href="#">
              Reviews
            </a>
          </li>
          <li>
            <a href="#">
              You might like
            </a>
          </li>
        </ol>
      </div>
    </div>

    <!-- Product Header -->
    <div class="row flex">
      <div class="columns small-8">
        <h1 class="product-title" itemprop="name">Bulles d'amande douce</h1>
        <div class="notation">
          <stars :note="4"/>
          <div class="review-counter">(32)</div>
        </div>
      </div>
      <div class="columns small-4">
        <div class="product-price">
          <span itemprop="price" content="5.90">5,90</span>
          <span itemprop="priceCurrency" content="EUR">&euro;</span>
        </div>
      </div>
    </div>
    <!-- /Product Header -->

    <!-- Labels and actions  -->
    <div class="row column product-labels-actions-container">
      <div class="product-labels">
        <div class="badge">
          <svg class="icon">
            <use xlink:href="#icon-binoculars"></use>
          </svg>
        </div>
        <div class="badge">
          <svg class="icon">
            <use xlink:href="#icon-leaf"></use>
          </svg>
        </div>
        <div class="badge">
          <svg class="icon">
            <use xlink:href="#icon-bookmark"></use>
          </svg>
        </div>
      </div>
      <div class="product-actions">
        <a class="badge product-buy" href="#">
          <svg class="icon">
            <use xlink:href="#icon-cart"></use>
          </svg>
        </a>
        <a class="badge" href="#">
          <svg class="icon">
            <use xlink:href="#icon-heart"></use>
          </svg>
        </a>
        <a class="badge share" href="#">
          <svg class="icon">
            <use xlink:href="#icon-share"></use>
          </svg>
        </a>
      </div>
    </div>
    <!-- /Labels and actions -->

    <!-- Product Slideshow -->
    <div class="row column">
      <img src="../assets/img/single-soap/savon-artisanal-naturel-sang-pour-sang.jpg" alt="">
    </div>
    <!-- /Product Slideshow -->
  </div>
</template>

<script>
  import Stars from '../components/Stars';

  export default {
    name: 'Product',
    components: {
      'stars': Stars,
    },
  };
</script>