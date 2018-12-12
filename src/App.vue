<template>
  <div style="background-color: rgba(25,25,25,0); min-width:250px;">
    <!-- HEADER -->
    <!--
      Tiene 2 parámetros y 1 función que recoge el dato que emitió un hijo
    -->
    <Headerw :menu="menu_page" :rutas="rutas"></Headerw>
    <!-- Carousel -->
    <!-- Solo se renderiza el archivo que tiene dicho nombre -->
    <router-view name="carousel"></router-view>
    <!-- Solo se renderiza el archivo que tiene dicho nombre -->
    <!-- Efecto que se agrega en cada ruta -->
    <Parallax :item="rutaActual"></Parallax>
    <!-- Se encuentra la sección donde estarán las demás páginas -->
    <v-app style="background-color: transparent; margin:0px;">
      <router-view @epath="nombreRuta($event);"></router-view>
    </v-app>
    <FooterW></FooterW>
  </div>
</template>

<script>
import Headerw from "./componentes/header.vue";
import FooterW from "./componentes/footer.vue";
import Parallax from "./componentes/UI/parallax.vue";
//import Carusel from "./componentes/Inicio/carusel.vue";
//import Hosting from "./componentes/hosting/hostings.vue";
//import datePicker from "./componentes/date-picker.vue";
//import subtab from "./componentes/subtab.vue";
export default {
  components: {
    Headerw,
    FooterW,
    Parallax
  },
  data() {
    return {
      rutas: ["/", "/cursos", "/blog", "/nosotros", "/contacto"],
      menu_page: ["PRINCIPAL", "CURSOS", "BLOG", "NOSOTROS", "CONTACTO"],
      rutaActual: "",
      rutaInicio: [
        {
          ruta: "/",
          nombre: "Principal"
        },
        {
          ruta: "/clientes",
          nombre: "CLIENTES"
        },
        {
          ruta: "/clientes",
          nombre: "HOSTING",
          children: [
            {
              ruta: "/hosting_starter",
              nombre: "HOSTING STARTER"
            },
            {
              ruta: "/hosting_enterprise",
              nombre: "HOSTING ENTERPRISE"
            }
          ]
        },
        {
          ruta: "/dominio",
          nombre: "DOMINIO"
        },
        {
          ruta: "/nosotros",
          nombre: "NOSOTROS"
        },
        {
          ruta: "/contacto",
          nombre: "CONTACTO"
        }
      ]
    };
  },
  created() {
    this.getPath();
  },
  watch: {
    $route() {
      this.rutaActual = this.$route.name;
      //.path.toUpperCase().split("/")[1]
    }
  },
  methods: {
    getPath() {
      this.rutaActual = this.$route.name;
    },
    nombreRuta(ruta) {
      this.rutaActual = ruta;
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
