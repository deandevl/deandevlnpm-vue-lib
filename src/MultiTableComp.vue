<template>
  <div class="multiTableComp">
    <div class="multiTableComp_title">{{ title }}
    </div>
    <table class="multiTableComp_table">
      <thead>
        <tr>
          <th
            v-for="(head,index) in headings"
            :key="index"
            class="multiTableComp_theadTh"
            :style="column_styles[index]"
          >
            {{ head }}
          </th>
        </tr>
      </thead>
      <tbody class="multiTableComp_tbody">
        <template
          v-for="(value,idx) in tables"
          :key="idx"
        >
          <tr>
            <td
              colspan="headings.length"
              @click="key_clicked(value)"
            >
              <span :class="value.open ? 'multiTableComp_arrowIcon__open' : 'multiTableComp_arrowIcon__closed'">{{ idx }}</span>
            </td>
          </tr>
          <transition-group name="fade">
            <tr
              v-for="(datarow,row_idx) in value.data"
              v-show="value.open"
              :key="row_idx"
            >
              <td
                v-for="(datacol,col_idx) in datarow"
                :key="col_idx"
                :style="column_styles[col_idx]"
                :class="compute_td_class(row_idx,col_idx,value.data.length)"
                @click="cell_clicked(idx,row_idx,col_idx)"
              >
                {{ datacol }}
              </td>
            </tr>
          </transition-group>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'MultiTableComp',
    props: {
      title: {
        type: String,
        default: null
      },
      headings: {
        type: Array,
        required: true,
        default: () =>{
          return null;
        }
      },
      columnWidths: {
        type: Array,
        default: ()=> {
          return null;
        }
      },
      treeLine: {
        type: String,
        default: 'black'
      },
      tables: {
        type: Object,
        default: null
      },
      cssVariables: {
        type: Object,
        default: () => {
          return null;
        }
      }
    },
    emits: {
      multiTableCompCell: null
    }, 
    data() {
      return {
        tree_line_classes: null
      };
    },
    computed: {
      column_styles: function(){
        let col_styles = [];
        if(this.headings !== null){
          const n_cells = this.headings.length;
          col_styles = new Array(n_cells);
          for(let i=0; i<n_cells; i++){
            let width_style = null;
            if(this.columnWidths === null){
              width_style = 'width: 7.5rem';
            }else if(this.columnWidths[i] === null){
              width_style = 'width: 7.5rem';
            }else {
              width_style = `width:${this.columnWidths[i]}px;`;
            }
            col_styles[i] = width_style;
          }
        }
        return col_styles;
      }
    },
    mounted() {
      if(this.treeLine === 'black') {
        this.tree_line_classes = ['multiTableComp_tbodyTd__startTreeSolidBlack','multiTableComp_tbodyTd__endTreeSolidBlack'];
      }else if(this.treeLine === 'white') {
        this.tree_line_classes = ['multiTableComp_tbodyTd__startTreeSolidWhite','multiTableComp_tbodyTd__endTreeSolidWhite'];
      }else if(this.treeLine === 'dotted'){
        this.tree_line_classes = ['multiTableComp_tbodyTd__startTreeDottedBlack','multiTableComp_tbodyTd__endTreeDottedBlack'];
      }else {
        this.tree_line_classes = ['multiTableComp_tbodyTd__startTreeSolidBlack','multiTableComp_tbodyTd__endTreeSolidBlack'];
      }
      if(this.cssVariables !== null){
        for(let key of Object.keys(this.cssVariables)){
          this.$el.style.setProperty(`--${key}`, this.cssVariables[key]);
        }
      }
    },
    methods: {
      compute_td_class: function(row_idx,col_idx,data_length){
        if(this.tree_line_classes !== null && col_idx === 0){
          if(row_idx < data_length-1){
            return this.tree_line_classes[0];
          }else {
            return this.tree_line_classes[1];
          }
        }else {
          return '';
        }
      },
      key_clicked: function(value){
        value.open = !value.open;
      },
      cell_clicked: function(table_key,data_row_idx,data_col_idx){
        this.$emit('multiTableCompCell',{table_key:table_key,data_row_idx:data_row_idx,data_col_idx:data_col_idx});
      }
    }
  };
</script>

<style lang="less">
  :root {
    --multitable_comp_font_family: Verdana,serif;

    --multitable_comp_title_font_size: 1rem;
    --multitable_comp_title_color: black;

    --multitable_comp_thead_color: black;
    --multitable_comp_thead_border_bottom: 1px solid black;
    --multitable_comp_thead_background: transparent;

    --multitable_comp_tbody_height: 20rem;
    --multitable_comp_down_icon: '\21D3';
    --multitable_comp_cell_font_size: 1rem;
    --multitable_comp_cell_color: black;
  }

  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-active {
    transition: all 2s linear;
  }
  .fade-leave-to {
    transition: all 2s linear;
    opacity: 0;
  }

  .multiTableComp {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: var(--multitable_comp_font_family);

    &_title {
      font-size: var(--multitable_comp_title_font_size);
      color: var(--multitable_comp_title_color);
      font-weight: bold;
      margin-bottom: .5rem;
    }

    &_table {
      table-layout: fixed;
      border-collapse: collapse;
    }

    &_theadTh{
      color: var(--multitable_comp_thead_color);
      border-bottom: var(--multitable_comp_thead_border_bottom);
      background: var(--multitable_comp_thead_background);
    }

    &_tbody {
      height: var(--multitable_comp_tbody_height);
      overflow-y: auto;
      overflow-x: hidden;
      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
      }
      &::-webkit-scrollbar {
        height: 12px;
        width: 12px;
        background-color: transparent;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #D62929;
      }
    }

    &_arrowIcon__open::before {
      content: var(--multitable_comp_down_icon);
      display: inline-block;
      color: var(--multitable_comp_cell_color);
      transition: 600ms linear all;
      margin-right: .2rem;
      font-size: 1rem;
      cursor: pointer;
    }

    &_arrowIcon__closed::before {
      content: var(--multitable_comp_down_icon);
      display: inline-block;
      color: var(--multitable_comp_cell_color);
      transform: rotate(-90deg);
      transition: 600ms linear all;
      margin-right: .2rem;
      font-size: 1rem;
      cursor: pointer;
    }

    &_tbodyTd__startTreeSolidBlack {
      background: url(img/startTreeSolidBlack.png) 1rem 54% no-repeat;
      padding-left: 1.6rem;
    }
    &_tbodyTd__endTreeSolidBlack {
      background: url(img/endTreeSolidBlack.png) 1rem 54% no-repeat;
      padding-left: 1.6rem;
    }
    &_tbodyTd__startTreeSolidWhite {
      background: url(img/startTreeSolidWhite.png) 1rem 54% no-repeat;
      padding-left: 1.6rem;
    }
    &_tbodyTd__endTreeSolidWhite {
      background: url(img/endTreeSolidWhite.png) 1rem 54% no-repeat;
      padding-left: 1.6rem;
    }
    &_tbodyTd__startTreeDottedBlack {
      background: url(img/startTreeDottedBlack.png) 1rem 54% no-repeat;
      padding-left: 1.6rem;
    }
    &_tbodyTd__endTreeDottedBlack {
      background: url(img/endTreeDottedBlack.png) 1rem 54% no-repeat;
      padding-left: 1.6rem;
    }
  }
</style>