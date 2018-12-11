<style scoped>
.valor {
  color: #fff;
  background: #949c4e;
  background: linear-gradient(
    45deg,
    rgba(75, 150, 225, 1) 12%,
    rgba(0, 25, 100, 1) 12%,
    rgba(0, 25, 100, 1) 50%,
    rgba(75, 150, 225, 1) 50%,
    rgba(0, 25, 100, 1) 100%
  );
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<template>
  <v-layout app justify-center>
    <v-flex>
      <v-card style="min-width:250px;" color="rgba(255,255,255,1)" flat>
        <v-container fluid grid-list-xl app>
          <v-layout wrap justify-center row fill-height>
            <v-flex
              lg3
              md3
              sm6
              xs12
              v-for="(valor, ind_valor) in valores"
              :key="ind_valor"
              style="min-width:300px;"
            >
              <v-container>
                <v-layout align-center justify-center row fill-height>
                  <v-card
                    height="270"
                    width="270"
                    style="min-width:250px; border-radius: 10%"
                    class="black--text"
                    color="rgba(255,255,255,0.9)"
                    hover
                  >
                    <v-hover>
                      <v-avatar
                        transition="slide-y-reverse-transition"
                        slot-scope="{
                          hover
                        }"
                        :class="`elevation-${hover ? 10 : 2}`"
                        size="100"
                      >
                        <img :src="valor.src_avatar" alt="avatar" @click="" />
                      </v-avatar>
                    </v-hover>
                    <v-card-text class="title">
                      {{ valor.titulo }}
                    </v-card-text>

                    <v-divider></v-divider>
                    <v-card-title class="subheading">
                      {{ valor.text }}
                    </v-card-title>
                  </v-card>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      valores: [
        {
          titulo: "Panel de control cPanel",
          text:
            "Cada plan cuenta con unos de los mejores paneles para la gestión de tu hosting, de manera sencilla e intuitiva",
          src_avatar:
            "https://errorlogz.com/wp-content/uploads/2016/05/global.logo_.png"
        },
        {
          titulo: "Cuentas de correo Coorporativo",
          text:
            "Crea tus propias cuentas de correo usando tu dominio de manera sumamente sencilla",
          src_avatar:
            "http://wanted.espaciores.org/wp-content/uploads/2015/11/icono-email.png"
        },
        {
          titulo: "Cuentas de correo Coorporativo",
          text:
            "Crea tus propias cuentas de correo usando tu dominio de manera sumamente sencilla",
          src_avatar:
            "https://errorlogz.com/wp-content/uploads/2016/05/global.logo_.png"
        },
        {
          titulo: "Cuentas de correo Coorporativo",
          text:
            "Crea tus propias cuentas de correo usando tu dominio de manera sumamente sencilla",
          src_avatar:
            "https://errorlogz.com/wp-content/uploads/2016/05/global.logo_.png"
        },
        {
          titulo: "Cuentas de correo Coorporativo",
          text:
            "Crea tus propias cuentas de correo usando tu dominio de manera sumamente sencilla",
          src_avatar:
            "https://errorlogz.com/wp-content/uploads/2016/05/global.logo_.png"
        },
        {
          titulo: "Servicio 24/7",
          text:
            "Crea tus propias cuentas de correo usando tu dominio de manera sumamente sencilla",
          src_avatar: "https://image.flaticon.com/icons/png/512/45/45765.png"
        }
      ]
    };
  }
};
</script>
