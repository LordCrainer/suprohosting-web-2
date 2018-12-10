import Vue from "vue";
import Router from "vue-router";

/*import App from "./App.vue";

import Header from "./componentes/header.vue";
import Footer from "./componentes/footer.vue";*/
import Inicio from "./componentes/Inicio/inicio.vue";
import Carousel from "./componentes/Inicio/carusel.vue";
import Hosting from "./componentes/Hosting/hostings.vue";
import Contact from "./componentes/Contact/contact.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      name: "home",
      path: "/",
      components: {
        carousel: Carousel
      }
    },
    {
      name: "hosting",
      path: "/hosting",
      components: { default: Hosting }
    },
    {
      name: "Contacto",
      path: "/contacto",
      components: {
        default: Contact
      }
    }
  ]
});
