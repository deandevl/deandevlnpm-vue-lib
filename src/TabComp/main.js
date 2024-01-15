import { createApp } from 'vue';
import App from './App.vue';
import '../style.css';

let app = createApp(App);

import {get_router} from "./get_router.js";
import {routes} from "./routes.js";

let router = get_router(routes);
app.use(router) // register the Vue.js router with the created App

app.mount('#app')
