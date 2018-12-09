<template>
  <v-tabs slot="extension" v-model="tab" color="transparent">
    <v-tabs-slider color="black"></v-tabs-slider>
    <v-tab
      v-for="(menu, ind_menu) in menus"
      :key="menu"
      :to="path[ind_menu]"
      class="font-weight-bold  black--text body-2"
    >
      {{ menu }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  props: ["menus", "color", "path"],
  data() {
    return {
      tab: null
    };
  }
};
</script>
