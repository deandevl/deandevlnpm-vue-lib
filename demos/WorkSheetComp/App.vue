<template>
  <div class="demo_container">
    <button @click="load_data">
      Load Data
    </button>

    <work-sheet-comp
      :rows="rows"
      :headings="headings"
      :column-widths="column_widths"
      :css-variables="css_variables"
      @work-sheet-comp-cell="show_cell"
    >
    </work-sheet-comp>
  </div>
</template>

<script>
  //import WorkSheetComp from './WorkSheetComp/WorkSheetComp.vue';
  import {WorkSheetComp} from '@deandevlnpm/vue-lib';
  export default {
    name: 'App',
    components: {
      WorkSheetComp
    },
    data: function() {
      return {
        rows: null,
        headings: null,
        column_widths: null,
        css_variables: {
          worksheet_comp_outline_color: 'white',
          worksheet_comp_cell_color: 'yellow',
          worksheet_comp_background_color: 'black',
          worksheet_comp_header_background_color: "brown",
          worksheet_comp_cell_align: "center"
        }
      };
    },
    methods: {
      load_data: function(){
        this.headings = [
          'Index',
          'Parameter_1','Big_Heading_Parameter_2','Parameter_3','Parameter_4','Parameter_5',
          'Parameter_6','Parameter_7','Parameter_8','Parameter_9','Parameter_10',
          'Parameter_11','Parameter_12','Parameter_13','Parameter_14','Parameter_15'
        ];
        /*this.column_widths = [
          60,
          100,120,80,140,120,
          120,140,100,60,120,
          130,120,100,80,110
        ];
        */

        const rows = [];
        for(let i = 0; i < 100; i++) {
          const row = [];
          row.push(i+1);
          for(let ii = 0; ii < 15; ii++){
            const val = (Math.random() * 100.0) + 1.0;
            row.push(+val.toFixed(2));
          }
          rows.push(row);
        }
        //assign strings to rows
        rows[0][4] = new Date('5/24/1949').toDateString();
        rows[1][4] = 'A String';

        this.rows = rows;
      },
      show_cell: function(obj){
        console.log(`row_idx: ${obj.row} col_idx: ${obj.col}`);
      }
    }
  };
</script>

<style>
  .demo_container {
    background-color: #000000;
  }
</style>