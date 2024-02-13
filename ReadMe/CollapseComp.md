# CollapseComp

**CollapseComp** is a simple Vue.js web component (>= 3.2) that can open/close content placed within its tags along with an open/close user interface icon and a header at the top of the content.  See the *src/CollapseComp* folder for the Vue source (CollapseComp.vue).

## Props

## 

| prop         | description                                                  | accepted value  | default |
| ------------ | ------------------------------------------------------------ | --------------- | ------- |
| heading      | a heading to be displayed above the component's content      | string          | null    |
| showContent  | controls opening(true) and closing(false) content explicitly from the parent code | boolean         | null    |
| `blurPanel`  | if false, will not roll up item panel when component is out of focus | boolean         | true    |
| cssVariables | defines some css variables for easy styling                  | see table below | null    |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **CollapseComp**. The following table shows the css variable names along with their default values:



| variable name                     | default value   |
| --------------------------------- | --------------- |
| collapse_comp_font_family         | 'Verdana,serif' |
| collapse_comp_heading_color       | 'black'         |
| collapse_comp_heading_font_size   | '1rem'          |
| collapse_comp_heading_font_weight | 'bold'          |
| collapse_comp_down_icon           | '\21D3'         |
| collapse_comp_icon_color          | 'black'         |
| collapse_comp_content_position    | 'static'        |
| collapse_comp_content_z_index     | 'auto'          |

## Events

**CollapseComp** has no events between the parent and child components