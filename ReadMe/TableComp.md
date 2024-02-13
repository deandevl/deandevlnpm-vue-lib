# TableComp

**TableComp** is a Vue.js (version >= 3.2) component for display small tabular data with many features including:

-  variable column widths and alignments
-  built-in vertical scrolling
-  various css styling variables
-  modify an individual cell's css class
-  responsive event notification to the component parent on row/cell clicks
-  column toggle sort descending/ascending with header click

See the *src/TableComp* folder for the Vue source (TableComp.vue).

## Props

| prop         | description                                                  | accepted value  | default       |
| ------------ | ------------------------------------------------------------ | --------------- | ------------- |
| rows         | an array of javascript objects defining each row of the table.  Each object has the same key names and lengths. | array           | null          |
| title        | a title to be placed above the table                         | string          | null          |
| subTitle     | a sub title to be placed above the table                     | string          | null          |
| tableHeight  | the overall height of the table in pixels                    | number          | 300           |
| headings     | the variable headings that appear at the top of the table. Array has the same length as a table's row. | string array    | null          |
| columnWidths | the column widths (in pixels) for each of the variables      | number array    | [120,120,...] |
| cellClass    | A javascript object that sets the css class name of a specific cell. Object has keys for row and column number along with a string for a predefined class name. | object          | null          |
| cssVariables | defines some css variables for easy styling                  | see table below | null          |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **TableComp**. The following table shows the css variable names along with their default values:

| variable name                  | default value                                                |
| ------------------------------ | ------------------------------------------------------------ |
| table_comp_font_family         | 'Verdana,serif'                                              |
| table_comp_title_font_size     | '1rem'                                                       |
| table_comp_title_color         | 'black'                                                      |
| table_comp_thead_color         | 'black'                                                      |
| table_comp_thead_border_bottom | '1px solid black'                                            |
| table_comp_thead_background    | 'linear-gradient(to bottom, #f5f6f6 0%,#dbdce2 21%,#b8bac6 49%,#dddfe3 80%,#f5f6f6 100%)' |
| table_comp_thead_text_align    | 'left'                                                       |
| table_comp_row_color           | 'black'                                                      |
| table_comp_row_selected_color  | 'green'                                                      |
| table_comp_row_border_bottom   | '1px solid black'                                            |
| table_comp_row_odd_background  | 'linear-gradient(to bottom, #cedce7 0%,#596a72 100%)'        |
| table_comp_row_even_background | 'linear-gradient(to bottom, #cedce7 0%,#596a72 100%)'        |
| table_comp_row_hover_color     | 'linear-gradient(to bottom, #b4e391 0%,#61c419 50%,#b4e391 100%)' |
| table_comp_cell_font_size      | '.75rem'                                                     |

## Events

| event | description          | parameters                                                   | emits           |
| ----- | -------------------- | ------------------------------------------------------------ | --------------- |
| click | row button click     | returns an object with selected row index, array of the cell values in the selected row, and an array of the css classes for each cell | 'tableCompRow'  |
| click | cell button click    | returns an object with the selected cell's row and column index,value,and class | 'tableCompCell' |
| click | heading button click | returns an object with the sorted column's name and index along with a boolean that reflects wheather it is in descending order | 'tableCompSort' |