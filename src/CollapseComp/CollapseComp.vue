<template>
  <div 
    class="collapseComp"
    tabindex="0" 
    @blur="blur_it"
  >
    <section class="collapseComp_headerSec">
      <div
        v-show="showContent == null"
        :class="is_open ? 'collapseComp_arrowIcon__open' : 'collapseComp_arrowIcon__closed'"
        @click="icon_click"
      />
      <span v-show="heading">{{ heading }}</span>
    </section>
    <section
      ref="slot"
      class="collapseComp_contentSec"
      :style="content_style"
    >
      <slot />
    </section>
  </div>
</template>

<script>
  export default {
    name: 'CollapseComp',
    props: {
      heading: {
        type: String,
        default: null
      },
      showContent: {
        type: Boolean,
        default: null
      },
      blurPanel: {
        type: Boolean,
        default: true
      },
      cssVariables: {
        type: Object,
        default: null
      }
    },
    data(){
      return {
        show_it: false,
        drop_panel_height: null,
        drop_panel_width: null,
        content_style: 'width: 0; height: 0; transition: all 3s; opacity: 0;'
      };
    },
    computed: {
      is_open: function(){
        this.toggle_content_state();
        return this.show_it;
      }
    },
    mounted(){
      if(this.cssVariables !== null){
        for(let key of Object.keys(this.cssVariables)){
          this.$el.style.setProperty(`--${key}`, this.cssVariables[key]);
        }
      }
      this.drop_panel_height = `${this.$refs.slot.childNodes[0].nextSibling.clientHeight}px`;
      this.drop_panel_width = `${this.$refs.slot.childNodes[0].nextSibling.clientWidth}px`;
    },
    methods: {
      blur_it: function(){
        if(this.show_it && this.blurPanel){
          this.show_it = false;
          this.content_style = 'width: 0;height: 0;transition: all 3s; opacity: 0;';
        }
      },
      icon_click: function(){
        this.show_it = !this.show_it;
      },
      toggle_content_state: function(){
        if(this.show_it || this.showContent){
          this.content_style = 'width: ' + this.drop_panel_width + ';height: ' + this.drop_panel_height + ';transition: all 3s; opacity: 1.0;';
        }else if(!this.showContent){
          this.content_style = 'width: 0;height: 0;transition: all 3s; opacity: 0;';
        }else {
          this.content_style = 'width: 0;height: 0;transition: all 3s; opacity: 0;';
        }
      }
    }
  };
</script>

<style lang="less">
  :root {
    --collapse_comp_font_family: Verdana,serif;

    --collapse_comp_heading_color: black;
    --collapse_comp_heading_font_size: 1rem;
    --collapse_comp_heading_font_weight: bold;

    --collapse_comp_down_icon: '\21D3';
    --collapse_comp_icon_color: black;

    --collapse_comp_content_position: static;
    --collapse_comp_content_z_index: auto;
  }
  .collapseComp {
    font-family: var(--collapse_comp_font_family);
    &:focus {
      outline: none;
    }

    &_headerSec {
      display: flex;
      flex-direction: row;
      color: var(--collapse_comp_heading_color);
      font-size: var(--collapse_comp_heading_font_size);
      font-weight: var(--collapse_comp_heading_font_weight);
      margin-bottom: .5rem;
    }

    &_arrowIcon__open::before {
      content: var(--collapse_comp_down_icon);
      display: inline-block;
      color: var(--collapse_comp_icon_color);
      transition: 600ms linear all;
      margin-right: .2rem;
      font-size: 1rem;
      cursor: pointer;
    }

    &_arrowIcon__closed::before {
      content: var(--collapse_comp_down_icon);
      display: inline-block;
      color: var(--collapse_comp_icon_color);
      transform: rotate(-90deg);
      transition: 600ms linear all;
      margin-right: .2rem;
      font-size: 1rem;
      cursor: pointer;
    }

    &_contentSec {
      position: var(--collapse_comp_content_position);
      transition: all 2s ease-in-out;
      z-index: var(--collapse_comp_content_z_index);
    }
  }
</style>
