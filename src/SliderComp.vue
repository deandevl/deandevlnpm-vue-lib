<template>
  <div>
    <div
      v-if="images !== null"
      class="sliderComp"
    >
      <section class="sliderComp_controlSec">
        <a
          class="sliderComp_a"
          @click="anchor_clicked(-1)"
        >Previous</a>
        <span>||</span>
        <a
          class="sliderComp_a"
          @click="anchor_clicked(1)"
        >Next</a>
        <span>||</span>
        <a
          class="sliderComp_a"
          @click="start_rotation"
        >Start Rotation</a>
        <span>||</span>
        <a
          class="sliderComp_a"
          @click="stop_rotation"
        >Stop Rotation</a>
      </section>

      <transition-group name="sliderComp_slide">
        <div
          v-for="(image,idx) in images"
          :key="idx"
        >
          <img
            v-if="idx === current_number"
            class="sliderComp_img"
            :src="get_src()"
            alt=""
          >
        </div>
      </transition-group>
      <section class="sliderComp_captionSec">
        {{ get_caption }}
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SliderComp',
    props: {
      images: {
        type: Array,
        default: null
      },
      delay: {
        type: Number,
        default: 4000
      },
      startNumber: {
        type: Number,
        default: null
      },
      cssVariables: {
        type: Object,
        default: () => {
          return null;
        }
      }
    },
    data(){
      return {
        started: false,
        current_number: 0,
        timer: null
      };
    },
    computed: {
      get_caption: function(){
        return this.images[this.current_number].caption;
      }
    },
    mounted(){
      if(this.cssVariables !== null){
        for(let key of Object.keys(this.cssVariables)){
          this.$el.style.setProperty(`--${key}`, this.cssVariables[key]);
        }
      }
    },
    methods: {
      get_src: function(){
        if(this.startNumber !== null && !this.started){
          if(this.startNumber > 0 && this.startNumber <= this.images.length){
            this.current_number = this.startNumber-1;
          }
          this.started = true;
        }
        return this.images[this.current_number].src;
      },
      start_rotation: function(){
        this.timer = setInterval(this.next,this.delay);
      },
      stop_rotation: function(){
        clearTimeout(this.timer);
        this.timer = null;
      },
      next: function(){
        const val = this.current_number+=1;
        this.current_number = val % this.images.length;
      },
      prev: function(){
        const val = Math.abs(this.current_number -= 1);
        this.current_number = val % this.images.length;
      },
      anchor_clicked: function(inc) {
        this.stop_rotation();
        const val = Math.abs(this.current_number+=inc);
        this.current_number = val % this.images.length;
      }
    }
  };
</script>
<style lang="less">
  :root {
    --slider_comp_font_family: Verdana,serif;
    --slider_comp_width: 50rem;
    --slider_comp_height: 44rem;

    --slider_comp_caption_font_size: 1rem;
    --slider_comp_caption_color: white;
    --slider_comp_caption_background_color: black;
  }

  .sliderComp {
    display: flex;
    flex-direction: column;
    font-family: var(--slider_comp_font_family);

    &_controlSec {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-self: start;
      max-width: 28rem;
    }

    &_a {
      cursor: pointer;
      text-decoration: none;
    }

    &_img {
      width: var(--slider_comp_width);
      height: var(--slider_comp_height);
    }

    &_captionSec {
      font-size: var(--slider_comp_caption_font_size);
      color: var(--slider_comp_caption_color);
      background-color: var(--slider_comp_caption_background_color);
      align-self: flex-start;
      text-align: center;
      width: var(--slider_comp_width);
      height: 1.5rem;
    }

    &_slide-enter-active, &_slide-leave-active {
      position: absolute;
      transition: all 1.5s ease;
    }
    &_slide-enter {
      transform: translateX(100%);
      opacity: 0;
    }
    &_slide-enter-to {
      opacity: 1;
    }
    &_slide-leave {
      opacity: 1;
    }
    &_slide-leave-to {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
</style>