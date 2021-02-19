<template>
  <v-card class="">
    <v-card-title></v-card-title>

    <v-card-text>
      <highcharts
        class="chart"
        :options="chartOptions"
        :updateArgs="[true, true, true]"
      ></highcharts>
    </v-card-text>
  </v-card>
</template>

<script>
import { Chart } from "highcharts-vue";
import _ from "lodash";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import gameParams from "../../params";
export default {
  components: {
    highcharts: Chart,
  },
  props: ["stockName"],
  data: function() {
    return {
      hcInstance: Chart,
      chartOptions: {
        height: 300,
        chart: {
          height: 300,
          type: "spline",
        },
        series: [
          {
            name: null,
            data: null,
          },
        ],
        xAxis: {
          categories: _.range(gameParams.numTicks),
          labels: {
            enabled: true,
          },
        },
        legend: {
          enabled: true,
        },
        yAxis: {
          labels: {
            formatter: function() {
              return this.axis.defaultLabelFormatter.call(this);
            },
          },
        },
        title: {
          text: "",
        },
      },
    };
  },
  created() {
    console.log('PIZDA',_.map(this.stocks, (i) => ({
      name: i.publicName,
      data: i.history,
    })))
    this.chartOptions.series = _.map(this.stocks, (i) => ({
      name: i.publicName,
      data: i.history,
    }));
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

  methods: {
    
  },
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
