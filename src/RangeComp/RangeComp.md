# RangeComp

**RangeComp** is Vue.js (>= 3.2) web component that wraps around an html input of type 'range' with label and styling options.  See the *src/RangeComp* folder for the Vue source (RangeComp.vue).

## Props

| prop           | description                                                  | accepted value  | default |
| -------------- | ------------------------------------------------------------ | --------------- | ------- |
| heading        | a heading for the component that can be positioned above, below, or to the left of the input box | string          | null    |
| rangeValue     | sets the value of **RangeComp**                              | number          | 0       |
| headerPosition | determines the position of the above `heading`as 'above', 'below', or 'left' | string          | 'left'  |
| cssVariables   | defines some css variables for easy styling                  | see table below | null    |

