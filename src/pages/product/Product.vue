<template>
  <div itemscope itemtype="http://schema.org/Product">
    <!-- Product Header -->
    <div class="row flex">
      <div class="columns small-8">
        <h1 class="product-title" itemprop="name">{{ title }}</h1>
        <div 
          class="notation" 
          v-bind:class="{'no-reviews-yet' : reviewCount == 0}"
          v-if="reviewCount > 0"
        >
          <stars :note="note"/>
          <div class="review-counter">({{ reviewCount }})</div>
        </div>
      </div>
      <div class="columns small-4">
        <div class="product-price">
          <span itemprop="price" :content="price">{{ price }}</span>
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
        <heart/>
        <a class="badge share" href="#">
          <svg class="icon">
            <use xlink:href="#icon-share"></use>
          </svg>
        </a>
      </div>
    </div>
    <!-- /Labels and actions -->

    <!-- Product Slideshow -->
    <div class="row column slideshow-container">
      <img src="../../assets/img/single-soap/savon-artisanal-naturel-sang-pour-sang.jpg" alt="">
    </div>
    <!-- /Product Slideshow -->

    <!-- Product sizes -->
    <div class="sizes flex">
      <button 
        class="flex"
        v-on:click="selectedSize = 'small'"
        v-bind:class="{'is-active' : selectedSize == 'small'}"
      >
        <svg class="icon small">
          <use xlink:href="#icon-soap"></use>
        </svg>
        Small
      </button>
      <button 
        class="flex"
        v-on:click="selectedSize = 'medium'"
        v-bind:class="{'is-active' : selectedSize == 'medium'}"
      >
        <svg class="icon medium">
          <use xlink:href="#icon-soap"></use>
        </svg>
        Medium
      </button>
      <button 
        class="flex"
        v-on:click="selectedSize = 'large'"
        v-bind:class="{'is-active' : selectedSize == 'large'}"
      >
        <svg class="icon large">
          <use xlink:href="#icon-soap"></use>
        </svg>
        Large
      </button>
    </div>
    <!-- /Product sizes -->

    <div class="row column">
      <section class="section">
        <h2>Description</h2>
        <div data-itemprop="description">
          <p>Sans parfum - 100g</p>
          <p>Enveloppez votre peau dans un cocon de douceur avec bulles d'amande douce!</p>
          <p>Idéal pour les peaux délicates, ce savon est formulé à partir d'huile végétale d'amande douce et ne contient aucune huile essentielle.</p>
          <p>Surgras à 9%, bulles d'amande douce propose des ingrédients aux propriétés calmantes, adoucissantes et assouplissantes, notamment l'huile végétale d'amandon de pruneaux, riche en vitamine E.</p>
          <p>Tous les ingrédients sont naturels et issus de l'agriculture biologique. À choisir pour les épidermes&nbsp;fragiles et sensibles, comme celui des plus jeunes.</p>
        </div>
      </section>
    </div>

    <div class="row column">
      <section class="section">
        <h2>Caractéristiques</h2>
        <table>
          <tr>
            <td>Artisan</td>
            <td>Badiane</td>
          </tr>
          <tr>
            <td>Poids</td>
            <td>100 g</td>
          </tr>
          <tr>
            <td>Surgraissage</td>
            <td>9%</td>
          </tr>
          <tr>
            <td>Vegan</td>
            <td>Oui</td>
          </tr>
          <tr>
            <td>INCI</td>
            <td>Prunus Domestica Seed oil</td>
          </tr>
          <tr>
            <td>Huiles essentielles</td>
            <td>Non</td>
          </tr>
        </table>
      </section>
    </div>
  </div>
</template>

<script>
  import Stars from '../../components/Stars';
  import Heart from '../../components/Heart';

  export default {
    name: 'Product',
    data() {
      return {
        title: 'Bulles d\'amande douce',
        price: '5.90',
        note: 4,
        reviewCount: 32,
        selectedSize: 'medium',
      };
    },
    components: {
      stars: Stars,
      heart: Heart,
    },
  };
</script>