<style scoped>
div {
  font-family: "Righteous", cursive;
  font-size: 22px;
}
#list {
  background-color: rgba(255, 255, 255, 0.95);
}
</style>

<template>
  <div v-scroll="onScroll">
    <v-navigation-drawer
      id="list"
      temporary
      hide-overlay
      fixed
      disable-resize-watcher
      v-model="drawer_flag"
      right
      app
    >
      <List :items="menu" :path="rutas" @epath="nombreRuta($event);"></List>
      <v-btn
        fixed
        bottom
        right
        fab
        dark
        color="blue"
        @click.stop="drawer_flag = !drawer_flag;"
      >
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-navigation-drawer>
    <v-toolbar
      app
      fixed
      :style="{ height: height_toolbar }"
      class="elevation-8"
      :color="color_toolbar"
    >
      <v-hover>
        <v-avatar
          color="rgba(255, 255, 255, 0.0)"
          slot-scope="{
            hover
          }"
          :size="`${hover ? height_toolbar : height_toolbar}`"
        >
          <img :src="src_logo" alt="alt" />
        </v-avatar>
      </v-hover>
      <v-spacer></v-spacer>
      <v-toolbar-title :class="color_text" class="font-weight-bold">
        SUPROHOSTING
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <Navbar
          @epath="nombreRuta($event);"
          :menus="menu"
          :path="rutas"
          :clases="color_text"
        ></Navbar>
      </v-toolbar-items>
      <v-btn
        flat
        icon
        :color="color_text.split('--')[0]"
        class="hidden-md-and-up"
        @click.stop="drawer_flag = !drawer_flag;"
      >
        <v-icon large>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import Navbar from "./navbar.vue";
import List from "./UI/list.vue";
//import pdfvue from "./inicio/pdf.vue";
//import PDF from "jspdf";
export default {
  props: ["menu", "rutas"],
  components: {
    Navbar,
    List
  },
  data() {
    return {
      src_logo:
        "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/hagb-logo2.png",
      offsetTop: 0,
      color_toolbar: "rgba(255, 255, 255, 0.1)",
      color_text: "white--text",
      height_toolbar: "70px",
      drawer_flag: false,
      color: "black",
      tab: null,

      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  methods: {
    onScroll(e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
      if (this.offsetTop > 30) {
        this.color_toolbar = "rgba(255, 255, 255, 0.9)";
        this.height_toolbar = "65px";
        this.color_text = "black--text";
      } else {
        this.color_toolbar = "rgba(255, 255, 255, 0.1)";
        this.height_toolbar = "68px";
        this.color_text = "white--text";
      }
    },
    nombreRuta(ruta) {
      this.$emit("epath", ruta);
    }
  }
};
</script>
