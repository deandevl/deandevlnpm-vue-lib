<template>
  <div
    class="scrollerComp"
    @scroll="check_bottom($event)"
  >
    <slot>
      Default Content
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'InfiniteScrollerComp',
    props: {
      cssVariables: {
        type: Object,
        default: null
      }
    },
    emits: {
      'reachedBottom': null
    },
    mounted(){
      if(this.cssVariables !== null){
        for(let key of Object.keys(this.cssVariables)){
          this.$el.style.setProperty(`--${key}`, this.cssVariables[key]);
        }
      }
    },
    methods: {
      check_bottom(evt){
        const at_bottom = evt.target.scrollHeight - evt.target.scrollTop === evt.target.clientHeight;
        //debug
        //console.log(`Scroll Height: ${evt.target.scrollHeight} Scroll Top: ${evt.target.scrollTop} At Bottom: ${at_bottom}`);
        if(at_bottom){
          this.$emit('reachedBottom',at_bottom);
        }
      }
    }
  };
</script>

<style>
  :root {
    --scroller_height: 30rem;
  }
  .scrollerComp {
    height: var(--scroller_height);
    overflow-y: auto;
  }
  .scrollerComp::-webkit-scrollbar-track {
    background-color: #F5F5F5;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  .scrollerComp::-webkit-scrollbar {
    background-color: transparent;
    width: 12px;
    height: 12px;
  }
  .scrollerComp::-webkit-scrollbar-thumb {
    background-color: #D62929;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
</style>