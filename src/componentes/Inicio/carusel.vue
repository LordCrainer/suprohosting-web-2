<template>
  <v-carousel>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <v-container fill-height absolute>
        <v-layout fill-height row align-center justify-center>
          <v-flex md6 sm8 xs12>
            <v-card color="rgba(102, 102, 102, 0.75)">
              <v-card-text class="text-xs-center">
                <span class="display-1 white--text">{{ item.text }}</span>
              </v-card-text>
              <v-card-actions>
                <v-container>
                  <v-layout fill-height row align-center justify-center>
                    <v-flex xs6>
                      <v-btn round color="primary" dark>Hosting</v-btn>
                    </v-flex>
                    <v-flex xs6>
                      <v-btn round outline color="white " dark
                        >Servicios Adicionales
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-actions>
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
