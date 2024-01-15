<template>
  <div>
    <ios-menu-comp
      :routes="routes"
      :css-variables="css_variables"
    />
  </div>
</template>

<script>
  import {IosMenuComp} from '@deandevlnpm/vue-lib';
  import {routes} from './routes.js';

  export default {
    name: 'App',
    components: {
      IosMenuComp
    },
    data() {
      return {
        routes: routes,
        css_variables: {
          ios_menu_comp_trigger_color: 'blue',
          ios_menu_comp_menuitem_icon_color: 'green',
          ios_menu_comp_menuitem_font_size: '1.7rem'
        }
      };
    }
  };
</script>