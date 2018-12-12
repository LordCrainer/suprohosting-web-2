<template>
  <v-parallax
    src="https://www.blockchaintechnology-news.com/wp-content/uploads/2018/11/iStock-944923496.jpg"
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
