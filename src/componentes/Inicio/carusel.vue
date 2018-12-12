<template>
  <v-carousel>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <v-container fill-height grid-list-xl>
        <v-layout align-center justify-center row>
          <v-flex md6 sm6 xs12>
            <v-card color="rgba(102, 102, 102, 0.75)">
              <v-card-text class="text-xs-center">
                <span class="display-1 white--text">{{ item.text }}</span>
              </v-card-text>
              <v-card-actions>
                <v-container fill-height>
                  <v-layout row align-start justify-start>
                    <v-flex xs6 sm6>
                      <v-btn round color="primary" dark>ENTRAR</v-btn>
                    </v-flex>
                    <v-flex xs6 sm6>
                      <v-btn round outline color="white " dark
                        >Servicios
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
          text: "TRABAJO EN EQUIPO",
          src:
            "https://amazonia-teamfactory.com/wp-content/uploads/2018/03/Captura-de-pantalla-2018-03-29-a-las-19.34.42.jpg"
        },
        {
          text: "APRENDIZAJE",
          src:
            "https://www.esan.edu.pe/apuntes-empresariales/2016/08/05/capacitacion2016_principal.jpg"
        },
        {
          text: "DESARROLLO",
          src:
            "https://whitepapers.em360tech.com/wp-content/uploads/Nvidia-Telco.jpeg"
        }
      ]
    };
  }
};
</script>
