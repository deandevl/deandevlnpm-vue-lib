# DndComp

**DndComp** is a web component (Vue.js >= 3.2) that provides a titled, collapsible list of items that can be dragged to another target element.  See the *src/DndComp* folder for the Vue source (DndComp.vue).

## Props

## 

| prop            | description                                           | accepted value  | default |
| --------------- | ----------------------------------------------------- | --------------- | ------- |
| items           | an array of strings to set the items of the component | string array    | null    |
| heading         | a heading to be displayed above the items list        | string          | null    |
| dropPanelHeight | the height of drop down list panel                    | string          | '100px' |
| cssVariables    | defines some css variables for easy styling           | see table below | null    |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **DndComp**. The following table shows the css variable names along with their default values:



| variable name                   | default value     |
| ------------------------------- | ----------------- |
| dnd_comp_font_family            | 'Verdana,serif'   |
| dnd_comp_heading_color          | 'black'           |
| dnd_comp_heading_font_size      | '1rem'            |
| dnd_comp_heading_font_weight    | 'bold'            |
| dnd_comp_down_icon              | '\21D3'           |
| dnd_comp_icon_color             | 'black'           |
| dnd_comp_items_panel_position   | 'static'          |
| dnd_comp_items_panel_z_index    | 'auto'            |
| dnd_comp_items_panel_color      | 'black'           |
| dnd_comp_items_panel_background | 'white'           |
| dnd_comp_items_panel_border     | '1px solid black' |
| dnd_comp_item_font_size         | '.8rem'           |
| dnd_comp_item_hover_box_shadow  | '0 0 10px gray'   |
| dnd_comp_item_hover_color       | 'violet'          |

## Events

**DndComp** emits one single event that notifies the parent component when a drag-n-drop has been cancelled.  The event responds with the source item of the drag-n-drop.  The parent component can listen to the this event and provide a callback for further processing.



| event    | description       | parameters | emits              |
| -------- | ----------------- | ---------- | ------------------ |
| @dragend | end of drag event | $event     | 'dndCompCancelled' |

