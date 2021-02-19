<template>
  <v-card class="">
    <v-card-title>Stock {{chartId}}</v-card-title>

    <v-card-text>
      JOPA {{chartId}}
    </v-card-text>
  </v-card>
</template>

<script>
 

import _ from "lodash";

export default {
  components: {
   
  },
  props:['chartId'],
  data: function() {
    return {
      
    };
  },
  created() {
     
  },
  computed: {
    
  },
  watch: {
     
  },
  methods: {},
};
</script>
