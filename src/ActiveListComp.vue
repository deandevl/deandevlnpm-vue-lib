<template>
  <div class="activeList">
    <div class="activeList_title">
      {{ title }}
    </div>
    <section class="activeList_inputSec">
      <div
        :class="[is_open ? 'activeList_arrowIcon__open' : 'activeList_arrowIcon__closed']"
        @click="arrow_clicked"
      />
      <input
        v-model="input_value"
        class="activeList_input"
        :size="inputSize"
        :placeholder="placeholder"
        @change="add_item"
      >
    </section>
    <!-- items list section -->
    <div
      v-if="items.length > 0"
      class="activeList_listSec"
    >
      <ul class="activeList_list">
        <div
          class="activeList_panel"
          :style="panel_style"
        >
          <li
            v-for="(item,index) in items"
            :key="index"
          >
            <div
              v-if="!item.editing"
              class="activeList_noEditBox"
            >
              <span>{{ item.value }}</span>
              <div 
                class="activeList_editIcon" 
                @click="turn_on_edit(item)"
              />
              <div 
                class="activeList_trashIcon" 
                @click="trash_item(item)"
              />
            </div>
            <div v-else-if="item.editing">
              <input
                v-model="input_list_value"
                class="activeList_input"
                :size="inputSize"
                :placeholder="input_list_placeholder"
                @change="update_item"
                @focusout="input_focusout(item)"
              >
            </div>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ActiveListComp',
    props: {
      inputSize: {
        type: Number,
        default: 20
      },
      title: {
        type: String,
        default: null
      },
      placeholder: {
        type: String,
        default: 'Enter a value'
      },
      dropPanelHeight: {
        type: String,
        default: '100px'
      },
      cssVariables: {
        type: Object,
        default: () => {
          return null;
        }
      }
    },
    emits: {'activeListCompItems': null
    },
    data(){
      return {
        input_value: null,
        input_list_value: null,
        input_list_placeholder: 'Update item',
        items: [],
        is_open: false,
        current_edit_item: null,
        panel_style: 'width: 0; height: 0; transition: all 3s; opacity: 0;'
      };
    },
    mounted(){
      this.$nextTick(function () {
        if(this.cssVariables !== null){
          for(let key of Object.keys(this.cssVariables)){
            this.$el.style.setProperty(`--${key}`, this.cssVariables[key]);
          }
        }
      });
    },
    methods: {
      input_focusout: function(item){
        item.editing = false;
      },
      compute_placeholder: function(item){
        return 'Update ' + item.value;
      },
      add_item: function(){
        if(this.input_value !== null){
          this.items.push({value: this.input_value, editing: false});
          if(!this.is_open){
            this.toggle_state();
          }
        }
        //child to parent -- after add send items
        this.emit_items();
      },
      turn_on_edit: function(item){
        this.current_edit_item = item;
        this.input_list_placeholder = 'Update ' + item.value;
        item.editing = true;
      },
      update_item: function(){
        if(this.input_list_value !== null){
          this.current_edit_item.value = this.input_list_value;
          this.current_edit_item.editing = false;
          //child to parent -- after update send items
          this.emit_items();
          this.current_edit_item = null;
        }
      },
      trash_item: function(item){
        const idx = this.items.indexOf(item);
        this.items.splice(idx,1);
        this.input_value = null;
        if(this.items.length === 0){
          this.toggle_state();
        }
        //child to parent -- after delete send items
        this.emit_items();
      },
      arrow_clicked: function(){
        this.toggle_state();
      },
      toggle_state: function(){
        if(this.is_open){
          this.is_open = false;
          this.panel_style = 'height: 0;transition: all 3s; opacity: 0;';
          if(this.current_edit_item !== null){
            this.current_edit_item.editing = false;
            this.current_edit_item = null;
          }
        }else {
          this.is_open = true;
          this.panel_style = 'height: ' + this.drop_panel_height + ';transition: all 3s; opacity: 1.0;';
        }
      },
      emit_items: function(){
        const items = [];
        for(let item of this.items){
          items.push(item.value);
        }
        this.$emit('activeListCompItems',items);
      }
    },
  };
</script>

<style lang="less">
  :root {
    --active_list_font_family: Verdana, serif;
    --active_list_title_color: #4d4d4d;
    --active_list_title_font_size: .8rem;
    --active_list_title_font_weight: bold;

    --active_list_input_font_size: .8rem;
    --active_list_input_color: darkgray;
    --active_list_input_background: white;
    --active_list_input_placeholder_color: gray;
    --active_list_input_border: 1px solid black;

    --active_list_arrow_icon: '\21D3';
    --active_list_arrow_color: black;
    --active_list_edit_icon: '\270E';
    --active_list_edit_color: black;
    --active_list_trash_icon: '\2716';
    --active_list_trash_color: red;

    --active_list_panel_position: static;
    --active_list_panel_width: 8rem;
    --active_list_panel_z_index: auto;
    --active_list_items_panel_background: lightgreen;
    --active_list_item_color: black;
    --active_list_item_border: 1px solid gray;
  }
  .activeList {
    font-family: var(--active_list_font_family);
    &_title {
      color: var(--active_list_title_color);
      font-size: var(--active_list_title_font_size);;
      font-weight: var(--active_list_title_font_weight);
      align-self: center;
      margin-bottom: .5rem;
    }

    &_inputSec {
      display: flex;
      flex-direction: row;
    }

    &_arrowIcon__closed::before {
      content: var(--active_list_arrow_icon);
      display: inline-block;
      color: var(--active_list_arrow_color);
      transform: rotate(-90deg);
      transition: 600ms linear all;
      margin-right: .2rem;
      font-size: 1rem;
      cursor: pointer;
    }
    &_arrowIcon__open::before {
      content: var(--active_list_arrow_icon);
      display: inline-block;
      color: var(--active_list_arrow_color);
      transition: 600ms linear all;
      margin-right: .2rem;
      font-size: 1rem;
      cursor: pointer;
    }

    &_input {
      font-size: var(--active_list_input_font_size);
      color: var(--active_list_input_color);
      background: var(--active_list_input_background);
      border: var(--active_list_input_border);

      &::-webkit-input-placeholder {
        font-style: italic;
        font-weight: 300;
        color: var(--active_list_input_placeholder_color,gray);
      }
    }

    &_listSec {
      margin-top: .5rem;
    }

    &_list {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    &_panel {
      background: var(--active_list_items_panel_background);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      color: var(--active_list_item_color);
      position: var(--active_list_panel_position);
      z-index: var(--active_list_panel_z_index) ;
      overflow: auto;
      width: var(--active_list_panel_width);
      padding: .5rem;

      &::-webkit-scrollbar-track {
        background-color: #F5F5F5;
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      }
      &::-webkit-scrollbar {
        background-color: transparent;
        width: 0.75rem;
        height: 0.75rem;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #D62929;
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      }
    }

    &_noEditBox {
      display: flex;
      flex-direction: row;
    }

    &_editIcon::before {
      content: var(--active_list_edit_icon);
      color: var(--active_list_edit_color);
      display: inline-block;
      margin-left: .75rem;
      cursor: pointer;
    }

    &_trashIcon::before {
      content: var(--active_list_trash_icon);
      color: var(--active_list_trash_color);
      display: inline-block;
      margin-left: .75rem;
      cursor: pointer;
    }
  }
</style>
