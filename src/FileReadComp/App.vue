<template>
  <div class="demo_container">
    <file-read-comp
      read-label="Read File Path"
      :read-file="true"
      :css-variables="css_variables"
      @file-read-comp-filename-changed="filename_changed"
      @file-read-comp-content-changed="content_changed"
    />
    <p>(See console for output)</p>
  </div>
</template>

<script>
  import {FileReadComp} from '@deandevlnpm/vue-lib';

  export default {
    name: 'App',
    components: {
      FileReadComp
    },
    data: function() {
      return {
        css_variables: {
          file_read_comp_label_color: 'white',
          file_read_comp_label_border_color: 'white',
          file_read_comp_label_hover_background: 'gold'
        }
      };
    },
    methods: {
      filename_changed: function(filename){
        console.log(`FileName: ${filename}`);
      },
      content_changed: function(content){
        console.log(`File Content: ${content}`);
      }
    }
  };
</script>

<style>
  .demo_container {
    width: 100%;
    height: 100%;
    min-height: 40rem;
    max-width: 60rem;
    color: white;
    background-color: black;
    padding: 2rem;
  }
  p {
    margin-top: 1rem;
  }
</style>