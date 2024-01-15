<template>
  <div>
    <div 
      v-if="rows_clone !== null"
      class="tableComp"
      :style="table_width_style"
    >
      <div 
        v-if="title !== null"
        class="tableComp_title"
      >
        {{ title }}
      </div>
      <div
        v-if="subTitle !== null"
        class="tableComp_subtitle"
      >
        {{ subTitle }}
      </div>
      <table class="tableComp_table">
        <thead 
          v-if="headings !== null" 
          class="tableComp_thead"
        >
          <tr>
            <th
              v-for="(head,col_index) in headings"
              :key="col_index"
              :style="head_styles[col_index]"
              @click="sort_column(col_index)"
            >
              {{ head }}
            </th>
          </tr>
        </thead>
        <tbody
          class="tableComp_tbody" 
          :style="tbody_style"
        >
          <tr
            v-for="(row,row_index) in rows_clone"
            :key="row_index"
            class="tableComp_tr__notselected"
            @click="row_clicked($event,row_index)"
          >
            <td
              v-for="(key,col_index) in Object.keys(row)"
              :key="col_index"
              :style="td_styles[row_index][col_index]"
              :class="class_names[row_index][col_index]"
              @click="cell_clicked(row_index,col_index)"
            >
              {{ row[key] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TableComp',
    props: {
      rows: {
        type: Array,
        default: null
      },
      title: {
        type: String,
        default: null
      },
      subTitle: {
        type: String,
        default: null
      },
      tableHeight: {
        type: Number,
        default: 300
      },
      headings: {
        type: Array,
        default: null
      },
      columnWidths: {
        type: Array,
        default: null
      },
      cellClass: {
        type: Object,
        default: null
      },
      cssVariables: {
        type: Object,
        default: null
      }
    },
    emits: {
      'tableCompRow': null,
      'tableCompCell': null,
      'tableCompSort': null,
    },
    data(){
      return {
        rows_clone: null,
        selected_tr: null,
        sort_col_idx: 0,
        sort_descending: false,
        class_names: null
      };
    },
    computed: {
      n_cols: function(){
        return Object.keys(this.rows[0]).length;
      },
      n_rows: function(){
        return this.rows.length;
      },
      table_width_style: function(){
        let width_style = '';
        if(this.columnWidths === null){
          width_style = `width:${(120 * this.n_cols)}px;`;
        }else{
          let total = 0;
          for(let i=0; i < this.n_cols; i++) {
            if(this.columnWidths[i] === null) {
              total += 120;
            }else {
              total += this.columnWidths[i];
            }
          }
          width_style = `width:${total + 8}px;`;
        }
        return width_style;
      },
      head_styles: function(){
        return this.row_style();
      },
      td_styles: function(){
        const style = this.row_style();
        const styles = [];
        for(let i =0; i < this.n_rows; i++){
          styles.push(style);
        }
        return styles;
      },
      tbody_style: function(){
        return `height: ${this.tableHeight}px;`;
      }
    },
    watch: {
      rows: function(val){
        if(val !== null) {
          this.rows_clone = JSON.parse(JSON.stringify(val));

          this.class_names = new Array(val.length);
          val.forEach((row, i) => {
            const keys = Object.keys(row);
            const names = new Array(keys.length)
            keys.forEach((key, ii) => {
              names[ii] = '';
            })
            this.class_names[i] = names;
          })
        }
      },
      cellClass: function(val) {
        if(this.cellClass !== null){
          const row = val['row'];
          const col = val['col'];
          this.class_names[row][col] = val['name'];
        }
      }
    },
    mounted(){
      if (this.cssVariables !== null) {
        for (let key of Object.keys(this.cssVariables)) {
          this.$el.style.setProperty(`--${key}`, this.cssVariables[key]);
        }
      }
    },
    methods: {
      row_style: function(){
        let style= [];
        if(this.columnWidths === null){
          for(let i=0; i < this.n_cols; i++){
            style.push('width:120px');
          }
        }else {
          for(let i=0; i < this.n_cols; i++){
            if(this.columnWidths[i] === null){
              style.push('width:120px');
            }else{
              style.push(`width:${this.columnWidths[i]}px`);
            }
          }
        }
        return style;
      },
      sort_column: function(col_index){
        const keys = Object.keys(this.rows[0]);
        const key = keys[col_index];
        const rows = JSON.parse(JSON.stringify(this.rows));
        rows.sort((a, b) => {
          let x = a[key];
          let y = b[key];
          if (typeof x === 'string') {
            x = x.toLowerCase();
          }
          if (typeof y === 'string') {
            y = y.toLowerCase();
          }

          if(this.sort_descending){
            return ((x < y) ? 1 : ((x > y) ? -1 : 0));
          }else{
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
          }
        });

        this.rows_clone = rows;

        const info = {
          column: key,
          index: col_index,
          descending: this.sort_descending
        }
        this.$emit('tableCompSort', info);
        if(col_index === this.sort_col_idx){
          this.sort_descending = !this.sort_descending;
        }else{
          this.sort_col_idx = col_index;
        }
      },
      //child to parent -- send selected row
      row_clicked: function(e,row_index){
        const row_values = [];
        const row = this.rows_clone[row_index];
        for(let key of Object.keys(row)){
          row_values.push(row[key]);
        }
        if(this.selected_tr){
          this.selected_tr.classList.remove('tableComp_tr__selected');
          this.selected_tr.classList.add('tableComp_tr__notselected');
        }
        e.currentTarget.classList.remove('tableComp_tr__notselected');
        e.currentTarget.classList.add('tableComp_tr__selected');
        this.selected_tr = e.currentTarget;

        this.$emit('tableCompRow',
          {
            row_index: row_index,
            row_values: row_values
          }
        );
      },
      //child to parent -- send selected cell
      cell_clicked: function(row_index, col_index){
        const key = Object.keys(this.rows_clone[row_index])[col_index];
        const info = {
          row_index: row_index,
          col_index: col_index,
          cell_value: this.rows_clone[row_index][key],
          cell_class: this.class_names[row_index][col_index]
        };
        this.$emit('tableCompCell',info);
      }
    }
  };
</script>
<style lang="less">
  :root {
    --table_comp_font_family: Verdana,serif;
    --table_comp_title_font_size: 1rem;
    --table_comp_title_color: black;

    --table_comp_sub_title_font_size: .6rem;
    
    --table_comp_thead_color: black;
    --table_comp_thead_border_bottom: 1px solid black;
    --table_comp_thead_background: linear-gradient(to bottom, #f5f6f6 0%,#dbdce2 21%,#b8bac6 49%,#dddfe3 80%,#f5f6f6 100%);
    --table_comp_thead_text_align: left;

    --table_comp_row_color: black;
    --table_comp_row_selected_color: green;
    --table_comp_row_border_bottom: 1px solid black;
    --table_comp_row_odd_background: linear-gradient(to bottom, #cedce7 0%,#596a72 100%);
    --table_comp_row_even_background: linear-gradient(to bottom, #cedce7 0%,#596a72 100%);
    --table_comp_row_hover_color: linear-gradient(to bottom, #b4e391 0%,#61c419 50%,#b4e391 100%);
    --table_comp_cell_font_size: .75rem;
  }
  .tableComp {
    display: flex;
    flex-direction: column;
    font-family: var(--table_comp_font_family);

    &_title {
      font-size: var(--table_comp_title_font_size);
      color: var(--table_comp_title_color);
      font-weight: bold;
      align-self: center;
      margin-bottom: .8rem;
    }

    &_subtitle {
      font-size: var(--table_comp_sub_title_font_size);
      color: var(--table_comp_title_color);
      font-weight: bold;
      align-self: center;
      margin-bottom: .8rem;
    }
    
    &_table {
      border-collapse: collapse;
    }

    &_thead {
      tr {
        display: block;
        th {
          color: var(--table_comp_thead_color);
          border-bottom: var(--table_comp_thead_border_bottom);
          background: var(--table_comp_thead_background);
          padding: 2px;
          cursor: pointer;
        }
      }
    }

    &_tbody {
      display: block;
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
      tr {
        cursor: pointer;
        border-bottom: var(--table_comp_row_border_bottom);

        &:nth-child(odd) {
          background: var(--table_comp_row_odd_background);
        }
        &:nth-child(even) {
          background: var(--table_comp_row_even_background);
        }
        &:hover {
          background: var(--table_comp_row_hover_color);
        }
        td {
          font-size: var(--table_comp_cell_font_size);
          padding: 2px;
          text-align: center;
        }
      }
    }

    &_tr__selected {
      color: var(--table_comp_row_selected_color);
    }
    &_tr__notselected {
      color: var(--table_comp_row_color)
    }
  }
</style>