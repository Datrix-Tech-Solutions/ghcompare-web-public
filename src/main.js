import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";

//global components
import Information from "./components/Information.vue";

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(pinia)
  .component("Information", Information)
  .mount("#app");
