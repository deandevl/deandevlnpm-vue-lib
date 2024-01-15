# SelectComp

**SelectComp** is a Vue.js (>= 3.2) component similar to an HTML select tag where the parent can set the select value along with a collapsing panel of options from which to select.  See the *src/SelectComp* folder for the Vue source (SelectComp.vue).

## Props

| prop            | description                                                  | accepted value  | default  |
| --------------- | ------------------------------------------------------------ | --------------- | -------- |
| items           | the string array of items to select from                     | string array    | null     |
| selectValue     | the current selected  value if  the value is a member of `items` | string          | null     |
| placeholder     | sets an initial placeholder value                            | string          | null     |
| dropPanelHeight | the height of drop down list panel                           | string          | '6.5rem' |
| blurPanel       | if false, will not roll up item panel when component is out of focus | boolean         | true     |
| singleBorder    | if a single bottom border is displayed or rectangular        | boolean         | false    |
| cssVariables    | defines some css variables for easy styling                  | see table below | null     |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **SelectComp**. The following table shows the css variable names along with their default values:

| variable name                      | default value     |
| ---------------------------------- | ----------------- |
| select_comp_font_family            | 'Verdana,serif'   |
| select_comp_width                  | '10rem'           |
| select_comp_font_size              | '1rem'            |
| select_comp_color                  | 'darkgray'        |
| select_comp_background             | 'transparent'     |
| select_comp_border_color           | 'black'           |
| select_comp_heading_font_size      | '1rem'            |
| select_comp_heading_color          | 'black'           |
| select_comp_heading_font_weight    | 'bold'            |
| select_comp_hover_background_color | 'lightblue'       |
| select_comp_items_panel_color      | 'black'           |
| select_comp_items_panel_background | 'white'           |
| select_comp_items_panel_border     | '1px solid black' |
| select_comp_items_panel_position   | 'static'          |
| select_comp_items_panel_z_index    | 'auto'            |
| select_comp_item_font_size         | '.75rem'          |
| select_comp_item_hover_box_shadow  | '0 0 10px gray'   |
| select_comp_item_hover_color       | 'violet'          |

## Events

| event  | description                    | parameters            | emits                    |
| ------ | ------------------------------ | --------------------- | ------------------------ |
| @click | triggered on item button click | text of selected item | 'selectCompValueChanged' |