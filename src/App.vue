<template>
  <div id="app" class="container">
    <svg-sprites/>
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import SvgSprites from './components/SvgSprites.vue';
import Header from './components/Header.vue';
export default {
  name: 'app',
  components: {
    'svg-sprites': SvgSprites,
    'navbar': Header,
  }
};
</script>

<style lang="scss">
@import "~bulma";
</style>
