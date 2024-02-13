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

Demonstrations for each of the components that make up **@deandevlnpm/vue-lib** are available from the distributed `demos` folder available at  the [git repository][https://github.com/deandevl/deandevlnpm-vue-lib]. The steps are based on [npm][https://www.npmjs.com/] and the package wrapper [vite][https://vitejs.dev/] development environment. Also available from the repository is a more detailed description of each component in the `ReadMe` folder.

1. With npm installed on your computer, download the repository and change directories to  `demos` and from a Command Prompt, Enter the following: 

   ```
   npm install
   ```

2. Start the [vite][https://vitejs.dev/]  server. Run the following npm script:

   ```
   npm run dev
   ```

3.  Bring up the main html page of the demos. From any browser enter the following address:

   ```
   localhost:5173
   ```

4. Select any of the links on the main page to demonstrate a specific component.  Many of the demos emit event data so you might want to run the demos in the browser's development mode to view the console output from the events.

   

   

