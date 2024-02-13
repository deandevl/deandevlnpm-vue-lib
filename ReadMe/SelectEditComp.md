# SelectEditComp

**SelectEditComp** is a web component (Vue.js >= 3.2) similar to an HTML select element where an item is selected from a list.  In addition to selection, the user can interactively add/delete items from the selection list.   See the *src/SelectEditComp* folder for the Vue source (SelectEditComp.vue).

## Props

| prop            | description                                                  | accepted value  | default  |
| --------------- | ------------------------------------------------------------ | --------------- | -------- |
| items           | an array of strings that sets the items from which to select | string array    | null     |
| selectValue     | sets the current selected  value if  the value is a member of `items` | string          | null     |
| heading         | a heading to be displayed above the selection box            | string          | null     |
| inputSize       | the maximum number of characters for input                   | string          | '20'     |
| placeholder     | a string placed in the selection box when no selection has been made | string          | null     |
| showTrash       | to show the trash icon and for the user to delete an item interactively | boolean         | true     |
| dropPanelHeight | the height of drop down list panel                           | string          | '6.5rem' |
| blurPanel       | if false, will not roll up item panel when component is out of focus | boolean         | true     |
| singleBorder    | if a single bottom border is displayed or rectangular        | boolean         | false    |
| cssVariables    | defines some css variables for easy styling                  | see table below | null     |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **SelectEditComp**. The following table shows the css variable names along with their default values:

| variable name                      | default value     |
| ---------------------------------- | ----------------- |
| select_edit_font_family            | 'Verdana,serif'   |
| select_edit_arrow_icon             | '\21D3'           |
| select_edit_arrow_color            | 'black'           |
| select_edit_font_size              | '1rem'            |
| select_edit_color                  | 'darkgray'        |
| select_edit_background             | 'transparent'     |
| select_edit_border_color           | 'black'           |
| select_edit_heading_font_size      | '1rem'            |
| select_edit_heading_color          | 'black'           |
| select_edit_heading_font_weight    | 'bold'            |
| select_edit_placeholder_color      | 'black'           |
| select_edit_trash_icon             | '\2716'           |
| select_edit_trash_color            | 'red'             |
| select_edit_items_panel_color      | 'black'           |
| select_edit_items_panel_background | 'white'           |
| select_edit_items_panel_border     | '1px solid black' |
| select_edit_item_font_size         | '.75rem'          |
| select_edit_item_hover_box_shadow  | '0 0 10px gray'   |
| select_edit_item_hover_color       | 'violet'          |

## Events



| event | description                                                  | parameters          | emits                      |
| ----- | ------------------------------------------------------------ | ------------------- | -------------------------- |
| click | item selected/edited/deleted for list                        | item text           | selectEditCompValueChanged |
| click | item list changed from item edit/delete/replace  or entire list replaced | new item text array | selectEditCompItemsChanged |