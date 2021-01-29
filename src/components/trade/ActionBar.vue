<template>
  <v-card height="100%">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Stock name
            </th>
            <th class="text-left">
              Price
            </th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <stock-row
            v-for="stock in stocksForActions"
            v-bind="stock"
            :key="stock.innerName"
          ></stock-row>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
import _ from "lodash";

import StockRow from "./StockRow";

import { mapState } from "vuex";
const formatDown = {
  color: "red",
  icon: "mdi-arrow-down-bold-outline",
};
const formatUp = {
  color: "blue",
  icon: "mdi-arrow-up-bold-outline",
};
export default {
  components: { StockRow },
  data: () => ({}),
  created() {},
  computed: {
    ...mapState(["stocks"]),
    stocksForActions() {
      return _.map(this.stocks, (i) => {
        const format = i.price >= i.previous ? formatUp : formatDown;
        return {
          name: i.publicName,
          innerName: i.innerName,
          ...format,
          price: i.price,
        };
      });
    },
  },
  watch: {},
  methods: {},
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
