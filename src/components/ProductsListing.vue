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
        <li 
          v-for="(product, index) in products"
          class="list-item"
          v-bind:key="product.name.language._cdata"
          v-bind:data-index="index"
        >
          <soap 
          :title="product.name.language._cdata"
          :price="product.price._cdata"
          :thumbnail="product.id_default_image._attributes['xlink:href']"
          />  
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import convert from 'xml-js';
  import ProductThumbnail from '../components/ProductThumbnail';

  import thumb1 from '../assets/img/soaps/eponna.jpg';
  import thumb2 from '../assets/img/soaps/copeaux-de-savon-coco-pour-lessive.jpg';
  import thumb3 from '../assets/img/soaps/savon-artisanal-naturel-sang-pour-sang.jpg';
  import thumb4 from '../assets/img/soaps/savon-artisanal-naturel-cocktail.jpg';
  import thumb5 from '../assets/img/soaps/savon-naturel-mon-papa-avait-de-la-barbe.jpg';
  import thumb6 from '../assets/img/soaps/fine-lavande.jpg';
  import thumb7 from '../assets/img/soaps/savon-artisanal-naturel-vandal.jpg';
  import thumb8 from '../assets/img/soaps/mellitis.jpg';
  import thumb9 from '../assets/img/soaps/cybèle.jpg';
  import thumb10 from '../assets/img/soaps/mon-calendula.jpg';
  import thumb11 from '../assets/img/soaps/badiane-évasion.jpg';

  export default {
    name: 'ProductsListing',
    data() {
      return {
        show: true,
        soaps: [
          {
            name: 'Eponna',
            price: '3,50€',
            thumbnailUrl: thumb1,
          },
          {
            name: 'Copeaux de savon coco pour lessive',
            price: '3,60€',
            thumbnailUrl: thumb2,
          },
          {
            name: 'Sang pour sang',
            price: '6,00€',
            thumbnailUrl: thumb3,
          },
          {
            name: 'Cocktail',
            price: '6,00€',
            isLarge: true,
            thumbnailUrl: thumb4,
          },
          {
            name: 'Mon papa avait de la barbe',
            price: '6,00€',
            thumbnailUrl: thumb5,
          },
          {
            name: 'Fine lavande',
            price: '6,40€',
            thumbnailUrl: thumb6,
          },
          {
            name: 'Vandal',
            price: '6,50€',
            thumbnailUrl: thumb7,
          },
          {
            name: 'Mellitis',
            price: '6,50€',
            thumbnailUrl: thumb8,
          },
          {
            name: 'Cybèle',
            price: '6,50€',
            thumbnailUrl: thumb9,
          },
          {
            name: 'Mon calendula',
            price: '6,50€',
            thumbnailUrl: thumb10,
          },
          {
            name: 'Badiane évasion',
            price: '6,50€',
            thumbnailUrl: thumb11,
          },
        ],
        products: [],
      };
    },
    components: {
      soap: ProductThumbnail,
    },
    methods: {
      fetchAllProductsIds() {
        const productListingAPIEndpoint = 'https://www.mon-savonnier.fr/api/products';

        return axios({
          method: 'get',
          url: productListingAPIEndpoint,
          params: {
            ws_key: process.env.WS_KEY,
          },
          transformResponse: [function (data) {
            // Convert data to a JSON object
            const dataAsString = convert.xml2json(data);
            return JSON.parse(dataAsString);
          }, function (data) {
            const rawProducts = data.elements[0].elements[0].elements;
            const productIds = [];
            rawProducts.forEach((product) => {
              productIds.push(product.attributes.id);
            });
            return productIds;
          }],
        });
      },
      fetchAllProducts() {
        this.fetchAllProductsIds()
          .then((response) => {
            const productsIds = response.data;
            productsIds.forEach((id) => {
              this.fetchProduct(id)
                .then((response) => {
                  // console.log(response.data);
                  this.products.push(response.data);
                }).catch((error) => {
                  console.log(error);
                });
            });
          })
          .catch((error) => {
            console.log(error);
          });
      },
      fetchProduct(id) {
        const APIEndpoint = `https://www.mon-savonnier.fr/api/products/${id}`;

        return axios({
          method: 'get',
          url: APIEndpoint,
          params: {
            ws_key: process.env.WS_KEY,
          },
          transformResponse: [function (data) {
            // Convert data to a JSON object
            const dataAsString = convert.xml2json(data, { compact: true });
            return JSON.parse(dataAsString);
          }, function (data) {
            return data.prestashop.product;
          }],
        });
      },
    },
    mounted() {
      this.fetchAllProducts();
    },
  };
</script>