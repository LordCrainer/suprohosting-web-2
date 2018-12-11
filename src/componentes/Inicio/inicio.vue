<template>
  <div>
    <slot></slot>
    <hostingPlanes
      :parametros="dato.parametros"
      :datos="dato.datos"
    ></hostingPlanes>
    <Valores> </Valores> <Comentarios></Comentarios>
  </div>
</template>
<script>
import Valores from "./valores.vue";
import Comentarios from "./comentarios.vue";
import hostingPlanes from "./../Hosting/hosting_planes.vue";

import data from "./../Hosting/data_hosting.js";
export default {
  components: {
    Valores,
    hostingPlanes,
    Comentarios
  },
  data() {
    return {
      dato: data
    };
  }
};
</script>
