## InputComp

**InputComp** is a Vue.js (version >= 3.2) component similar to an html input element with alternate layouts for its labeling and a number of css variables for quick styling.  See the *src/InputComp* folder for the Vue source (InputComp.vue).

## Props

| prop           | description                                                  | accepted value                                               | default         |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | --------------- |
| heading        | a heading for the component that can be positioned above, below, or to the left of the input box | string                                                       | null            |
| inputType      | a string that sets the type of input                         | `text`,  `number`,  `date`, `checkbox`, `time`, `month`,`color`,`email` | text            |
| inputValue     | set the component's initial value  if `input_type` is not 'checkbox` | string                                                       | null            |
| inputChecked   | set the component's initial value  if `input_type` is not `checkbox` | string                                                       | null            |
| placeholder    | a placeholder for the input box                              | string                                                       | 'Enter a value' |
| inputsize      | the maximum number of characters for input. If `input_type` is `number` then this property value sets the width of the component in pixels | string                                                       | '40'            |
| headerPosition | determines the position of the above `heading`               | 'top', 'bottom', or 'left'                                   | 'left'          |
| singleBorder   | determines either full rectangular border or single bottom border for the input box | boolean                                                      | false           |
| cssVariables   | defines some css variables for easy styling                  | see table below                                              | null            |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **InputComp**. The following table shows the css variable names along with their default values:

| variable name                      | default value   |
| ---------------------------------- | --------------- |
| input_comp_font_family             | 'Verdana,serif' |
| input_comp_heading_color           | 'black'         |
| input_comp_heading_font_size       | '1rem'          |
| input_comp_heading_font_weight     | 'bold'          |
| input_comp_input_font_size         | '.8rem'         |
| input_comp_input_font_weight       | 'normal'        |
| input_comp_input_color             | 'black'         |
| input_comp_input_background        | 'transparent'   |
| input_comp_input_border_color      | 'black'         |
| input_comp_input_placeholder_color | 'black'         |
| input_comp_input_focus_outline     | 'yellow'        |
| input_comp_input_focus_background  | 'white'         |

## Events

**InputComp** emits one event(named ) that notifies the parent component of the current input value.

| event  | description                     | parameters | emits                     |
| ------ | ------------------------------- | ---------- | ------------------------- |
| change | event triggered on input change | $change    | @input-comp-value-changed |

```
'inputCompValueChanged' -- returns the current value for a specific input component
```
