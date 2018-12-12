<template>
  <div><slot></slot> <Valores> </Valores> <Comentarios></Comentarios></div>
</template>
<script>
import Valores from "./valores.vue";
import Comentarios from "./comentarios.vue";
export default {
  components: {
    Valores,
    Comentarios
  },
  data() {
    return {};
  }
};
</script>
