<template>
  <div
    v-if="itemsClone !== null"
    class="checkerComp"
    tabindex="0"
    @blur="blur_it"
  >
    <section class="checkerComp_headerSec">
      <span
        :class="is_open ? 'checkerComp_arrowIcon__open' : 'checkerComp_arrowIcon__closed'"
        @click="icon_click"
      />
      <span v-show="heading">{{ heading }}</span>
    </section>
    <section
      class="checkerComp_itemsSec" 
    >
      <div
        class="checkerComp_itemsPanel"
        :style="panel_style"
      >
        <div
          v-for="(item,idx) in itemsClone"
          :key="idx"
          :class="item_class(idx)"
          @click="item_click(idx)"
        >
          {{ item.text }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'CheckerComp',
    props: {
      heading: {
        type: String,
        default: null
      },
      items: {
        type: Array,
        default: null
      },
      singleCheck: {
        type: Boolean,
        default: false
      },
      dropPanelHeight: {
        type: String,
        default: '100px'
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
    emits: {
      'checkerCompCheckedText': null
    },
    data(){
      return {
        updated_items: null,
        is_open: false,
        panel_style: 'width: 0; height: 0; transition: all 3s; opacity: 0;'
      };
    },
    computed: {
      itemsClone() {
        let items = null;
        if(this.updated_items === null) {
         items = JSON.parse(JSON.stringify(this.items));
        }else {
          if(this.updated_items !== null) {
           items = this.updated_items;
          }
        }
        this.send_checked(items);
        return items;
      }
    },
    mounted(){
      if(this.cssVariables !== null){
        for(let key of Object.keys(this.cssVariables)){
          this.$el.style.setProperty(`--${key}`, this.cssVariables[key]);
        }
      }
    },
    methods: {
      item_class: function(idx){
        if (this.itemsClone[idx].checked) {
          return ['checkerComp_item__checked', 'checkerComp_item'];
        } else {
          return ['checkerComp_item__notchecked', 'checkerComp_item'];
        }
      },
      send_checked: function(items){
        // send updated checked text to listeners
        const checked_text = [];
        for(let i=0; i < items.length; i++){
          if(items[i].checked){
            checked_text.push(items[i].text);
          }
        }
        this.$emit('checkerCompCheckedText', checked_text);
      },
      blur_it: function(){
        if(this.is_open && this.blurPanel){
          this.is_open = false;
          this.panel_style = 'height: 0;transition: all 3s; opacity: 0;';
        }
      },
      icon_click: function(){
        this.toggle_panel_state();
      },
      item_click: function(idx){
        const items = this.itemsClone;
        items[idx].checked = !items[idx].checked;
        if(this.singleCheck){
          for(let i = 0; i < items.length; i++){
            if(i !== idx){
              items[i].checked = false;
            }
          }
        }
        this.updated_items = items;
      },
      toggle_panel_state: function(){
        if(this.is_open){
          this.is_open = false;
          this.panel_style = 'height: 0;transition: all 3s; opacity: 0;';
        }else {
          this.is_open = true;
          this.panel_style = 'height: ' + this.dropPanelHeight + ';transition: all 3s; opacity: 1.0;';
        }
      }
    }
  };
</script>

<style lang="less">
  :root {
    --checker_comp_font_family: Verdana,serif;

    --checker_comp_heading_color: black;
    --checker_comp_heading_font_size: 1rem;
    --checker_comp_heading_font_weight: bold;

    --checker_comp_down_icon: '\21D3';
    --checker_comp_icon_color: black;

    --checker_comp_items_panel_position: static;
    --checker_comp_items_panel_width: 8rem;
    --checker_comp_items_panel_z_index: auto;
    --checker_comp_items_panel_color: black;
    --checker_comp_items_panel_background: white;
    --checker_comp_items_panel_border: 1px solid black;

    --checker_comp_checkbox_border: 1px solid black;
    --checker_comp_notchecked_background: white;
    --checker_comp_checked_background: yellowgreen;

    --checker_comp_item_font_size: .8rem;
  }
  .checkerComp {
    display: block;
    font-family: var(--checker_comp_font_family);
    &:focus {
      outline: none;
    }

    &_headerSec {
      color: var(--checker_comp_heading_color);
      font-size: var(--checker_comp_heading_font_size);
      font-weight: var(--checker_comp_heading_font_weight);
    }

    &_arrowIcon__open::before {
      content: var(--checker_comp_down_icon);
      display: inline-block;
      color: var(--checker_comp_icon_color);
      transition: 600ms linear all;
      margin-right: .2rem;
      font-size: 1rem;
      cursor: pointer;
    }

    &_arrowIcon__closed::before {
      content: var(--checker_comp_down_icon);
      display: inline-block;
      color: var(--checker_comp_icon_color);
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
      color: var(--checker_comp_items_panel_color);
      background: var(--checker_comp_items_panel_background);
      border: var(--checker_comp_items_panel_border);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      overflow: auto;
      padding: .5rem;
      width: var(--checker_comp_items_panel_width);
      position: var(--checker_comp_items_panel_position);
      z-index: var(--checker_comp_items_panel_z_index);
      transition: all 2s ease-in-out;

      &::-webkit-scrollbar-track {
        background-color: #F5F5F5;
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      }
      &::-webkit-scrollbar {
        background-color: transparent;
        width: 12px;
        height: 12px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #D62929;
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      }
    }

    &_item {
      margin-top: .6rem;
      font-size: var(--checker_comp_item_font_size);
      cursor: pointer;
    }

    &_item__checked::before {
      content: '\2713';
      display: inline-block;
      vertical-align: .2em;
      width: .8em;
      height: .8em;
      margin-right: .2em;
      border-radius: .2em;
      border: var(--checker_comp_checkbox_border);
      background: var(--checker_comp_checked_background);
      text-indent: .15em;
      line-height: .65;
    }

    &_item__notchecked::before {
      content: '\a0';
      display: inline-block;
      vertical-align: .2em;
      width: .8em;
      height: .8em;
      margin-right: .2em;
      border-radius: .2em;
      border: var(--checker_comp_checkbox_border);
      background: var(--checker_comp_notchecked_background,white);
      text-indent: .15em;
      line-height: .65;
    }
  }
</style>