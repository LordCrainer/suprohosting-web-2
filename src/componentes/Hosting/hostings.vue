<template lang="html">
  <div>
    <hostingPlanes :parametros="parametros" :datos="datos"></hostingPlanes>

    <tablaContenido :parametros="parametros" :datos="datos"></tablaContenido>
  </div>
</template>

<script>
import tablaContenido from "./../UI/tabla_contenido.vue";
import hostingPlanes from "./hosting_planes.vue";
export default {
  components: {
    hostingPlanes,
    tablaContenido
  },
  data() {
    return {
      parametros: [
        "Almacenamiento",
        "Banda Ancha",
        "Dominio",
        "SSL",
        "Base de Datos",
        "SiteBuilder",
        "Email",
        "Soporte técnico "
      ],
      datos: [
        {
          title: "PERSONAL",
          src:
            "https://www.nopcommerce.com/images/blog/17-April-A-guide-on-selecting-a-profitable-product-to-sell-online---Part-1/business_idea_pic.jpg",
          flex: 12,
          text: "Características",
          propiedades: ["3GB", "Ilimitada", 2, true, 1, false, 3, "24/7"],
          precio: {
            mes: 3.75,
            año: 39
          }
        },
        {
          title: "PYMES",
          src:
            "https://www.wardsauto.com/sites/wardsauto.com/files/uploads/2015/12/online-car-buying.jpg",
          flex: 12,
          text: "Características",
          propiedades: ["7GB", "Ilimitada", 5, true, 2, true, 7, "24/7"],
          precio: {
            mes: 5,
            año: 51
          }
        },
        {
          title: "ENTERPRISE",
          src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
          flex: 12,
          text: "Características",
          propiedades: [
            "25GB",
            "Ilimitada",
            "Ilimitada",
            true,
            "Ilimitada",
            true,
            "Ilimitada",
            "24/7"
          ],
          precio: {
            mes: 7.5,
            año: 75
          }
        }
      ]
    };
  }
};
</script>
