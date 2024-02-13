<template>
  <div 
    class="demo_container"
  >
    <button @click="toggle_content">
      Toggle Books
    </button>
    <section class="comp_sec">
      <collapse-comp
        heading="My Favorite Books"
        :show-content="showTheContent"
      >
        <div class="collapse_content">
          <ul>
            <li> Doctor Strangelove </li>
            <li> I Love jQuery </li>
            <li> Python for Data Analysis </li>
            <li> Applied Calculus </li>
            <li> The Flower Farmer </li>
            <li> Artificial Intelligence </li>
            <li> Introduction to Numerical Methods</li>
            <li> The Audacity of Hope</li>
            <li> The Book of Gimp </li>
          </ul>
        </div>
      </collapse-comp>
      <collapse-comp
        heading="My Favorite Colors"
        :css-variables="color_css_variables"
      >
        <div class="collapse_content">
          <ul>
            <li> Red </li>
            <li> Green </li>
            <li> Blue </li>
            <li> Orange </li>
            <li> Purple </li>
            <li> Yellow </li>
          </ul>
        </div>
      </collapse-comp>
    </section>
    <p>
      rownwnn andlle  aljnd;3e; .akdnend  qnfdslns alne. andl;; irjlsek  sljdnel
      ewlnsl lsnkei s nelnsndl  slhelnskdn lslsn; a;ke;;;0ekd  lsnlsnel sllls
      2nwlenkf lsmksnel; slasll slenen ls nellllsn 5nrlnelwn lsnl  slnwnl  rien
      wqnelnwlen tltnylnr lsnenl wqnsna slns yktnu iims wemr eeenelsn ssysnwl snn
      rlrnelwn lsnen  rlnelwn alqnfkt ndlnwln eerlnw qnerndlsnl yytl alsn lkd5lr
      endsbx alnsnr uyntlrnl lln wndjf prpt wenrnf qwns duu tnrhdhh slnfldn wekr
      rownwnn andlle  aljnd;3e; .akdnend  qnfdslns alne. andl;; irjlsek  sljdnel
      ewlnsl lsnkei s nelnsndl  slhelnskdn lslsn; a;ke;;;0ekd  lsnlsnel sllls
      2nwlenkf lsmksnel; slasll slenen ls nellllsn 5nrlnelwn lsnl  slnwnl  rien
      wqnelnwlen tltnylnr lsnenl wqnsna slns yktnu iims wemr eeenelsn ssysnwl snn
      rlrnelwn lsnen  rlnelwn alqnfkt ndlnwln eerlnw qnerndlsnl yytl alsn lkd5lr
      endsbx alnsnr uyntlrnl lln wndjf prpt wenrnf qwns duu tnrhdhh slnfldn wekr
    </p>
  </div>
</template>

<script>
  import {CollapseComp} from '@deandevlnpm/vue-lib';

  export default {
    name: 'App',
    components: {
      CollapseComp
    },
    data() {
      return {
        showTheContent: false,
        color_css_variables: {
          collapse_comp_content_position: 'absolute',
          collapse_comp_content_z_index: '100'
        }
      };
    },
    methods: {
      toggle_content: function(){
        this.showTheContent = !this.showTheContent;
      }
    }
  };
</script>

<style>
  .comp_sec {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    max-width: 70rem;
    max-height: 60rem;
    margin-top: 2rem;
  }
  .collapse_content {
    background-color: black;
    color: white;
    height: 16rem;
    width: 13rem;
    overflow: auto;
  }
  .collapse_content::-webkit-scrollbar-track {
    background-color: #F5F5F5;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }
  .collapse_content::-webkit-scrollbar {
    background-color: transparent;
    width: 12px;
    height: 12px;
  }
  .collapse_content::-webkit-scrollbar-thumb {
    background-color: #D62929;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  }
</style>