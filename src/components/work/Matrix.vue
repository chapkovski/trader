<template>
  <v-sheet color="grey lighten-3" outlined>
   {{ data }}
  </v-sheet>
</template>

<script>
import "animate.css";
export default {
  props: ["data"],
  data: () => ({}),
  computed: {},
};
</script>

<style scoped></style>
