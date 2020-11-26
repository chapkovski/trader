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
import csvFile from "../../assets/data.csv";
import _ from "lodash";

export default {
  components: {
    highcharts: Chart,
  },
  data: () => ({
    hcInstance: Chart,
    chartOptions: {
      height: 300,
      chart: {
        height: 300,
        type: "spline",
      },
      series: [
        {
          data: _.map(_.range(0, 10), function(i) {
            return  Math.random();
          }),
          name: "Stock A",
        },
        {
          data: _.map(_.range(0, 10), function(i) {
            return  Math.random();
          }),
          name: "Stock B",
        },
      ],
      xAxis: {
        categories: _.range(10,20),
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
  }),
  created() {
    this.updShares();
  },
  methods: {
    updShares: function() {
      this.intervalid1 = setInterval(() => {
        this.addRecord();
      }, 2000);
    },
    addRecord() {
 
      
      this.chartOptions.series[0].data.shift();
      this.chartOptions.series[1].data.shift();
    
      const xAxisCategories=_.range(0,10)
      this.chartOptions.xAxis.categories.shift()
      const last = _.last(this.chartOptions.xAxis.categories)
      this.chartOptions.xAxis.categories.push(last+1)

 
      this.chartOptions.series[0].data.push( Math.random());
      this.chartOptions.series[1].data.push( Math.random());
      
      
    },
  },
};
</script>
