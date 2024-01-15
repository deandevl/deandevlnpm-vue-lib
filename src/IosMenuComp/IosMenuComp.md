# IosMenuComp

**IosMenuComp** is a Vue.js (version >= 3.2) web component providing a left sided based accordion navigation menu to component based html pages.  See the *src/IosMenuComp* folder for the Vue source (IosMenuComp.vue).

## Setup

To use the component the user must:

1. Create routes.
2. Create a Vue router for the routes.
3. Register the router with the application's main application.

Routes are created as an array of javascript objects that defines the linkage/paths from the menu items to Vue.js web component based pages . The objects take the following form where the example is for an `/employees` route used in the demo (see *src/IosMenuComp* folder for the demo source):

| item      | description                                                  | example                |
| --------- | ------------------------------------------------------------ | ---------------------- |
| path      | a string that associates a path for the route                | '/employees'           |
| component | the Vue.js component that will appear when this route is selected. | EmployeesComp          |
| name      | the label that appears in the menu for this route            | 'Employees'            |
| props     | an object that defines any values that you want to send along to the 'component' | {numberOfEmployees: 5} |
| icon      | the icon that will appear along side the name on the menu    | '&#x2192'              |
| heading   | an optional heading string to appear above the label in the menu | null                   |

At a minimum `path`, `component`, and `name` should be defined. See `routes.js` in the *src/IosMenuComp* folder for the complete set of routes used in the demo.

After the array of routes are created, you can create a Vue.js router by using the function `get_router(routes).js` located in the *src/IosMenuComp* folder. This function is called in the `main.js` so that the created router can be registered with the main application.  See what the script looks like for `main.js` as part of the demo (also located in the *src/IosMenuComp* folder.

In a vite project, substitute the `main.js` in *src/IosMenuComp* for vite's default one.

## Props

| prop         | description                                       | accepted value  | default |
| ------------ | ------------------------------------------------- | --------------- | ------- |
| routes       | an array of javascript objects as described above | array           | [ ]     |
| cssVariables | defines some css variables for easy styling       | see table below | null    |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **IosMenuComp**. The following table shows the css variable names along with their default values:



| variable name                          | default value     |
| -------------------------------------- | ----------------- |
| ios_menu_comp_font_family              | 'Verdana,serif'   |
| ios_menu_comp_trigger_icon             | '\2630'           |
| ios_menu_comp_trigger_background_color | '#dfe5eb'         |
| ios_menu_comp_trigger_color            | 'black'           |
| ios_menu_comp_background               | 'transparent'     |
| ios_menu_comp_border                   | '1px solid black' |
| ios_menu_comp_menuitem_color           | 'black'           |
| ios_menu_comp_menuitem_font_size       | '.7rem'           |
| ios_menu_comp_menuitem_icon_color      | 'black'           |
| ios_menu_comp_menuitem_bar_color       | 'black'           |

## Events

There are no events defined for **IosMenuComp** .
