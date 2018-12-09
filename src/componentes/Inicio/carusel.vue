<style></style>

<template>
  <v-carousel>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <v-container fill-height absolute>
        <v-layout fill-height align-center justify-center>
          <v-flex sm8 md6 xs12 flexbox>
            <v-card color="rgba(102, 102, 102, 0.75)">
              <v-card-text>
                <span class="display-1 white--text text-md-center">{{
                  item.text
                }}</span>
              </v-card-text>
              <v-card-title primary-title> </v-card-title>
              <v-card-actions>
                <v-layout fill-height align-end row justify-center>
                  <v-flex xs12 flexbox>
                    <v-btn round color="primary" dark>Hosting</v-btn>
                  </v-flex>
                  <v-flex xs12 flexbox>
                    <v-btn round outline color="white " dark
                      >Servicios Adicionales</v-btn
                    >
                  </v-flex>
                </v-layout>
              </v-card-actions>
              <div class="text-xs-center" v-if="item.text"></div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "HOSTING WEB",
          src:
            "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/4G7e-supro_hosting.jpg"
        },
        {
          text: "DESARRALLO WEB",
          src:
            "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/vIYp-supro_develop.jpg"
        },
        {
          text: "ENTERPRISE",
          src:
            "https://uploads.codesandbox.io/uploads/user/17fffd86-3ee1-4ca9-abc0-4e76a2cb57f0/pds--supro_enterprise.png"
        }
      ]
    };
  }
};
</script>
