import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

// import components
import Home from "./components/Home.vue";
import Aboutus from "./components/Aboutus.vue";
import Expertise from "./components/Expertise.vue";
import Contact from "./components/Contact.vue";
import Appointment from "./components/Appointment.vue";
import Learnmore from "./components/inc/Learnmore.vue";
import Notfound from "./components/inc/Notfound.vue";

// font awesome
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.use(VueRouter);
Vue.config.productionTip = false;

// create routes
const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: Aboutus },
    { path: "/expertise", component: Expertise },
    { path: "/contact", component: Contact },
    { path: "/appointment", component: Appointment },
    { path: "/learnmore", component: Learnmore },
    { path: "*", component: Notfound },
  ],
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
