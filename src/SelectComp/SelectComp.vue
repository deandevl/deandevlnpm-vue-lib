<template>
  <div>
    <div 
      class="selectComp" 
      tabindex="0" 
      @blur="blur_it"
    >
      <div 
        v-if="heading" 
        class="selectComp_headingBox"
      >
        {{ heading }}
      </div>
      <section :class="select_box_class">
        <div 
          :class="is_open ? 'selectComp_arrowIcon__open' : 'selectComp_arrowIcon__closed'" 
          @click="arrow_click"
        />
        <div class="selectComp_selectBox">
          {{ current_value }}
        </div>
      </section>
      <section 
        v-show="items" 
        class="selectComp_itemsSec"
      >
        <div 
          class="selectComp_itemsPanel" 
          :style="panel_style"
        >
          <div
            v-for="(item,idx) in items"
            :key="idx"
            class="selectComp_itemBox"
            @click="item_click(item)"
          >
            {{ item }}
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SelectComp',
    props: {
      items: {
        type: Array,
        default: null
      },
      selectValue: {
        type: String,
        default: null
      },
      heading: {
        type: String,
        default: null
      },
      placeholder: {
        type: String,
        default: () => {
          return null;
        }
      },
      dropPanelHeight: {
        type: String,
        default: '6.5rem'
      },
      blurPanel: {
        type: Boolean,
        default: true
      },
      singleBorder: {
        type: Boolean,
        default: false
      },
      cssVariables: {
        type: Object,
        default: () => {
          return null;
        }
      }
    },
    emits: {
      'selectCompValueChanged': null
    },
    data(){
      return {
        current_value: null,
        is_open: false,
        panel_style: 'max-width: 0;max-height: 0; transition: all 3s; opacity: 0;',
        select_box_class: 'selectComp_selectBoxSec'
      };
    },
    watch: {
      selectValue: function(){
        if(this.current_value !== this.selectValue){
          if(this.selectValue === null && this.placeholder !== null){
            this.current_value = this.placeholder;
            this.$emit('selectCompValueChanged',null);
          }else if(this.items !== null){
            const idx = this.items.indexOf(this.selectValue);
            if(idx !== -1){
              this.current_value = this.selectValue;
              this.$emit('selectCompValueChanged',this.current_value);
            }
          }
        }
      }
    },
    mounted(){
      if(this.selectValue === null && this.placeholder !== null){
        this.current_value = this.placeholder;
      }else{
        if(this.items !== null){
          const idx = this.items.indexOf(this.selectValue);
          if(idx !== -1){
            this.current_value = this.selectValue;
          }
        }
      }

      if(this.singleBorder){
        this.select_box_class = 'selectComp_selectBoxSecBottomBorder';
      }

      if(this.cssVariables !== null){
        for(let key of Object.keys(this.cssVariables)){
          this.$el.style.setProperty(`--${key}`, this.cssVariables[key]);
        }
      }
    },
    methods: {
      blur_it: function(){
        if(this.is_open && this.blurPanel){
          this.is_open = false;
          this.panel_style = 'max-width: 0;max-height: 0;transition: all 3s; opacity: 0;';
        }
      },
      arrow_click: function(){
        this.toggle_panel_state();
      },
      item_click: function(item){
        this.current_value = item;
        this.$emit('selectCompValueChanged',item);
        this.toggle_panel_state();
      },
      toggle_panel_state: function(){
        if(this.is_open){
          this.is_open = false;
          this.panel_style = 'max-width: 0;max-height: 0;transition: all 3s; opacity: 0;';
        }else {
          this.is_open = true;
          this.panel_style = 'max-width: 100%;max-height: ' + this.dropPanelHeight + '; transition: all 3s; opacity: 1.0;';
        }
      }
    }
  };
</script>

<style lang="less">
  :root {
    --select_comp_font_family: Verdana,serif;

    --select_comp_arrow_icon: '\21D3';
    --select_comp_arrow_color: black;

    --select_comp_width: 10rem;
    --select_comp_font_size: 1rem;
    --select_comp_color: darkgray;
    --select_comp_background: transparent;
    --select_comp_border_color: black;

    --select_comp_heading_font_size: 1rem;
    --select_comp_heading_color: black;
    --select_comp_heading_font_weight: bold;

    --select_comp_items_panel_color: black;
    --select_comp_items_panel_width: 8rem;
    --select_comp_items_panel_background: white;
    --select_comp_items_panel_border: 1px solid black;
    --select_comp_items_panel_position: static;
    --select_comp_items_panel_z_index: auto;

    --select_comp_item_font_size: .75rem;
    --select_comp_item_hover_box_shadow: 0 0 10px gray;
    --select_comp_item_hover_color: violet;
  }

  .selectComp {
    width: var(--select_comp_width);
    font-family: var(--select_comp_font_family);
    &:focus {
      outline: none;
    }

    &_headingBox {
      text-align: center;
      color: var(--select_comp_heading_color);
      font-size: var(--select_comp_heading_font_size);
      font-weight: var(--select_comp_heading_font_weight);
    }

    &_selectBoxSec {
      display: flex;
      flex-direction: row;
      color: var(--select_comp_color);
      background: var(--select_comp_background);
      font-size: var(--select_comp_font_size);
      border: 1px solid var(--select_comp_border_color);
    }

    &_selectBoxSecBottomBorder {
      display: flex;
      flex-direction: row;
      color: var(--select_comp_color);
      background: var(--select_comp_background);
      font-size: var(--select_comp_font_size);
      border: none;
      border-bottom: 1px solid var(--select_comp_border_color);
    }

    &_selectBox {
      padding: .2rem;
    }

    &_arrowIcon__open::before {
      content: var(--select_comp_arrow_icon);
      display: inline-block;
      color: var(--select_comp_arrow_color);
      transition: 600ms linear all;
      margin-right: .2rem;
      font-size: 1rem;
      cursor: pointer;
    }

    &_arrowIcon__closed::before {
      content: var(--select_comp_arrow_icon);
      display: inline-block;
      color: var(--select_comp_arrow_color);
      transform: rotate(-90deg);
      transition: 600ms linear all;
      margin-right: .2rem;
      font-size: 1rem;
      cursor: pointer;
    }

    &_itemsSec {
      position: relative;
    }

    &_itemsPanel {
      color: var(--select_comp_items_panel_color);
      background: var(--select_comp_items_panel_background);
      border: var(--select_comp_items_panel_border);
      position: var(--select_comp_items_panel_position);
      z-index: var(--select_comp_items_panel_z_index);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      padding: .5rem;
      width: var(--select_comp_items_panel_width);
      transition: all 2s ease-in-out;
      overflow: auto;

      &::-webkit-scrollbar-track {
        background-color: #F5F5F5;
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }
      &::-webkit-scrollbar {
        background-color: transparent;
        width: 12px;
        height: 12px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #D62929;
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
      }
    }

    &_itemBox {
      cursor: pointer;
      margin: .3rem;
      font-size: var(--select_comp_item_font_size);

      &:hover {
        color: var(--select_comp_item_hover_color);
        box-shadow: var(--select_comp_item_hover_box_shadow);
      }
    }
  }
</style>