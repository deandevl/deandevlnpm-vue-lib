# WorkSheetComp

Far from being an Excel worksheet **WorkSheetComp** is a Vue.js web component that can display a large table of data where row index headings freeze as you scroll horizontally or table headings freeze as you scroll vertically.  Also when a table heading is clicked, the entire table is sorted based on the selected column.  Repeated clicks of the column toggle the sort direction between ascending/descending. See the *src/WorkSheetComp* folder for the Vue source (WorkSheetComp.vue).

## Props

| prop           | description                                                  | accepted value  | default        |
| -------------- | ------------------------------------------------------------ | --------------- | -------------- |
| rows           | an array of row arrays that can contain a mix of strings, Dates, and numbers | array           | null           |
| headings       | an array of strings for the sheet's headings                 | string array    | null           |
| columnWidths   | an array of numbers that specifies each of the column widths in pixels | number array    | [120, 120,...] |
| sortDescending | a boolean which if `true` sets the column sorting to descending | boolean         | false          |
| cssVariables   | defines some css variables for easy styling                  | see table below | null           |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **WorkSheetComp**. The following table shows the css variable names along with their default values.

| variable name                            | default value   |
| ---------------------------------------- | --------------- |
| --worksheet_comp_font_family             | 'Verdana,serif' |
| --worksheet_comp_outline_color           | 'black'         |
| --worksheet_comp_background_color        | 'white'         |
| --worksheet_comp_header_color            | 'black'         |
| --worksheet_comp_header_background_color | 'white'         |
| --worksheet_comp_cell_align              | 'left'          |
| --worksheet_comp_cell_color              | 'black'         |
| --worksheet_comp_cell_selected_color     | '#0f9d58'       |

## Events

| event | description                    | parameters | emits               |
| ----- | ------------------------------ | ---------- | ------------------- |
| click | triggered on cell button click | $event     | 'workSheetCompCell' |