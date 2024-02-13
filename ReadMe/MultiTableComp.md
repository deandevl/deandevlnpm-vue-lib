# MultiTableComp

**MultiTableComp** is a Vue.js (>= 3.2) web component that displays multiple sub tables of data from a single parent table.  The contents of a sub table is expanded/contracted by displaying/hiding the associated rows in the parent table.  

## Props

| prop         | description                                                  | accepted value                 | default  |
| ------------ | ------------------------------------------------------------ | ------------------------------ | -------- |
| title        | a title to be placed above the parent table                  | string                         | null     |
| headings     | the headings that all of the sub tables have in common       | string array                   | null     |
| columnWidths | the column widths (in pixels) for each of the sub tables' columns | number array                   | '7.5rem' |
| treeLine     | defines the type of display lines that connect a sub table's name label with its rows | 'black', 'white', and 'dotted' | 'black'  |
| tables       | defines the sub table data to be displayed                   | javascript object              | null     |
| cssVariables | defines some css variables for easy styling                  | see table below                | null     |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **MultiTableComp**. The following table shows the css variable names along with their default values:

| variable name                       | default value     |
| ----------------------------------- | ----------------- |
| multitable_comp_font_family         | 'Verdana,serif'   |
| multitable_comp_title_font_size     | '1rem'            |
| multitable_comp_title_color         | 'black'           |
| multitable_comp_thead_color         | 'black'           |
| multitable_comp_thead_border_bottom | '1px solid black' |
| multitable_comp_thead_background    | 'transparent'     |
| multitable_comp_tbody_height        | '20rem'           |
| multitable_comp_down_icon           | '\21D3'           |
| multitable_comp_cell_font_size      | '1rem'            |
| multitable_comp_cell_color          | 'black'           |

## Events

| event  | description               | parameters                                                   | emits                |
| ------ | ------------------------- | ------------------------------------------------------------ | -------------------- |
| @click | triggered on button click | the label of selected sub table along with the row and column cell index | 'multiTableCompCell' |