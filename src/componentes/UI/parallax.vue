<template>
  <v-parallax
    src="http://thetanjungpuratimes.com/file/2016/02/Symphony-Square-Abstract-Background-Vector.jpg"
    height="350"
  >
    <v-layout align-center justify-center>
      <div>
        <h1
          v-if="item != 'INICIO' && item != '/'"
          style="font-size: 50px; color: black;"
        >
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
