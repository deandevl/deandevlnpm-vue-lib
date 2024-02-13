# ProgressComp

**ProgressComp** is a simple progress bar web component (Vue.js >= 3.2) with styling and labelling options.  See the *src/ProgressComp* folder for the Vue source (ProgressComp.vue).

## Props

| prop         | description                                                  | accepted value  | default |
| ------------ | ------------------------------------------------------------ | --------------- | ------- |
| heading      | a heading for the component that can be positioned above, below, or to the left of the input box | string          | null    |
| percent      | a number that sets the current percent on the progress bar   | number          | null    |
| layout       | determines the position of the above `heading`as 'top', 'bottom', or 'left' | string          | 'left'  |
| cssVariables | defines some css variables for easy styling                  | see table below | null    |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **ProgressComp**. The following table shows the css variable names along with their default values:

| variable name                     | default value                                                |
| --------------------------------- | ------------------------------------------------------------ |
| progress_comp_font_family         | 'Verdana,serif'                                              |
| progress_comp_font_size           | '1rem'                                                       |
| progress_comp_heading_color       | 'black'                                                      |
| progress_comp_heading_font_weight | 'bold'                                                       |
| progress_comp_track_height        | '.8rem'                                                      |
| progress_comp_track_width         | '25rem'                                                      |
| progress_comp_track_background    | '#555'                                                       |
| progress_comp_track_border        | '1px solid black'                                            |
| progress_comp_bar_background      | 'linear-gradient(to bottom, #b4e391 0%,#61c419 50%,#b4e391 100%)' |

## Events

There are no events.