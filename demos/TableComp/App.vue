<template>
  <div class="demo_container">
    <div class="buttons_box">
      <button @click="load_pet_data">
        Load Pet Data
      </button>
      <button @click="change_class_4_2">
        Class Name for Cell [4,2]
      </button>
      <button @click="change_class_1_3">
        Class Name for Cell [1,3]
      </button>
      <button @click="delete_bird_row">
        Delete 'bird'
      </button>
      <button @click="add_goldfish_row">
        Add 'goldfish'
      </button>
    </div>
    <table-comp
      title="Favorite Pets"
      sub-title="(Add/Delete/Change cell styles)"
      :rows="rows"
      :headings="headings"
      :table-height="table_height"
      :column-widths="column_widths"
      :cell-class="cell_class"
      :css-variables="css_variables"
      @table-comp-row="show_row"
      @table-comp-cell="show_cell"
      @table-comp-sort="show_sort"
    />
  </div>
</template>

<script>
  import {TableComp} from '@deandevlnpm/vue-lib';

  export default {
    name: 'App',
    components: {
      TableComp
    },
    data: function(){
      return {
        headings: null,
        rows: null,
        table_height: null,
        column_widths: null,
        cell_class: null,
        css_variables: {
          table_comp_title_color: 'white',
          table_comp_thead_color: 'white',
          table_comp_thead_background: 'black',
          table_comp_thead_border_bottom: '2px solid white',
          table_comp_row_color: 'gray',
          table_comp_row_selected_color: 'gold',
          table_comp_row_border_bottom: '1px solid white',
          table_comp_row_odd_background: 'black',
          table_comp_row_even_background: 'black',
          table_comp_cell_font_size: '1.25rem'
        }
      };
    },
    methods: {
      load_pet_data: function(){
        this.headings = ['My Pets', 'Favorite Food', 'Pet\'s Name', 'Pet\'s Age'];
        this.rows = [
          {'pet':'dog', 'food':'biscuits', 'name':'Fido', 'age':7.09},
          {'pet':'cat', 'food':'fish', 'name':'Pussy', 'age':3.345},
          {'pet':'snake', 'food':'rats', 'name':'Sneaky', 'age':10},
          {'pet':'hamster', 'food':'popcorn', 'name':'Tumbler', 'age':5.60},
          {'pet':'bird', 'food':'seeds', 'name':'Sweety', 'age':12},
          {'pet':'turtle', 'food':'lettuce', 'name':'Speedy', 'age':20.33},
          {'pet':'pig', 'food':'potatoes', 'name':'Porky', 'age':13.5},
          {'pet':'cow', 'food':'grass', 'name':'Molly', 'age':14}
        ];
        this.table_height = 200;
        this.column_widths = [100,160,140,110];
        this.cell_class = {
          row: 2,
          col: 2,
          name: 'snake_cell'
        }
      },
      add_goldfish_row: function(){
        const rows = JSON.parse(JSON.stringify(this.rows));
        rows.push({'pet':'goldfish', 'food':'fish food', 'name':'Goldie', 'age':4.3})
        this.rows = rows;
      },
      delete_bird_row: function(){
        const rows = JSON.parse(JSON.stringify(this.rows));
        rows.forEach((obj,idx) => {
          if(obj['pet'] === 'bird'){
            rows.splice(idx,1);
          }
        })
        this.rows = rows;
      },
      //parent to child - modify a cell class
      change_class_4_2: function(){
        this.cell_class = {
          row: 3,
          col: 1,
          name: 'cell_check'
        }
      },
      change_class_1_3: function(){
        this.cell_class = {
          row: 0,
          col: 2,
          name: 'snake_cell'
        }
      },
      //child to parent -- respond to row event
      show_row: function(obj){
        console.log(`Row clicked: ${obj.row_values}`);
      },
      //child to parent -- respond to cell event
      show_cell: function(obj){
        console.log(`Cell clicked:
        Row Index: ${obj.row_index}
        Cell Column: ${obj.col_index}
        Cell Value: ${obj.cell_value}
        Cell Class: ${obj.cell_class}`);
      },
      show_sort: function(obj){
        console.log(`Column sorted:
        Column: ${obj.column}
        Index: ${obj.index}
        Descending: ${obj.descending}`);
      }
    }
  };
</script>

<style>
  .demo_container {
    height: 40rem;
    width: 60rem;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
  .buttons_box {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 2rem;
  }
  .cell_check::before {
    content: '\2713';
    display: inline-block;
    vertical-align: .2em;
    width: .8em;
    height: .8em;
    margin-right: .2em;
    background: transparent;
    text-indent: .15em;
    line-height: .65;
    color: white;
  }
  .snake_cell {
    color: red;
    font-weight:bold;
    font-style:italic;
    text-decoration:line-through;
  }
</style>