<template>
  <v-card class="">
    <v-card-title>Current market situation</v-card-title>

    <v-card-text>
      <highcharts class="chart" :options="chartOptions"></highcharts>
    </v-card-text>
  </v-card>
</template>

<script>
import { Chart } from "highcharts-vue";

import _ from "lodash";
export default {
  components: {
    highcharts: Chart,
  },
  data: () => ({
    hcInstance: Chart,
    chartOptions: {
      chart: {
        type: "spline",
      },
      data: {
        csvURL: "https://demo-live-data.highcharts.com/vs-load.csv",
        seriesMapping: [
          {
            x: 0,
            y: 1,
          },
        ],
      },
          xAxis: {

        labels: {
            enabled: false
        },
        
    },
        legend: {
        enabled: false
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
  }),
};
</script>
