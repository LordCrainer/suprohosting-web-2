<style scoped>
.border_hover:hover {
  border-left: 7px solid black;
  background-color: rgba(150, 150, 150, 0.2);
  color: black;
  font-weight: bold;
}
</style>

<template>
  <v-list dense>
    <v-list-tile
      class="border_hover"
      v-for="(menu, index) in items"
      :key="index"
      @click=""
      :to="path[index]"
      ripple
    >
      <v-list-tile-title>{{ menu }}</v-list-tile-title>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  props: ["items", "path"],
  data() {
    return {
      tab: null
    };
  }
};
</script>
