<style lang="css"></style>

<template lang="html">
  <!-- Crea un contenedor con un tema transparente -->
  <v-layout justify-center>
    <!-- Separa secciones y contiene a v-flex -->
    <v-flex>
      <!-- Caja flexible -->
      <v-card flat color="rgba(255,255,255,0.1)">
        <!--
          Componente versatil que puede ser usado para diferentes fines, como panel, carte, para imagenes estáticas
        -->
        <v-container fluid grid-list-xs overflow-y-hidden>
          <!--
            Usado para centrar y contener la página, y fluid permite extender todo el ancho
          -->
          <v-layout>
            <v-flex style="min-width:175px;">
              <v-card>
                <v-card-title class="justify-center pa-0"> TIPO </v-card-title>
                <v-list
                  dense
                  class="pr-0 py-1"
                  style="border-top: 1px solid rgba(130,130,130,0.5);"
                >
                  <v-list-tile class="align-center">
                    <v-list-tile-content class="align-start">
                      Contrato mensual
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
                <v-list
                  dense
                  class="pr-0 py-1"
                  style="border-top: 1px solid rgba(130,130,130,0.5);"
                >
                  <v-list-tile class="align-center">
                    <v-list-tile-content class="align-start">
                      Contrato Anual
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
                <v-list
                  v-for="(param, ind_param) in parametros"
                  :key="ind_param"
                  dense
                  class="pa-0"
                  style="border-top: 1px solid rgba(130,130,130,0.5);"
                >
                  <v-list-tile class="align-center">
                    <v-list-tile-content class="align-start">
                      {{ param }}
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
            <v-flex v-for="card in datos" xs12 :key="card.title" md3 sm6>
              <!--
                La directiva v-for permite repetir la etiqueta y sus respectivos hijos, de acuerdo a la cantidad de elementos de un array o variable (v-for="n in 3" repite 3 veces, n=1, n=3 al final)
              -->
              <v-hover>
                <!--
                  Provee del estado hover a cualquier elemento, siempre que tenga
                -->
                <v-card
                  slot-scope="{
                    hover
                  }"
                  :class="`elevation-${hover ? 12 : 2}`"
                >
                  <v-card-title
                    class="justify-center pa-0"
                    style="min-width:210px; border-bottom: 1px solid rgba(130,130,130,0.5);"
                  >
                    {{ card.title }}
                  </v-card-title>

                  <v-card-title
                    class="justify-center pa-0"
                    style="border-bottom: 1px solid rgba(130,130,130,0.5);"
                    @click=""
                  >
                    ${{ card.precio.año }}/anual (${{
                      card.precio.año / 12
                    }}
                    mes)
                    <v-tooltip bottom>
                      <v-btn icon dark slot="activator">
                        <v-icon color="orange">info</v-icon>
                      </v-btn>
                      <span>${{ card.precio.año / 12 }} mes</span>
                    </v-tooltip>
                  </v-card-title>

                  <v-card-title class="justify-center pa-0" @click="">
                    ${{ card.precio.mes }}/mes (${{
                      card.precio.mes * 12
                    }}
                    anual)
                    <v-tooltip bottom>
                      <v-btn icon dark slot="activator">
                        <v-icon color="orange">info</v-icon>
                      </v-btn>
                      <span>${{ card.precio.mes * 12 }} anual</span>
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
                      <v-list-tile-content class="align-center">
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
</template>

<script>
export default {
  props: ["parametros", "datos"]
};
</script>
