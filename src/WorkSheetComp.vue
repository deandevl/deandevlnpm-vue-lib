<template>
  <div class="worksheetComp">
    <div v-if="rows_clone !== null">
      <table class="data-table">
        <thead>
          <tr>
            <th
              v-for="(col,col_idx) in headings_clone"
              :key="col_idx"
              :style="column_styles[col_idx]"
              :class="col_class[col_idx]"
              @click="sort_column(col_idx)"
            >
              {{ headings_clone[col_idx] }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row,row_idx) in rows_clone"
            :key="row_idx"
          >
            <td
              v-for="col_idx in n_cols"
              :key="col_idx"
              :class="col_class[col_idx-1]"
              @click="cell_click($event,row_idx,col_idx-1)"
            >
              {{row[col_idx-1]}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WorkSheetComp',
    props: {
      rows: {
        type: Array,
        default: null
      },
      headings: {
        type: Array,
        default: null
      },
      columnWidths: {
        type: Array,
        default: null
      },
      sortDescending: {
        type: Boolean,
        default: false
      },
      cssVariables: {
        type: Object,
        default: null
      }
    },
    emits: {
      'workSheetCompCell': null
    },
    data() {
      return {
        headings_clone: null,
        rows_clone: null,
        n_cols: null,
        n_rows: null,
        selected_td: null,
        sort_col_idx: null,
        sort_descend: null,
        column_styles: null,
        col_class: null
      };
    },
    watch: {
      rows: function (val) {
        if (val !== null) {
          this.n_cols = val[0].length;
          this.n_rows = val.length;
          const rows = [];
          for (let i = 0; i < this.n_rows; i++) {
            const row = [];
            for (let ii = 0; ii < this.n_cols; ii++) {
              row.push(val[i][ii]);
            }
            rows.push(row);
          }
          this.rows_clone = JSON.parse(JSON.stringify(rows));

          this.headings_clone = new Array(this.headings.length);
          for (let i = 0; i < this.headings.length; i++) {
            this.headings_clone[i] = this.headings[i];
          }

          this.column_styles = new Array(this.n_cols);
          for (let i = 0; i < this.n_cols; i++) {
            if (this.columnWidths === null || this.columnWidths[i] === null) {
              this.column_styles[i] = `min-width:${120}px;` +
                  `max-width:${120}px;` +
                  'overflow: hidden;';
            } else {
              this.column_styles[i] = `min-width:${this.columnWidths[i]}px;` +
                  `max-width:${this.columnWidths[i]}px;` +
                  'overflow: hidden;';
            }
          }

          this.col_class = new Array(this.n_cols);
          for(let i = 0; i < this.n_cols; i++){
            if(i === 0){
              this.col_class[i] = "col-idx-no col-not-selected";
            }else{
              this.col_class[i] = "col-not-selected";
            }
          }
        }
      }
    },
    methods: {
      cell_click: function(e,row_idx,col_idx){
        if(this.selected_td !== null){
          this.selected_td.classList.remove('col-selected');
          this.selected_td.classList.add('col-not-selected');
        }
        e.currentTarget.classList.add('col-selected');
        this.selected_td = e.currentTarget;
        this.$emit('workSheetCompCell',{row: row_idx, col: col_idx});
      },
      sort_column: function(col_index){
        const rows = JSON.parse(JSON.stringify(this.rows));

        rows.sort((a, b) => {
          let x = a[col_index];
          let y = b[col_index];
          if (typeof x === 'string') {
            x = x.toLowerCase();
          }
          if (typeof y === 'string') {
            y = y.toLowerCase();
          }
          if(this.sort_descend) {
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
          } else {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
          }
        });

        this.rows_clone = rows;

        if(col_index === this.sort_col_idx){
          this.sort_descend = !this.sort_descend;
        }else{
          this.sort_col_idx = col_index;
        }
      }
    },
    mounted(){
      this.sort_descend = this.sortDescending;
      if (this.cssVariables !== null) {
        for (let key of Object.keys(this.cssVariables)) {
          this.$el.style.setProperty(`--${key}`, this.cssVariables[key]);
        }
      }
    },
  }
</script>

<style lang="less">
  :root {
    --worksheet_comp_font_family: Verdana,serif;
    --worksheet_comp_outline_color: black;
    --worksheet_comp_background_color: white;

    --worksheet_comp_header_background_color: white;

    --worksheet_comp_cell_align: left;
    --worksheet_comp_cell_color: black;

    --worksheet_comp_cell_selected_color: #0f9d58;
  }
  .worksheetComp {
    font-family: var(--worksheet_comp_font_family);
  }
  .data-table {
    border-spacing: 0;
    padding: 0;
    background-color: var(--worksheet_comp_background_color);
    border: 1px solid;
  }
  thead, th {
    top: 0;
    position: sticky;
    color: var(--worksheet_comp_header_color);
    background-color: var(--worksheet_comp_header_background_color);
    z-index: 20;
    min-height: 30px;
    height: 30px;
    text-align: var(--worksheet_comp_cell_align);
  }
  th, td {
    font-size: 12px;
    padding: 0;
    outline: 1px solid;
    outline-color: var(--worksheet_comp_outline_color);
    border: none;
    outline-offset: -1px;
    padding-left: 5px;
    cursor: pointer;
    text-align: var(--worksheet_comp_cell_align);
  }
  tr {
    min-height: 25px;
    height: 25px;
    color: var(--worksheet_comp_cell_color);
  }
  .col-idx-no {
    left: 0;
    position: sticky;
  }
  .col-not-selected {
    color: var(--worksheet_comp_cell_color);
  }
  .col-selected {
    color: var(--worksheet_comp_cell_selected_color)
  }
</style>