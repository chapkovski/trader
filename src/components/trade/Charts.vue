<template>
  <v-card class="">
    <v-card-title>Current market situation</v-card-title>

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
import { mapState, mapMutations, mapActions } from "vuex";
import gameParams from "../../params";
export default {
  components: {
    highcharts: Chart,
  },
  data: function() {
    return {
      hcInstance: Chart,
      chartOptions: {
        height: 300,
        chart: {
          height: 300,
          type: "spline",
        },
        series: [        ],
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
    this.updShares();
  },
  computed: {
    ...mapState(["currentTick", "stocks"])
  },
  watch: {
     stocks(newV, oldV) {
       console.debug("JOJOJOJOJO", _.map(newV, (i)=>({name:i.publicName, data:i.history})))
        this.chartOptions.series = _.map(newV, (i)=>({name:i.publicName, data:i.history}))
     }
  },
  methods: {
    ...mapMutations(["INC_TICK"]),
    ...mapActions(["requestPriceUpdate"]),
    updShares: function() {
      this.intervalid1 = setInterval(() => {
        this.addRecord();
      }, gameParams.tickFrequency * 1000);
    },
    addRecord() {
      this.requestPriceUpdate("a");
      this.requestPriceUpdate("b");
      this.INC_TICK();
    },
  },
};
</script>
