<template>
  <div class='demo_container'>
    <multi-table-comp
      title="American Flies"
      :headings="headings"
      :tables="tables"
      :column-widths="column_widths"
      :tree-line="tree_line"
      :css-variables="css_variables"
      @multi-table-comp-cell="show_cell"
    >
    </multi-table-comp>
  </div>
</template>

<script>
  import {MultiTableComp} from '@deandevlnpm/vue-lib';

  export default {
    name: 'App',
    components: {
      MultiTableComp
    },
    data() {
      return {
        headings: ['Fly Name','Location','Color'],
        tables: {
          House: {
            open: true,
            data:[
              ['Carrion Fly','WorldWide','gray'],
              ['Office Fly','California,Bay Area','white'],
              ['Common House Fly','-','brown']
            ]
          },
          Horse: {
            open: true,
            data: [
              ['Horn Fly','Kansas','red'],
              ['Face Fly','-','green'],
              ['Stable Fly','-','black']
            ]
          }
        },
        column_widths: [240,240,80],
        tree_line: 'dotted',
        css_variables: {multitable_comp_cell_font_size: '1.25rem'}
      };
    },
    methods: {
      show_cell: function(obj){
        console.log(`table_key:${obj.table_key} data_row:${obj.data_row_idx} data_col:${obj.data_col_idx}`);
      }
    }
  };
</script>