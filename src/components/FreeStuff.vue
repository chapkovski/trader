<template>
  <v-card class="ma-1" :color="$gamified ? 'orange' : 'black'">
    <v-card-text :class='`orange black--text`'>
      Probability to get free stocks:
      <v-chip color="error">
        {{getProb()}}%
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>


import { mapGetters } from "vuex";
export default {
  data: () => ({
    
  }),
  computed: {
    ...mapGetters(["getProb"]),
  },
   
  methods: {
    
  },
};
</script>

<style scoped></style>
