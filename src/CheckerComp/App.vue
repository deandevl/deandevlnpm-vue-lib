<template>
  <div class="demo_container">
    <section class="checkers_section">
      <checker-comp
        heading="Days of the Week"
        drop-panel-height="160px"
        :blur-panel="false"
        :items="items_dow"
        :css-variables="css_variables_days_of_week"
        @checker-comp-checked-text="dow_changed"
      />

      <checker-comp
        heading="Shopping List"
        :items="items_shop"
        :css-variables="css_variables"
        @checker-comp-checked-text="shopping_changed"
      />

      <checker-comp
        heading="Gender"
        :single-check="true"
        :items="items_gender"
        :css-variables="css_variables"
        @checker-comp-checked-text="gender_changed"
      />
    </section>
    <section class="pbox">
      <p>
        rownwnn andlle  aljnd;3e; .akdnend  qnfdslns alne. andl;; irjlsek  sljdnel
        ewlnsl lsnkei s nelnsndl  slhelnskdn lslsn; a;ke;;;0ekd  lsnlsnel sllls
        2nwlenkf lsmksnel; slasll slenen ls nellllsn 5nrlnelwn lsnl  slnwnl  rien
        wqnelnwlen tltnylnr lsnenl wqnsna slns yktnu iims wemr eeenelsn ssysnwl snn
        rlrnelwn lsnen  rlnelwn alqnfkt ndlnwln eerlnw qnerndlsnl yytl alsn lkd5lr
        endsbx alnsnr uyntlrnl lln wndjf prpt wenrnf qwns duu tnrhdhh slnfldn wekr
      </p>
    </section>
  </div>
</template>

<script>
  import {CheckerComp} from '@deandevlnpm/vue-lib';

  export default {
    name: 'App',
    components: {
      CheckerComp
    },
    data(){
      return {
        items_dow: [
          {text: 'Sunday', checked: false},
          {text: 'Monday', checked: false},
          {text: 'Tuesday', checked: false},
          {text: 'Wednesday', checked: true},
          {text: 'Thursday', checked: false},
          {text: 'Friday', checked: false},
          {text: 'Saturday', checked: false}
        ],
        items_shop: [
          {text: 'bread', checked: false},
          {text: 'milk', checked: false},
          {text: 'lettuce', checked: false},
          {text: 'ice cream', checked: false},
          {text: 'potatoes', checked: false},
          {text: 'hamburger', checked: false},
          {text: 'orange juice', checked: false}
        ],
        items_gender: [
          {text: 'Male', checked: false},
          {text: 'Female', checked: false},
          {text: 'Unknown', checked: false}
        ],

        // css modifications
        css_variables: {
          checker_comp_items_panel_background: 'lightgreen'
        },
        css_variables_days_of_week: {
          checker_comp_items_panel_position: 'absolute',
          checker_comp_items_panel_z_index: '100'
        }
      };
    },
    methods: {
      //methods that responds to 'checker_comp_checked_indices' event
      dow_changed: function(text){
        console.log(`Days of Week: ${text}`);
      },
      shopping_changed: function(text){
        console.log(`Shopping: ${text}`);
      },
      gender_changed: function(text){
        console.log(`Gender: ${text}`);
      }
    }
  };
</script>

<style>
  .demo_container {
    padding: 2rem;
  }
  .button_section {
    margin-bottom: 3rem;
  }
  .checkers_section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    max-width: 70rem;
    max-height: 60rem;
    margin-top: 2rem;
  }
  .pbox {
    margin-top: 2rem;
  }
</style>