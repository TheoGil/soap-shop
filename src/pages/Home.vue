<template>
  <div>
    <splash/>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>
  import Splash from '../components/Splash.vue';
  export default {
    name: 'home',
    components: {
      'splash': Splash,
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>