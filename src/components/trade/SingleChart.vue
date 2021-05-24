<template>
  <v-card class="">
    <v-card-title>{{stockName}}</v-card-title>

    <v-card-text>
      <highcharts
        constructorType="stockChart"
        class="hc"
        :options="chartOptions"
        ref="chart"
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
          // selected: 0,
        },
        series: [
          {
            pointStart: null,
            pointInterval:1000,
           data:[1,2,3]
          }
          
        ],
      },
    };
  },
  mounted(){
    // console.debug('JOPJPJPJ',   typeof this.chartOptions.series[0].pointStart)
    this.chartOptions.series[0].pointStart = this.dayStart.getTime();
    // console.debug('pizden!',    this.dayStart.getTime())
  },

  computed: {
     ...mapState([ 'dayStart', ]),
    ...mapGetters(["getStockByName"]),
    stock() {
      return this.getStockByName(this.stockName);
    },
    stocks() {
      return this.stock;
    },
  },

  methods: {},
  watch: {
    stocks(newV, oldV) {
      
      this.chartOptions.series[0].data=newV.history
      // this.chartOptions.series = _.map(newV, (i) => ({
      //   name: i.publicName,
      //   data: i.history,
      // }));
    },
  },
};
</script>
<style >
.highcharts-range-selector-group {
  display: none !important;
}
</style>
