<template>
  <v-card class="">
    <v-card-title>Stock fundamentals</v-card-title>
    <v-data-table
      :headers="headers"
      :items="filteredStocks"
      :items-per-page="5"
      item-class="style_name"
      class="elevation-1"
      :hide-default-footer="true"
    >
    <template v-slot:item.expected_return="{ item }">
        {{ (item.expected_return*100).toFixed(0) }}%
      </template>
      <template v-slot:item.sigma="{ item }">
        {{ (item.sigma*100).toFixed(0) }}%
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
import _ from "lodash";
import { mapState, mapActions } from "vuex";

export default {
  components: {},
  data: () => ({
    headers: [
      {
        text: "Stock name",

        value: "publicName",
      },
    
      { text: "Expected return", value: "expected_return" },
        { text: "Stock volatility", value: "sigma" },
    ],
  }),
  watch: {},
  computed: {
    ...mapState(["stocks"]),
    filteredStocks() {
      const filtered = _.filter(this.stocks, _.matches({ leverage: 1 }));
      return _.map(filtered, (i)=>({...i, style_name:'orange lighten-4 '}))
    },
  },
  methods: {},
};
</script>
<style scoped>
.black {
  background: black;
}
</style>