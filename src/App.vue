<template>
  <div style="background-color: rgba(25,25,25,0); min-width:250px;">
    <Headerw></Headerw>
    <router-view name="carousel"></router-view>
    <v-parallax
      src="https://www.blockchaintechnology-news.com/wp-content/uploads/2018/11/iStock-944923496.jpg"
      height="350"
    >
    </v-parallax>
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
  }
};
</script>

<style>
body {
  color: #fff;
  background: #949c4e;
  background: linear-gradient(
    115deg,
    rgba(15, 150, 200, 1) 10%,
    rgba(15, 1, 175, 1) 90%
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

h1,
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
}
</style>
