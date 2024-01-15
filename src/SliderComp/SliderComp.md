# SliderComp

**SliderComp** is a Vue.js(version >= 3.2) component that provides a simple image slider. See the *src/SliderComp* folder for the Vue source (SliderComp.vue).

## Props

| prop         | description                                                  | accepted value   | default |
| ------------ | ------------------------------------------------------------ | ---------------- | ------- |
| images       | an array of javascript objects describing image sources for the slider.  See below for the format. | array of objects | null    |
| delay        | the delay in microseconds when in auto rotation of the images. | number           | 4000    |
| startNumber  | the image index number to start the auto rotation            | number           | null    |
| cssVariables | defines some css variables for easy styling                  | see table below  | null    |

The format for each javascript object in the array submitted to `images` is the following:

| name    | description                 |
| ------- | --------------------------- |
| thumb   | the url for the thumb image |
| src     | the url for the main image  |
| caption | the caption for the image   |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **SliderComp**. The following table shows the css variable names along with their default values:

| variable name                          | default value   |
| -------------------------------------- | --------------- |
| --slider_comp_font_family              | 'Verdana,serif' |
| --slider_comp_width                    | '50rem'         |
| --slider_comp_height                   | '44rem'         |
| --slider_comp_caption_font_size        | '1rem'          |
| --slider_comp_caption_color            | 'white'         |
| --slider_comp_caption_background_color | 'black'         |

## Events

There are no events.