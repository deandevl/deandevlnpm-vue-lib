# @deandevlnpm/vue-lib

**@deandevlnpm/vue-lib** is a Javascript library of Vue3 single-page components with buttons, selections, and tables -- there is easy access to styling and action events without the css programming.  Listed below are listed the current 23 components and their actions.  Included in the source is a `App.vue` file that demonstrates a simple application of the component.  Steps in setting up a component's demonstration with the [npm][https://www.npmjs.com/] and [vite][https://vitejs.dev/] development environment are described at the end of this README.

## Actions

| component            | action                                                       |
| -------------------- | ------------------------------------------------------------ |
| ActiveListComp       | input box laid on top of a list display that grows with each new input entry |
| ButtonComp           | your typical button with 6 styling variables and a click event |
| CheckerComp          | provides multiple checkboxes of items with a check image and modes of checking |
| CollapseComp         | open/close content placed within its tags along with an open/close user interface icon and a header at the top |
| DndComp              | provides a titled, collapsible list of items that can be dragged to another target |
| FadeComp             | any html content that is surrounded by the **FadeComp** tags will be subject to fading either vertically or horizontally |
| FileReadComp         | like a button that brings up a file dialog for selecting a file for reading/writing |
| InfiniteScrollerComp | provides a content area and an associated vertical scroll bar that notifies for requesting possible additional content |
| InputComp            | similar to an html input element with alternate layouts for its labeling and a number of css variables for quick styling |
| IosMenuComp          | provides a left sided based accordion navigation menu to component based html pages |
| JsonTreeComp         | displays a JSON formatted object as a connected hierarchical tree |
| labelComp            | an html like label (either left or bottom) along with a non-editable content line |
| MultiTableComp       | displays multiple sub tables of data from a single parent table with connected lines |
| NavImageComp         | provides navigation and display of a list of submitted images along with thumbnails of the images for navigation |
| ProgressComp         | a simple html like progress bar with styling and labelling options |
| RangeComp            | wraps around an html input of type 'range' with label and styling options |
| SelectComp           | similar to an HTML select tag where one can set the select value along with a collapsing panel of options from which to select |
| SelectEditComp       | similar to an html select element where an item is selected from a list.  In addition the user can interactively add/delete/edit items from the selection list |
| SliderComp           | provides a simple image slider                               |
| TabComp              | provides page tabs navigation with content routing and styling options |
| TableComp            | a table of data with many features including modifying an individual cell's css styling class, column sorting, programmable column widths/alignments |
| VertAccordComp       | an accordion, expanding/contracting like display of list content |
| WorkSheetComp        | displays a large table of data where row/column headings freeze as you scroll horizontally/vertically along with column sorting, styling variables, and sending a cell click event |

## Demonstrations

Demonstrations for each of the components that make up **@deandevlnpm/vue-lib** are available from the distributed `src` folder.  We'll take an example using  **WorkSheetComp**. The steps are based on the  [npm][https://www.npmjs.com/] and [vite][https://vitejs.dev/] development environment.

1. With npm installed on your computer, from a Command Prompt, create the scaffolding for a vite project in the folder *worksheetcomp_demo*. When prompted, select 'Vue' for the template and 'Javascript'.  Enter the following: 

   ```
   npm init vite@latest worksheetcomp_demo
   npm install
   ```

2. Install the  **@deandevlnpm/vue-lib**  library along with support for [less][https://lesscss.org/ ] and [vue-router][https://router.vuejs.org/]. Enter the following:

   ```
   npm install @deandevlnpm/vue-lib
   npm install less
   npm install vue-router
   ```

3. Copy the `/src/WorkSheetComp/App.vue` and `/dist/style.css` files in the **@deandevlnpm/vue-lib** distribution and paste/replace the `App.vue` and `style.css` files in the `src` folder of the project.  You can delete the `assets` and `components` folders in `src` and the `public` folder at the root of the project.

4. Start the vite development server and browse to *localhost:5173*:

   ```
   npm run dev
   ```

5. The worksheet should appear on the browser with cells filled with a set of random numbers/strings. By repeating step 3 for just the `App.vue` transfer you can view the demos for the other components.

