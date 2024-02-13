# ButtonComp

**ButtonComp** is a Vue.js(version >= 3.2) component that provides a method for CSS styling and responding to a click event.  See the *src/ButtonComp* folder for the Vue source (ButtonComp.vue).

## Props

| prop         | description                                 | accepted value  | default |
| ------------ | ------------------------------------------- | --------------- | ------- |
| cssVariables | defines some css variables for easy styling | see table below | null    |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **ButtonComp**. The following table shows the css variable names along with their default values:

| variable name                | default value                                                |
| ---------------------------- | ------------------------------------------------------------ |
| button_comp_font_family      | 'Verdana,serif'                                              |
| button_comp_font_size        | '1rem'                                                       |
| button_comp_background       | 'linear-gradient(to bottom, #969696 0, #969696 13%, #5f5f5f 33%, #1e1e1e   64%, #1e1e1e 100%)' |
| button_comp_color            | 'rgba(255, 255, 255, 0.901961)'                              |
| button_comp_box_shadow       | '4px 4px 6px 1px rgba(0, 0, 0, 0.4), 2px 2px 2px 0 rgba(0, 0, 0, 0.2)' |
| button_comp_hover_background | 'linear-gradient(to bottom, #969696 0, #1e1e1e 100%)'        |

## Events

**ButtonComp** emits one event (named `@buttonCompClicked`) which when clicked sends along a native MouseEvent event object .

| event | description               | parameters | emits                |
| ----- | ------------------------- | ---------- | -------------------- |
| click | triggered on button click | $event     | @button-comp-clicked |
