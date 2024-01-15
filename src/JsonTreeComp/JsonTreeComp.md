# JsonTreeComp

**JsonTreeComp** is a Vue.js (>= 3.2) web component that displays a JSON formatted object as a hierarchical tree.  See the *src/JsonTreeComp* folder for the Vue source (JsonTreeComp.vue).

## Props

| prop         | description                                              | accepted value    | default |
| ------------ | -------------------------------------------------------- | ----------------- | ------- |
| jsonObj      | an javascript object or array of objects to be displayed | javascript object | null    |
| title        | a title to be placed above the tree                      | string            | null    |
| indent       | the number of spaces to indent sub nodes                 | number            | 16      |
| cssVariables | defines some css variables for easy styling              | see table below   | null    |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **JsonTreeComp**. The following table shows the css variable names along with their default values:



| variable name             | default value   |
| ------------------------- | --------------- |
| jsontree_comp_height      | '600px'         |
| jsontree_comp_width       | '400px'         |
| jsontree_comp_font_family | 'Verdana,serif' |
| jsontree_comp_font_size   | '1rem'          |
| jsontree_comp_color       | 'black'         |
| jsontree_comp_background  | 'transparent'   |
| jsontree_comp_down_icon   | '\21D3'         |
| jsontree_comp_title_color | 'black'         |

## Events

There are no events.