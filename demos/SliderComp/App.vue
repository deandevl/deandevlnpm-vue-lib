<template>
  <div class="demo_container">
    <slider-comp
      :images="images"
      :start-number="start_number"
      :delay="delay"
      :css-variables="css_variables"
    />
  </div>
</template>

<script>
  import {SliderComp} from '@deandevlnpm/vue-lib';
  export default {
    name: 'App',
    components: {
      SliderComp
    },
    data: function() {
      return {
        delay: 6000,
        start_number: 3,
        css_variables: {
          slider_comp_width: '60rem',
          slider_comp_height: '50rem',
          slider_comp_caption_color: 'green'
        },
        images: null
      };
    },
    mounted: function(){
      this.images = [
        {
          thumb: 'https://i.imgur.com/dWvlLXY.jpg',
          src: 'https://i.imgur.com/dWvlLXY.jpg',
          caption: 'bath tub'
        },
        {
          thumb: 'https://i.imgur.com/BJbhL8N.jpg',
          src: 'https://i.imgur.com/BJbhL8N.jpg',
          caption: 'north korea'
        },
        {
          thumb: 'https://i.imgur.com/nPKPrBm.jpg',
          src: 'https://i.imgur.com/nPKPrBm.jpg',
          caption: 'burger'
        },
        {
          thumb: 'https://i.imgur.com/NdpQRFw.png',
          src: 'https://i.imgur.com/NdpQRFw.png',
          caption: '6 foot squirrel'
        },
        {
          thumb: 'https://i.imgur.com/TydjtJv.jpg',
          src: 'https://i.imgur.com/TydjtJv.jpg',
          caption: 'KFC'
        },
        {
          thumb: 'https://i.imgur.com/Yo5B2bu.jpg',
          src: 'https://i.imgur.com/Yo5B2bu.jpg',
          caption: 'bed stand'
        },
        {
          thumb: 'https://i.imgur.com/mMi01Hl.jpg',
          src: 'https://i.imgur.com/mMi01Hl.jpg',
          caption: 'Ireland'
        },
        {
          thumb: 'https://i.imgur.com/NeB8Mwg.jpg',
          src: 'https://i.imgur.com/NeB8Mwg.jpg',
          caption: 'male underwear'
        },
        {
          thumb: 'https://i.imgur.com/HWruym3.jpg',
          src: 'https://i.imgur.com/HWruym3.jpg',
          caption: 'moon behind tree'
        },
        {
          thumb: 'https://i.imgur.com/b8OesSR.jpg',
          src: 'https://i.imgur.com/b8OesSR.jpg',
          caption: 'Aspen, CO on New Years'
        },
        {
          thumb: 'https://i.imgur.com/nBtKjSO.jpg',
          src: 'https://i.imgur.com/nBtKjSO.jpg',
          caption: 'big violin'
        },
        {
          thumb: 'https://i.imgur.com/zbcq6bW.jpg',
          src: 'https://i.imgur.com/zbcq6bW.jpg',
          caption: 'last photo of Titanic'
        }
      ];
    }
  };
</script>