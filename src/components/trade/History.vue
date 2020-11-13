<template>
  <v-card class=" "  >
    <v-card-title>Historical data</v-card-title>

    <v-card-text>
      <v-sparkline
        height="167"
        :fill="fill"
        :radius='25'
        :value="value"
       
        :smooth="25"
        :padding="padding"
        :line-width="width"
        :stroke-linecap="lineCap"
        :gradient-direction="gradientDirection"
        :type="type"
        :auto-line-width="autoLineWidth"
        auto-draw
      ></v-sparkline>
    </v-card-text>
  </v-card>
</template>
<script>
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

export default {
  data: () => ({
    fill: true,
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: "round",
    gradient: gradients[5],
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    gradientDirection: "top",
    gradients,
    type: "trend",
    autoLineWidth: false,
  }),
};
</script>
