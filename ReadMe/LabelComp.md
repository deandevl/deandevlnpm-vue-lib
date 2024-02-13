## LabelComp

**labelComp** is a simple web component (Vue.js >= 3.2) that provides a label (either left or bottom) along with a non-editable content line. See the *src/LabelComp* folder for the Vue source (LabelComp.vue).

## Props

| prop           | description                                                  | accepted value     | default |
| -------------- | ------------------------------------------------------------ | ------------------ | ------- |
| heading        | a heading for the component that can be positioned below, or to the left of the content box | string             | null    |
| value          | property for setting the current value for the label         | string or number   | null    |
| headerPosition | determines the position of the above `heading`               | 'below', or 'left' | 'left'  |
| cssVariables   | defines some css variables for easy styling                  | see table below    | null    |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **labelComp**. The following list is the css variable names along with their default values:



| variable name                  | default value  |
| ------------------------------ | -------------- |
| label_comp_font_family         | Verdana, serif |
| label_comp_heading_color       | 'black'        |
| label_comp_heading_font_size   | '1rem'         |
| label_comp_heading_font_weight | 'bold'         |
| label_comp_value_width         | '8rem'         |
| label_comp_value_font_size     | '1rem'         |
| label_comp_value_font_weight   | 'normal'       |
| label_comp_value_color         | 'black'        |
| label_comp_value_background    | 'transparent'  |
| label_comp_scrollbar_color     | '#D62929'      |

## Events

**labelComp** has one event that notifies the parent component of the current content value.

| event  | description                     | parameters | emits                     |
| ------ | ------------------------------- | ---------- | ------------------------- |
| change | event triggered on label change | $change    | @label-comp-value-changed |

