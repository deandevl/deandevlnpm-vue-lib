# ActiveListComp

**ActiveListComp**  is a Vue.js component (Vue.js >= 3.2) that provides an input box laid on top of a list display that grows with each new input entry.  Each entry in the list has two icons linked for editing or deleting the item.

To use the component, enter a string in the input box and hit the enter key. A listing panel will begin to scroll out showing the entry.  As new strings are entered, the listing panel continues to grow. Each entry in the list has a pair of icons for editing and deleting the item.  

## Props

| prop            | description                                 | accepted value  | default         |
| --------------- | ------------------------------------------- | --------------- | --------------- |
| inputSize       | the maximum number of characters for input  | number          | 20              |
| title           | gives a heading over the input box          | string          | null            |
| placeholder     | a placeholder for the input box             | string          | 'Enter a value' |
| dropPanelHeight | defines the height of the drop down panel   | string          | '100px'         |
| cssVariables    | defines some css variables for easy styling | see table below | null            |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **ButtonComp**. The following table shows the css variable names along with their default values:



| variable name                       | default value     |
| ----------------------------------- | ----------------- |
| active_list_font_family             | 'Verdana,serif'   |
| active_list_title_color             | '#4d4d4d'         |
| active_list_title_font_size         | '.8rem'           |
| active_list_title_font_weight       | 'bold'            |
| active_list_input_font_size         | '.8rem'           |
| active_list_input_color             | 'darkgray'        |
| active_list_input-background        | 'white'           |
| active_list_input_placeholder_color | 'gray'            |
| active_list_input-border            | '1px solid black' |
| active_list_arrow_icon              | '\21D3'           |
| active_list_arrow_color             | 'black'           |
| active_list_edit_icon               | '\270E'           |
| active_list_edit_color              | 'black'           |
| active_list_trash_icon              | '\2716'           |
| active_list_trash_color             | 'red'             |
| active_list_panel_position          | 'static'          |
| active_list_panel_z_index           | 'auto'            |
| active_list_items_panel_background  | 'transparent'     |
| active_list_item_color              | 'black'           |
| active_list_item_border             | '1px solid gray'  |

## Events

Under the hood the action is one way from the child component to the parent component.  **ActiveListComp** emits one event (named `@active-list-comp-items`) and sends the current array of items.  The event is emitted with the array of items whenever **ActiveListComp** adds an item, deletes an item, or updates an item. From there it's up to the parent to process the current items. 



| event   | description                                          | parameters | emits                   |
| ------- | ---------------------------------------------------- | ---------- | ----------------------- |
| @change | triggered when an item is added, deleted, or updated | $event     | @active-list-comp-items |