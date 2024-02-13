# CheckerComp

**CheckerComp** is a web component (Vue.js >= 3.2) that provides multiple checkboxes of items with a check image.  The programmer can control the mode of the checking where one checkbox is checked  and all other items are unchecked; or multiple mode where any number of items can be checked.  

## Props

## 

| prop            | description                                                  | accepted value   | default |
| --------------- | ------------------------------------------------------------ | ---------------- | ------- |
| heading         | a heading to be displayed above the checkbox list            | string           | null    |
| items           | the items that are to be checked or unchecked (see below for format) | array of objects | null    |
| singleCheck     | is selection mode one check at a time                        | boolean          | false   |
| dropPanelHeight | the height of drop down list panel                           | string           | '100px' |
| blurPanel       | if false, will not roll up item panel when component is out of focus | boolean          | true    |
| cssVariables    | defines some css variables for easy styling                  | see table below  | null    |

The `items`  property is an array of objects where each object has a `text` and `checked` property key as in the following example:

```
items_dow: [
        {text: 'Sunday',checked: false},
        {text: 'Monday',checked: false},
        {text: 'Tuesday',checked: false},
        {text: 'Wednesday',checked: true},
        {text: 'Thursday',checked: false},
        {text: 'Friday',checked: false},
        {text: 'Saturday',checked: false}
      ]
```

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **CheckerComp**. The following table shows the css variable names along with their default values:



| variable name                       | default value     |
| ----------------------------------- | ----------------- |
| checker_comp_font_family            | 'Verdana,serif'   |
| checker_comp_heading_color          | 'black'           |
| checker_comp_heading_font_size      | '1rem'            |
| checker_comp_heading_font_weight    | 'bold'            |
| checker_comp_down_icon              | '\21D3'           |
| checker_comp_icon_color             | 'black'           |
| checker_comp_items_panel_position   | 'static'          |
| checker_comp_items_panel_width      | '8rem'            |
| checker_comp_items_panel_z_index    | 'auto'            |
| checker_comp_items_panel_color      | 'black'           |
| checker_comp_items_panel_background | 'white'           |
| checker_comp_items_panel_border     | '1px solid black' |
| checker_comp_checkbox_border        | '1px solid black' |
| checker_comp_notchecked_background  | 'white'           |
| checker_comp_checked_background     | 'yellowgreen'     |
| checker_comp_item_font_size         | '.8rem'           |

## Events

**CheckerComp** has a single event that emits/notifies the parent component of the current checked item's text in the form of an array:



| event | description                | parameters    | emits                      |
| ----- | -------------------------- | ------------- | -------------------------- |
| click | triggered by an item check | array of text | @checker-comp-checked-text |