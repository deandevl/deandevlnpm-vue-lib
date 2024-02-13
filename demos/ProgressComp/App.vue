<template>
  <div class="demo_container">
    <button @click="start_download">
      Start Download
    </button>
    <progress-comp
      heading="Download Progress"
      :percent="percent"
      layout="top"
      :css-variables="css_variables"
    />
  </div>
</template>

<script>
  import {ProgressComp} from '@deandevlnpm/vue-lib';

  export default {
    name: 'App',
    components: {
      ProgressComp
    },
    data() {
      return {
        percent: 0,
        css_variables: {
          progress_comp_heading_color: 'white',
          progress_comp_track_border: '1px solid white'
        }
      };
    },
    methods: {
      start_download: function() {
        let width = 0;
        setInterval(() =>{
          width = width >= 100 ? 0 : width+5;
          this.percent = width;
        },300);
      }
    }
  };
</script>

<style>
  .demo_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    width: 100%;
    height: 100%;
    max-width: 50rem;
    min-height: 38rem;
    padding: 2rem;
  }
  button {
    margin-bottom: 2rem;
  }
</style>