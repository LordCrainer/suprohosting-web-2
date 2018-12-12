<template>
  <v-tabs slot="extension" v-model="tab" color="transparent">
    <v-tabs-slider :color="clases"></v-tabs-slider>
    <v-tab
      style="font-size: 17px;"
      v-for="(menu, ind_menu) in menus"
      :key="menu"
      @click="nombreRuta(path[ind_menu]);"
      :to="path[ind_menu]"
      class="font-weight-black "
      :class="clases"
    >
      {{ menu }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  props: ["menus", "color", "path", "clases"],
  data() {
    return {
      tab: null
    };
  },
  methods: {
    nombreRuta(ruta) {
      this.$emit("epath", ruta);
      return ruta;
    }
  }
};
</script>
<style>
#navbar {
}
</style>
