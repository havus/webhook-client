import { createApp } from "vue";
import { createPinia } from "pinia";
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import router from "./router";
import App from "./App.vue";

const mswEnabled =
  import.meta.env.MODE !== "production" &&
  import.meta.env.VITE_MSW_ENABLED === "true";

async function main() {
  if (mswEnabled) {
    const { worker } = await import("./mocks");
    worker.start();
  }

  const pinia = createPinia();
  const app = createApp(App);

  app.use(pinia);
  app.use(router);
  app.mount("#app");
}

main();
