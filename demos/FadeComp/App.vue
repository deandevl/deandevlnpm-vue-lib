<template>
  <div id="demo_container">
    <section id="button_box">
      <button @click="fade_out_height">
        Fade Out Height
      </button>
      <button @click="fade_in_height">
        Fade In Height
      </button>
      <button @click="fade_out_left">
        Fade Out Left
      </button>
      <button @click="fade_in_left">
        Fade In Left
      </button>
    </section>
    <fade-comp
      :direction="direction"
      :out="out">
      <div id="mess">
        Happy Birthday
      </div>
    </fade-comp>
  </div>
</template>

<script>
  import {FadeComp} from '@deandevlnpm/vue-lib';

  export default {
    name: 'App',
    components: {
      FadeComp
    },
    data() {
      return {
        direction: null,
        out: null
      };
    },
    methods: {
      //parent to child methods -- setting properties
      fade_out_height: function(){
        this.direction = 'vertical';
        this.out = true;
      },
      fade_in_height: function(){
        this.direction = 'vertical';
        this.out = false;
      },
      fade_out_left: function(){
        this.direction = 'horizontal';
        this.out = true;
      },
      fade_in_left: function(){
        this.direction = 'horizontal';
        this.out = false;
      }
    }
  };
</script>

<style>
  #demo_container {
    display: flex;
    flex-direction: column;
    background-color: black;
    width: 100%;
    height: 100%;
    min-height: 40rem;
    max-width: 60rem;
  }
  #button_box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem;
  }

  #mess {
    font-family: Verdana,sans-serif;
    font-size: 2rem;
    width: 40%;
    color: red;
    background: orange;
    padding: .4rem;
    margin-left: 2rem;
  }
</style>