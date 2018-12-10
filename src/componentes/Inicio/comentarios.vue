<template>
  <v-carousel hide-delimiters height="200" class="comentario">
    <v-carousel-item v-for="(data, i) in datos" :key="i">
      <v-layout align-center column justify-center fill-height>
        <h1 class="display-2 font-weight-bold mb-3 white--text">
          {{ data.titulo }}
        </h1>
        <h4 class="subheading grey--text">{{ data.text }}</h4>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      datos: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          titulo: "Servicio para tí",
          text: "Tu servicio de hosting a las ordenes"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          titulo: "Multiplanes",
          text: "Disponemos de diferentes planes para tí"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          titulo: "Servicio para tí",
          text: "Tu servicio de hosting a las ordenes"
        }
      ]
    };
  }
};
</script>
<style scoped>
.comentario {
  color: #fff;
  background: #949c4e;
  background: linear-gradient(
    134deg,
    rgba(75, 150, 225, 1) 20%,
    rgba(0, 25, 100, 1) 20%,
    rgba(0, 25, 100, 1) 85%,
    rgba(75, 150, 225, 1) 85%
  );
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
