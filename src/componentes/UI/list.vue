<style scoped>
.border_hover:hover {
  border-left: 10px solid rgba(15, 15, 15, 1);
  background-color: rgba(15, 15, 15, 0.7);
  color: white;
  font-weight: bold;
}
.v-list {
  background-color: rgba(255, 255, 255, 0);
}
</style>

<template>
  <v-list dense style="back">
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
