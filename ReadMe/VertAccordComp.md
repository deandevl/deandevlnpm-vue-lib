# VertAccordComp

**VertAccordComp** is a Vue.js web component (version >= 3.2) that provides an accordion, expanding/contracting like display of list content.   See the *src/VertAccordComp* folder for the Vue source (VertAccordComp.vue).

## Props

| prop          | description                                                  | accepted value  | default |
| ------------- | ------------------------------------------------------------ | --------------- | ------- |
| slotNames     | an array of strings that references the slot names in the parent template | string array    | null    |
| title         | a title to be displayed above the list                       | string          | null    |
| contentHeight | defines the content height for the expanded item's content in units of pixels | number          | 200     |
| cssVariables  | defines some css variables for easy styling                  | see table below | null    |

## Style

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **VertAccordComp**. The following table shows the css variable names along with their default values:

| variable name                               | default value                                          |
| ------------------------------------------- | ------------------------------------------------------ |
| vertaccord_comp_font_family                 | 'Verdana,serif'                                        |
| vertaccord_comp_title_color                 | 'black'                                                |
| vertaccord_comp_title_font_size             | '18px'                                                 |
| vertaccord_comp_title_font_weight           | 'bold'                                                 |
| vertaccord_comp_item_color                  | 'black'                                                |
| vertaccord_comp_item_background             | 'white'                                                |
| vertaccord_comp_item_width                  | '200px'                                                |
| vertaccord_comp_item_title_hover_color      | 'yellow'                                               |
| vertaccord_comp_item_title_hover_background | 'linear-gradient(to bottom, #454545 0%, #cccccc 100%)' |

## Events

**VertAccordComp** has no events.