<template>
  <v-card class="">
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
import { fromUnixTime, format } from "date-fns";
import _ from "lodash";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import gameParams from "../../params";
export default {
  components: {
    // highcharts: Chart,
  },
  props: ["stockName"],
  data() {
    const that = this;
    return {
      chartOptions: {
        tooltip: {
          formatter: function () {
            const t = fromUnixTime(this.x);

            const formattedT = format(t, "HH:mm:ss");
            return `The ${
              that.stock.publicName
            }  price  at <b> ${formattedT} </b>
               is <br><b> ${this.y.toFixed(2)} </b>`;
          },
        },

        rangeSelector: {
          selected: 0,
        },
        series: [
          {
            pointStart: null,
            pointInterval: 1000,
            data: [1, 2, 3],
          },
        ],
      },
    };
  },
  mounted() {
    console.debug("CHART MOUNTED", this.stockName);
    this.chartOptions.series[0].pointStart = this.dayStart.getTime();
  },

  computed: {
    ...mapState(["dayStart"]),
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
      console.debug("HERE IS THE ERROR souRcE In chARtS")
      console.debug('WHATS GOIN ON WITH CHARTS DATA', newV.history)
      this.chartOptions.series[0].data = newV.history;
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
