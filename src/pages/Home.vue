<template>
  <div>
    <splash/>
    <div class="row">
      <div class="small-2 columns">2 <span class="hide-for-small-only">columns</span></div>
      <div class="small-10 columns">10 columns</div>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit, tortor non tincidunt fermentum, augue mauris ullamcorper arcu, quis dapibus felis magna eget nisi. Sed ac tempor turpis. Suspendisse potenti. Vestibulum suscipit interdum velit, ut rhoncus ex blandit vehicula. Duis dictum tortor nec lectus fringilla lobortis. In nec velit et libero suscipit finibus. Vivamus at varius purus, sit amet sollicitudin ante. Phasellus elementum tellus nec rhoncus consequat.
    </p>
    <p>
      Sed purus lacus, dictum quis aliquet non, dapibus eu nulla. Fusce ac ullamcorper erat. Pellentesque vitae ligula id urna pulvinar venenatis. Nullam varius efficitur tortor nec aliquam. Praesent ac dictum orci, ut consequat velit. In hac habitasse platea dictumst. Vivamus finibus tristique tortor ac condimentum. Sed lacinia elit in nisl tempus pellentesque. Suspendisse rhoncus, ligula eget pellentesque dignissim, erat felis dapibus lectus, vel sagittis turpis lectus id diam. Morbi nec lobortis felis. In quis leo diam. Phasellus in velit et elit varius varius. Etiam at neque sit amet sem accumsan dignissim eget eget nunc.
    </p>
    <p>
      Suspendisse feugiat dolor sed luctus bibendum. Mauris suscipit elementum auctor. Sed bibendum ac elit ut auctor. Nullam ac nulla sed erat consequat aliquet. Nunc felis urna, luctus ut posuere et, cursus et lectus. Proin velit nibh, bibendum sit amet sem vel, malesuada euismod ipsum. Ut auctor pulvinar euismod. In sit amet facilisis tellus, eget vestibulum dui. Praesent convallis ex elit. Morbi nec consectetur ante. Maecenas sagittis bibendum faucibus. Donec pulvinar nisi a ultricies dignissim. Proin eu lobortis tellus, vel pharetra ipsum. Ut pellentesque quis eros ut fermentum.
    </p>
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