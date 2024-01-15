import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

let app = createApp(App);

import {get_router} from "./IosMenuComp/get_router.js";
import {routes} from "./IosMenuComp/routes.js";

let router = get_router(routes);
app.use(router) // register the Vue.js router with the created App

app.mount('#app')
