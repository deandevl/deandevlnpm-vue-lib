<template>
  <div class="demo_container">
    <button @click="setRangeTo10">
      Change Range Value to 10
    </button>
    <button @click="setRangeTo12">
      Change Range Value to 12
    </button>
    <range-comp
      heading="Font Size"
      header-position="above"
      :range-value="rangeValue"
      :min="min"
      :max="max"
      :step="step"
      :css-variables="css_variables"
      @range-comp-value-changed="show_value"
    />
  </div>
</template>

<script>
  import {RangeComp} from '@deandevlnpm/vue-lib';
  export default {
    name: 'App',
    components: {
      RangeComp
    },
    data() {
      return {
        rangeValue: 5,
        min: 4,
        max: 16,
        step: 1,
        css_variables: {
          range_comp_heading_color: 'white',
          range_comp_input_color: 'white',
          range_comp_input_border_color: 'white',
          range_comp_value_color: 'white'
        }
      };
    },
    methods: {
      show_value: function(value){
        console.log(`slider changing to ${value}`);
      },
      setRangeTo10: function(){
        console.log(`changing to 10`);
        this.rangeValue = 10;
      },
      setRangeTo12: function(){
        console.log(`changing to 12`);
        this.rangeValue = 12;
      }
    }
  };
</script>

<style>
  .demo_container {
    padding: 20px;
    background-color: slateblue;
    width: 50rem;
    height: 38rem;
  }
  button {
    margin-bottom: 2.5rem;
  }
</style>