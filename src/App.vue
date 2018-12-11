<template>
  <div style="background-color: rgba(25,25,25,0); min-width:250px;">
    <Headerw
      :menu="menu_page"
      :rutas="rutas"
      @epath="nombreRuta($event);"
    ></Headerw>
    <!-- Solo se renderiza el archivo que tiene dicho nombre -->
    <router-view name="carousel"></router-view>
    <!-- Efecto que se agrega en cada ruta -->
    <v-parallax
      src="https://www.blockchaintechnology-news.com/wp-content/uploads/2018/11/iStock-944923496.jpg"
      height="350"
    >
      <v-layout align-center justify-center>
        <div>
          <h1 v-if="rutaActual != '/'">{{ rutaActual }}</h1>
        </div>
      </v-layout>
    </v-parallax>
    <!-- Se encuentra la sección donde estarán las demás páginas -->
    <v-app style="background-color: rgba(25,25,25,0.1); margin:0px;">
      <router-view> </router-view>
    </v-app>
    <FooterW></FooterW>
  </div>
</template>

<script>
import Headerw from "./componentes/header.vue";
import FooterW from "./componentes/footer.vue";
//import Carusel from "./componentes/Inicio/carusel.vue";
//import Hosting from "./componentes/hosting/hostings.vue";
//import datePicker from "./componentes/date-picker.vue";
//import subtab from "./componentes/subtab.vue";
export default {
  components: {
    Headerw,
    FooterW
  },
  data() {
    return {
      rutas: ["/", "clientes", "hosting", "dominio", "nosotros", "contacto"],
      menu_page: [
        "PRINCIPAL",
        "CLIENTES",
        "HOSTING",
        "DOMINIO",
        "NOSOTROS",
        "CONTACTO"
      ],
      rutaActual: ""
    };
  },
  created() {
    this.getPath();
  },
  methods: {
    getPath() {
      this.rutaActual = this.$route.name.toUpperCase();
    },
    nombreRuta(ruta) {
      this.rutaActual = ruta.toUpperCase();
    }
  }
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
body {
  color: #fff;
  background: #949c4e;
  background: linear-gradient(
    135deg,
    rgba(0, 25, 100, 1) 25%,
    rgba(75, 150, 225, 1) 25%,
    rgba(75, 150, 225, 1) 60%,
    rgba(0, 25, 100, 1) 60%
  );
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/
.page {
  position: fixed;
  width: inherit;
}
</style>
