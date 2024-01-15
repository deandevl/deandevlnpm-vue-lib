# TabComp

**TabComp** is a Vue.js (>= 3.2) web component that provides page tabs navigation with content routing and styling options.  See the *src/TabComp* folder for the Vue source (TabComp.vue).

## Setup

To use the component the user must:

1. Create routes.
2. Create a Vue router for the routes.
3. Register the router with the application's main application.

Routes are created as an array of javascript objects that defines the linkage/paths from the menu items to Vue.js web component based pages . The objects take the following form as outlined from Vue.js' discussion on [nested routes][https://router.vuejs.org/guide/essentials/nested-routes.html]:

| item      | description                                                  | example                                                      |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| path      | a string that associates a path for the main route           | '/plants'                                                    |
| name      | the label that appears in the menu for this route            | 'Plants'                                                     |
| component | the Vue.js component that will appear when this route is selected. | PlantsComp                                                   |
| children  | array of javascript objects defining the sub routes          | [   {path: 'strawberry',component:StrawberryComp,name:'Strawberries'},   {path: 'raspberry',component:RaspberryComp,name:'Raspberries'},   {path: 'blueberry',component:BlueberryComp,name:'Blueberries'} |

After the array of routes are created, you can create a Vue.js router by using the function `get_router(routes).js` located in the *src/TabComp* folder. This function is called in the `main.js` so that the created router can be registered with the main application.  Here's what the script looks like for `main.js` as part of the demo (also located in the *src/TabComp* folder:

```
//main.js

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import {get_router} from "./TabComp/get_router.js";
import {routes} from "./TabComp/routes.js";

let router = get_router(routes);

let app = createApp(App);
app.use(router)  // register the Vue.js router with the created App
app.mount('#app')
```

  In a vite project, substitute this `main.js` for the default one.

## Props

| prop         | description                                       | accepted value  | default |
| ------------ | ------------------------------------------------- | --------------- | ------- |
| routes       | an array of javascript objects as described above | array           | [ ]     |
| cssVariables | defines some css variables for easy styling       | see table below | null    |

## Styling

The `cssVariables` prop is a javascript object that contains any combination of css variable names as keys and associated values for quick, limited styling of **IosMenuComp**. The following table shows the css variable names along with their default values:



| variable name                      | default value   |
| ---------------------------------- | --------------- |
| tab_comp_font_family               | 'Verdana,serif' |
| tab_comp_background_color          | '#2E1076'       |
| tab_comp_main_nav_background_color | '#7B53DC'       |
| tab_comp_tab_color                 | 'white'         |
| tab_comp_tab_font_size             | '1rem'          |
| tab_comp_tab_hover_color           | 'violet'        |

## Events

There are no published events for **TabComp** .



[nested routes]: https://router.vuejs.org/guide/essentials/nested-routes.html

