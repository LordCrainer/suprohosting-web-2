<template lang="html">
  <v-container fluid app>
    <v-layout justify-center>
      <v-flex>
        <v-card>
          <v-container fluid grid-list-xl>
            <v-layout wrap>
              <v-flex v-for="card in cards" xs12 :key="card.title" md4 sm6>
                <v-hover>
                  <v-card
                    slot-scope="{
                      hover
                    }"
                    :class="`elevation-${hover ? 12 : 2}`"
                  >
                    <v-img :src="card.src" height="200px">
                      <v-container fill-height fluid pa-2>
                        <v-layout fill-height>
                          <v-flex xs12 align-top flexbox>
                            <span class="headline white--text box_pad">{{
                              card.title
                            }}</span>
                          </v-flex>
                          <v-flex
                            xs12
                            align-top
                            flexbox
                            style="position: relative;"
                          >
                            <v-card-text
                              style="height: 88%; position: relative;"
                            >
                              <v-tooltip
                                left
                                style="position: absolute; right:0; bottom: 0;"
                              >
                                <v-btn
                                  color="pink"
                                  dark
                                  bottom
                                  right
                                  absolute
                                  fab
                                  slot="activator"
                                >
                                  ${{ (card.precio.año / 12).toFixed(2) }}
                                </v-btn>
                                <span>Contrato anual</span>
                              </v-tooltip>
                            </v-card-text>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-img>

                    <v-card-title class="justify-center pa-1">
                      Promoción ${{ card.precio.año }}/anual (${{
                        card.precio.año / 12
                      }}mes)
                      <v-tooltip bottom>
                        <v-btn icon slot="activator" dark>
                          <v-icon color="orange">info</v-icon>
                        </v-btn>
                        <span>Contrato anual</span>
                      </v-tooltip>
                    </v-card-title>

                    <v-card-title class="justify-center pa-1">
                      ${{ card.precio.mes }}/mes (${{
                        card.precio.mes * 12
                      }}anual)
                      <v-tooltip right>
                        <v-btn icon dark slot="activator">
                          <v-icon color="orange">info</v-icon>
                        </v-btn>
                        <span>Contrato mensual</span>
                      </v-tooltip>
                    </v-card-title>

                    <v-list
                      dense
                      v-for="(propiedad, ind_prop) in card.propiedades"
                      :key="ind_prop"
                      class="pa-0"
                      style="border-top: 1px solid rgba(130,130,130,0.5);"
                    >
                      <v-list-tile class="align-center" @click="">
                        <v-list-tile-content
                          class="align-start"
                          v-text="parametros[ind_prop]"
                        >
                        </v-list-tile-content>
                        <v-list-tile-content class="align-end">
                          <v-list-tile-content
                            v-show="propiedad !== true && propiedad !== false"
                            class="align-end"
                            v-text="propiedad"
                          >
                          </v-list-tile-content>
                          <v-icon color="green" v-show="propiedad === true"
                            >check_circle</v-icon
                          >
                          <v-icon color="red" v-show="propiedad === false"
                            >highlight_off</v-icon
                          >
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["parametros", "cards"]
};
</script>

<style lang="css"></style>
