<template>
  <div style="background-color: white;">
    <Headerw></Headerw>
    <router-view name="carousel"></router-view>
    <v-parallax
      src="https://www.blockchaintechnology-news.com/wp-content/uploads/2018/11/iStock-944923496.jpg"
      height="350"
    >
    </v-parallax>
    <v-app> <router-view> </router-view> </v-app>
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
