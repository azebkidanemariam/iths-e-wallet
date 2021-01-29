import Vue from "vue";
import router from "../src/router";

import App from "../src/App.vue";

Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
