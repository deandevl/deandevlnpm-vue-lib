<template>
  <div 
    class="selectEditComp" 
    tabindex="0" 
    @blur="blur_it"
  >
    <div 
      v-if="heading" 
      class="selectEditComp_headingBox"
    >
      {{ heading }}
    </div>
    <section :class="select_box_class">
      <div 
        :class="is_open ? 'selectEditComp_arrowIcon__open' : 'selectEditComp_arrowIcon__closed'" 
        @click="arrow_click"
      />
      <input
        class="selectEditComp_inputBox"
        :size="inputSize"
        :placeholder="placeholder"
        :value="current_value"
        @change="value_changed($event)"
      />
      <div 
        v-if="showTrash"
        class="selectEditComp_trashIcon" 
        @click="trash_item"
      />
    </section>
    <section 
      v-show="items_clone"
      class="selectEditComp_itemsSec"
    >
      <div 
        class="selectEditComp_itemsPanel" 
        :style="panel_style"
      >
        <div 
          v-for="(item,idx) in items_clone"
          :key="idx"
          class="selectEditComp_itemBox" 
          @click="item_click(item)"
        >
          {{ item }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'SelectEditComp',
    props: {
      items: {
        type: Array,
        default: null
      },
      selectValue: {
        type: String,
        default: null
      },
      inputSize: {
        type: String,
        default: '20'
      },
      heading: {
        type: String,
        default: null
      },
      placeholder: {
        type: String,
        default: 'Select a value'
      },
      showTrash: {
        type: Boolean,
        default: true
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
      selectEditCompValueChanged: null,
      selectEditCompItemsChanged: null
    },
    data(){
      return {
        current_value: this.selectValue,
        is_open: false,
        panel_style: 'max-width: 0; max-height: 0; transition: all 3s; opacity: 0;',
        select_box_class: 'selectEditComp_selectBoxSec'
      };
    },
    computed: {
      items_clone: function(){
        const items_copy = JSON.parse(JSON.stringify(this.items));
        this.$emit('selectEditCompItemsChanged',items_copy);
        return items_copy;
      }
    },
    watch: {
      selectValue: function(){
        if(this.current_value !== this.selectValue){
          if(this.selectValue === null && this.placeholder !== null){
            this.current_value = null;
            this.$emit('selectEditCompValueChanged', null);
          }else{
            const idx = this.items_clone.indexOf(this.selectValue);
            if(idx !== -1){
              this.current_value = this.selectValue;
              this.$emit('selectEditCompValueChanged', this.current_value);
            }
          }
        }
      }
    },
    mounted(){
      if(this.singleBorder){
        this.select_box_class = 'selectEditComp_selectBoxSecBottomBorder';
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
      value_changed: function(e){
        if(e.currentTarget.value !== null){
          this.items_clone.push(e.currentTarget.value);
        }
        this.current_value = e.currentTarget.value;
        this.$emit('selectEditCompValueChanged', e.currentTarget.value);
        this.$emit('selectEditCompItemsChanged', this.items_clone);
      },
      trash_item: function(){
        if(this.current_value !== null){
          const idx = this.items_clone.indexOf(this.current_value);
          if(idx !== -1){
            this.items_clone.splice(idx, 1);
            this.current_value = null;
            this.$emit('selectEditCompValueChanged', null);
            this.$emit('selectEditCompItemsChanged', this.items_clone);
          }
        }
      },
      arrow_click: function(){
        this.toggle_panel_state();
      },
      item_click: function(item){
        this.current_value = item;
        this.$emit('selectEditCompValueChanged', item);
        this.toggle_panel_state();
      },
      toggle_panel_state: function(){
        if(this.is_open){
          this.is_open = false;
          this.panel_style = 'max-width: 0; max-height: 0; transition: all 3s; opacity: 0;';
        }else {
          this.is_open = true;
          this.panel_style = 'max-width: 100%; max-height:' + this.dropPanelHeight + '; transition: all 3s; opacity: 1.0;';
        }
      }
    }
  };
</script>

<style lang="less">
  :root {
    --select_edit_font_family: Verdana,serif;

    --select_edit_arrow_icon: '\21D3';
    --select_edit_arrow_color: black;

    --select_edit_font_size: 1rem;
    --select_edit_color: darkgray;
    --select_edit_background: transparent;
    --select_edit_border_color: black;

    --select_edit_heading_font_size: 1rem;
    --select_edit_heading_color: black;
    --select_edit_heading_font_weight: bold;

    --select_edit_placeholder_color: black;

    --select_edit_trash_icon: '\2716';
    --select_edit_trash_color: red;

    --select_edit_items_panel_color: black;
    --select_edit_items_panel_width: 8rem;
    --select_edit_items_panel_background: white;
    --select_edit_items_panel_border: 1px solid black;
    --select_edit_items_panel_position: static;
    --select_edit_items_panel_z_index: auto;

    --select_edit_item_font_size: .75rem;
    --select_edit_item_hover_box_shadow: 0 0 10px gray;
    --select_edit_item_hover_color: violet;
  }

  .selectEditComp {
    font-family: var(--select_edit_font_family);
    &:focus {
      outline: none;
    }

    &_headingBox {
      text-align: center;
      color: var(--select_edit_heading_color);
      font-size: var(--select_edit_heading_font_size);
      font-weight: var(--select_edit_heading_font_weight);
    }

    &_selectBoxSec {
      display: flex;
      flex-direction: row;
      background: var(--select_edit_background);
      border: 1px solid var(--select_edit_border_color);
    }

    &_selectBoxSecBottomBorder {
      display: flex;
      flex-direction: row;
      background: var(--select_edit_background);
      border: none;
      border-bottom: 1px solid var(--select_edit_border_color);
    }

    &_inputBox {
      background: transparent;
      padding: .2rem;
      border: none;
      color: var(--select_edit_color);
      font-size: var(--select_edit_font_size);

      &::-webkit-input-placeholder{
        color: var(--select_edit_placeholder_color);
      }
    }

    &_arrowIcon__open::before {
      content: var(--select_edit_arrow_icon);
      display: inline-block;
      color: var(--select_edit_arrow_color);
      transition: 600ms linear all;
      margin-right: .2rem;
      font-size: 1rem;
      cursor: pointer;
    }
    &_arrowIcon__closed::before {
      content: var(--select_edit_arrow_icon);
      display: inline-block;
      color: var(--select_edit_arrow_color);
      transform: rotate(-90deg);
      transition: 600ms linear all;
      margin-right: .2rem;
      font-size: 1rem;
      cursor: pointer;
    }
    &_trashIcon::before {
      content: var(--select_edit_trash_icon);
      color: var(--select_edit_trash_color);
      display: inline-block;
      margin-left: .6rem;
      cursor: pointer;
    }
    &_itemsSec {
      position: relative;
    }
    &_itemsPanel {
      color: var(--select_edit_items_panel_color);
      width: var(--select_edit_items_panel_width);
      background: var(--select_edit_items_panel_background);
      border: var(--select_edit_items_panel_border);
      z-index: var(--select_edit_items_panel_z_index);
      position: var(--select_edit_items_panel_position);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      padding: .5rem;
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
      font-size: var(--select_edit_item_font_size);

      &:hover {
        color: var(--select_edit_item_hover_color);
        box-shadow: var(--select_edit_item_hover_box_shadow);
      }
    }
  }
</style>