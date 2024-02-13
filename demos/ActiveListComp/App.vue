<template>
  <div class="demo_container">
    <section class="components_box">
      <active-list-comp
        title="My Favorite Fruits"
        placeholder="Enter a fruit"
        :input-size="24"
        :css-variables="cssVariablesFruits"
        @active-list-comp-items="show_fruit_items"
      />

      <active-list-comp
        title="My Hobbies"
        placeholder="Enter a hobby"
        :input-size="40"
        :css-variables="cssVariablesHobbies"
        @active-list-comp-items="show_hobby_items"
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
  import {ActiveListComp} from '@deandevlnpm/vue-lib';

  export default {
    name: 'App',
    components: {
      ActiveListComp
    },
    data() {
      return {
        cssVariablesFruits: {
          active_list_items_panel_background: 'lightgreen',
          active_list_panel_position: 'absolute',
          active_list_panel_z_index: '100'
        },
        cssVariablesHobbies: {
          active_list_items_panel_background: 'lightblue'
        }
      };
    },
    methods: {
      //functions that respond to 'active_list_comp_items' events
      show_fruit_items: function(items) {
        console.log(`Fruit Items: ${items}`);
      },
      show_hobby_items: function(items){
        console.log(`Hobby Items: ${items}`);
      }
    }
  };
</script>

<style>
  .demo_container {
    display: flex;
    flex-direction: column;
    padding: 50px;
  }
  .components_box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 800px;
    margin-top: 60px;
  }
  .pbox {
    margin-top: 40px;
  }
</style>