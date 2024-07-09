import { createApp } from "vue";
import "./style.css";
import routes from "./routes";
import App from "./App.vue";
import { createPinia } from "pinia";

import { makeServer } from "./mock/server";
makeServer();

const pinia = createPinia();
const app = createApp(App);

app.use(routes);
app.use(pinia);
app.mount("#app");
