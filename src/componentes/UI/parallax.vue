<template>
  <v-parallax
    src="https://www.novasaludsa.cl/wp-content/uploads/2017/10/Abstract-Background-White.jpg"
    height="350"
  >
    <v-layout align-center justify-center>
      <div>
        <h1 v-if="item != 'INICIO' && item != '/'" style="font-size: 50px;">
          {{ item }}
        </h1>
      </div>
    </v-layout>
  </v-parallax>
</template>
<script>
export default {
  props: ["item"]
};
</script>
