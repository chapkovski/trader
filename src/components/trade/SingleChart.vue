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
const {SEC, tickFrequency} = gameParams;
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
          // selected: 0,
        },
        series: [
          {
            pointStart: 1,
            pointInterval: tickFrequency*SEC,
            data: [1, 2, 3],
          },
        ],
      },
    };
  },
  mounted() {
    // this.chartOptions.series[0].pointStart = this.dayStart.getTime();

    this.chartOptions.series[0].data = this.stocks.history;
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
      this.chartOptions.series[0].data = newV.history;
    },
  },
};
</script>
<style >
.highcharts-range-selector-group {
  display: none !important;
}
</style>
