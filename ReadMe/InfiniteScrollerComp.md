# InfiniteScrollerComp

**InfiniteScrollerComp** is a Vue.js (>=3.2) web component that provides a content area and an associated vertical scroll bar.  The developer can specify an array of content and receive an event notice when the vertical scroll moves to the bottom of the array content.  Responding to the event by pushing an additional item to the array causes reactivity on the display and a repetitive cycle of scrolling, pushing, and display update. See the *src/InfiniteScrollerComp* folder for the Vue source (InfiniteScrollerComp.vue).

## Props

| prop         | description                                 | accepted value  | default |
| ------------ | ------------------------------------------- | --------------- | ------- |
| cssVariables | defines some css variables for easy styling | see table below | null    |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **InfiniteScrollerComp**. The following table shows the css variable names along with their default values:

| variable name   | default value |
| --------------- | ------------- |
| scroller_height | '30rem'       |

## Events

**InfiniteScrollerComp** has one event that notifies the parent component that the bottom of the vertical scroll is reached.

| event   | description              | parameters             | emits         |
| ------- | ------------------------ | ---------------------- | ------------- |
| @scroll | returns status of scroll | boolean: true or false | reachedBottom |