import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
process.env.NODE_ENV === 'development' && require("./mock/index.js");

import "./styles/index.scss"; //全局scss

const app = createApp(App);
app.use(router).use(store).mount("#app");