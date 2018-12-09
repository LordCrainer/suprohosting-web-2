<template>
  <div>
    <v-navigation-drawer
      temporary
      hide-overlay
      fixed
      disable-resize-watcher
      v-model="drawer_flag"
      right
      app
    >
      <List :items="menu_page" :path="rutas"></List>
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
    <v-toolbar app fixed style="height:72px;">
      <v-hover>
        <v-avatar
          class="white"
          tile
          slot-scope="{
            hover
          }"
          :size="`${hover ? 75 : 75}`"
        >
          <img
            src="https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/F0Jd-logo.png"
            alt="alt"
          />
        </v-avatar>
      </v-hover>
      <v-spacer></v-spacer>
      <v-toolbar-title class="black--text font-weight-bold">
        SUPROHOSTING
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <Navbar :menus="menu_page" :path="rutas"></Navbar>
      </v-toolbar-items>

      <!--
        <v-menu bottom left class="hidden-md-and-up" offset-y fixed right app>
          <v-btn flat fab color="grey" slot="activator">
            <v-icon large>more_vert</v-icon>
          </v-btn>
          <List :items="menu_page" :path="rutas"></List>
        </v-menu>
      -->
      <!--
        <v-toolbar-side-icon  flat center class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      -->
      <v-btn
        flat
        icon
        color="grey"
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
  components: {
    Navbar,
    List
  },
  data() {
    return {
      drawer_flag: false,
      color: "black",
      tab: null,
      rutas: [
        "/",
        "clientes",
        "/hosting",
        "/dominio",
        "/nosotros",
        "/contacto"
      ],
      menu_page: [
        "PRINCIPAL",
        "CLIENTES",
        "HOSTING",
        "DOMINIO",
        "NOSOTROS",
        "CONTACTO"
      ],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>
