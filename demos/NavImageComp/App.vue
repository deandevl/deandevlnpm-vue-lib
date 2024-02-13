<template>
  <div>
    <nav-image-comp
      heading="Favorite Pictures"
      :sources="sources"
      @nav-image-comp-current-source="show_current_source"
    />
  </div>
</template>

<script>
  import {NavImageComp} from '@deandevlnpm/vue-lib';
  export default {
    name: 'App',
    components: {
      NavImageComp
    },
    data: function() {
      return {
       sources: [
         "./images/img1.jpg",
         "./images/img2.jpg",
         "./images/img3.jpg",
         "./images/img4.jpg",
         "./images/img5.jpg"
       ]
      };
    },
    methods: {
      show_current_source: function(source){
        console.log(`Current Source: ${source}`);
      }
    }
  };
</script>