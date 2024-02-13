# NavImageComp

**NavImageComp** is a Vue.js (>=3.2) that provides navigation and display of a list of submitted images.  Thumbnails of the images are displayed across the top with a horizontal scroll bar appearing below if necessary for navigation.  By simply hovering over a thumbnail, a large preview rendition of the image is displayed.  Images can be quickly reviewed with the combination of horizontal scrolling and hovering over the thumbnails.  See the *src/NavImageComp* folder for the Vue source (NavImageComp.vue).

## Props

| prop           | description                                                  | accepted value  | default |
| -------------- | ------------------------------------------------------------ | --------------- | ------- |
| heading        | a heading to be displayed above the thumbnail horizontal image list | string          | null    |
| sources        | an array of file paths to set the component's image sources  | text array      | null    |
| containerWidth | a number that defines the overall width dimension of the component in pixels | number          | 900     |
| cssVariables   | defines some css variables for easy styling                  | see table below | null    |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **NavImageComp**. The following table shows the css variable names along with their default values:

| variable name                           | default value    |
| --------------------------------------- | ---------------- |
| navimage_comp_font_family               | 'Verdana,serif'  |
| navimage_comp_background_color          | '#222'           |
| navimage_comp_heading_color             | 'white'          |
| navimage_comp_heading_font_size         | '1.5rem'         |
| navimage_comp_heading_font_weight       | 'bold'           |
| navimage_comp_thumbnail_selected_border | '4px solid gold' |

## Events

| event      | description                   | parameters                     | emits                     |
| ---------- | ----------------------------- | ------------------------------ | ------------------------- |
| @mouseover | triggered on image mouse over | text: selected image file path | navImageCompCurrentSource |