<template>
  <v-card class="">
    <v-card-title></v-card-title>

    <v-card-text>
      <highcharts
        constructorType="stockChart"
        class="hc"
        :options="chartOptions"
        ref='chart'
        :updateArgs="[true, true, true]"
      ></highcharts>
    </v-card-text>
  </v-card>
</template>

<script>

import _ from "lodash";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import gameParams from "../../params";
export default {
  components: {
    // highcharts: Chart,
  },
  props: ["stockName"],
   data() {
    return {
      chartOptions: {
        rangeSelector: {
          selected: 0,
        },
        series: [
          // {
          //   pointStart: Date.now(), // starting at the moment
          //   pointInterval: 1000, // second data
          //   data: [1,2,3],
          // },
        ],
      },
    };
  },
  
  computed: {
    ...mapGetters(["getStockByName"]),
    stock() {
      return this.getStockByName(this.stockName);
    },
    stocks() {
      return [this.stock];
    },
  },

  methods: {},
  watch: {
    stocks(newV, oldV) {
      this.chartOptions.series = _.map(newV, (i) => ({
        name: i.publicName,
        data: i.history,
      }));
    },
  },
};
</script>
