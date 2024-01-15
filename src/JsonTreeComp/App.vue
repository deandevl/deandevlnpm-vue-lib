<template>
  <div class="demo_container">
    <h2>Information gathered by Icon.inc</h2>
    <json-tree-comp
      title="Employee_Family_Information"
      :json-obj="json_obj"
      :css-variables="css_variables"
    >
      <div id="topdiv" />
    </json-tree-comp>
  </div>
</template>

<script>
  import {JsonTreeComp} from '@deandevlnpm/vue-lib';

  export default {
    name: 'App',
    components: {
      JsonTreeComp
    },
    data() {
      return {
        json_obj: null,
        css_variables: {
          jsontree_comp_color: 'white',
          jsontree_comp_title_color: 'white'
        }
      };
    },
    mounted: function(){
      this.json_obj = {
        'name':'Billy Bob',
        'favorite number': 3,
        'veteran': true,
        'address info':{
          'street':'123 Edward Ave',
          'city':'Richmond',
          'state':'Virginia',
          'coordinates':[{'latitude':32.4567},{'longitude':67.8965}],
          'neighbors':{'right':'Roger','left':'Jane','across':'Sydney'},
        },
        'children':[{'name':'Bob','age':10},{'name':'Tommy','age':13},{'name':'Nancy','age':15}]
      };
    }
  };
</script>

<style>
  .demo_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    color: white;
    padding: 30px;
    min-height: 800px;
  }
</style>