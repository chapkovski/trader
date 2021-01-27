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
          <stock-row v-bind="aObj" />
          <stock-row v-bind="bObj" />
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
  data: () => ({
   stocksForActions:[]
  }),
  created() {},
  computed: {
    ...mapState(["stocks"]),

  },
  watch: {
    stocks(newV, oldV){
      this.stocksForActions = _.map(this.stocks, (i)=>{
        
        return {

        }
      })
      let format = newV.newPrice>=oldV.price? formatUp: formatUp`
      
    }
  },
  methods: {

  },
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
