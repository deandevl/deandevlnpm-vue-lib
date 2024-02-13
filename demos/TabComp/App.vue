<template>
  <div>
    <tab-comp
      :routes="routes"
      :css-variables="css_variables"
    >
      <div class="header">
        <div class="title">
          Fairfield Nursery
        </div>
        <div class="source">
          Web site at <a href="http://fairfieldfruits.com">Fairfield Fruits</a>
        </div>
      </div>

      <div class="built">
        <div class="source">
          Built at <a href="https://github.com/deandevl">deandevl</a>
        </div>
      </div>
    </tab-comp>
  </div>
</template>

<script>
  import {TabComp} from '@deandevlnpm/vue-lib';
  import {routes} from './routes.js';

  export default {
    name: 'App',
    components: {
      TabComp
    },
    data() {
      return {
        routes: routes,
        css_variables: {
          tab_comp_tab_hover_color: 'gold'
        }
      };
    }
  };
</script>

<style>
  .header {
    padding: 1rem;
    background: linear-gradient(to bottom, #1e5799 0%,#207cca 53%,#7db9e8 100%);
  }
  .title {
    margin-bottom: 1rem;
    font: normal normal bold 42px/1 Arial Black, Gadget, sans-serif;
    text-shadow: 4px 0 9px rgba(86,170,255,0.9) , 4px 0 9px rgba(86,170,255,0.9) ;
  }
  .source{
    font: normal normal bold 12px/1 Arial Black, Gadget, sans-serif;
    text-shadow: 4px 0 9px rgba(86,170,255,0.9) , 4px 0 9px rgba(86,170,255,0.9) ;
  }
  .built{
    margin-top: 1rem;
  }
</style>