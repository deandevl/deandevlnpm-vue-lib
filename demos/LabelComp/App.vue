<template>
  <div class='demo_container'>
    <button @click="change_name">
      Set Name Content to 'Roy Stevens'; Age: 69
    </button>
    <label-comp
      heading="Your Name:"
      :value="current_name"
      :css-variables="css_variables_short"
      @label-comp-value-changed="value_changed"
    />

    <label-comp
      heading="Your Job:"
      value="Plumber"
      :css-variables="css_variables_short"
      @label-comp-value-changed="value_changed"
    />

    <label-comp
      heading="Your Address"
      value="102 Spencer Ave, Chicago, Ill. 40044 US"
      header-position="below"
      :css-variables="css_variables_long"
      @label-comp-value-changed="value_changed"
    />

    <label-comp
      heading="Your Age"
      :value="current_age"
      header-position="below"
      :css-variables="css_variables_short"
      @label-comp-value-changed="value_changed"
    />

    <label-comp
      heading="Favorite Activities"
      :value="current_activities"
      header-position="above"
      :css-variables="css_variables_short"
    />
  </div>
</template>

<script>
  import {LabelComp} from '@deandevlnpm/vue-lib';
  export default {
    name: 'App',
    components: {
      LabelComp
    },
    data: function() {
      return {
        current_name: 'Jim Jones',
        current_age: null,
        current_activities: 'basketball,football,chess,homework,volleyball, dating',
        css_variables_long: {
          label_comp_heading_color: 'white',
          label_comp_value_color: 'gold',
          label_comp_value_width: '240px'
        },
        css_variables_short: {
          label_comp_heading_color: 'white',
          label_comp_value_color: 'gold',
          label_comp_value_width: '120px'
        }
      };
    },
    methods: {
      change_name: function(){
        this.current_name = 'Roy Stevens';
        this.current_age = 69;
      },
      value_changed: function(value){
        console.log(`Value Changed: ${value}`);
      }
    }
  };
</script>

<style>
  .demo_container {
    width: 100%;
    height: 100%;
    max-width: 50rem;
    min-height: 38rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
    background-color: black;
    padding: 2rem;
  }
  button {
    width: 220px;
  }
</style>