<template>
  <v-card class="mx-auto">
    <v-card-title>Current holdings</v-card-title>

    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th></th>
              <th class="text-left">Stock name</th>

              <th class="text-center" colspan="">Price</th>

              <th class="text-right">Quantity</th>
              <th class="text-right">Market value</th>
              <th class="text-right">Realized P&L</th>
              <th class="text-right">Unrealized P&L</th>
              <th class="text-right">Total P&L</th>

              <th class="text-right">Portfolio weight</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in stocksForHoldings"
              :key="item.name"
              class="text-right"
            >
              <td>
                <div class="d-flex flex-lg-row flex-md-column">
                  
                  <buy-sell-dialog
                    :showFull="isLG"
                    action="buy"
                    :stockName="item.publicName"
                    :name="item.name"
                    actionIcon="mdi-cart-arrow-down"
                  ></buy-sell-dialog>
                  <buy-sell-dialog
                    :showFull="isLG"
                    action="sell"
                    :stockName="item.publicName"
                    :name="item.name"
                    :actionIcon="'mdi-trash-can-outline'"
                  ></buy-sell-dialog>
                  
                </div>
              </td>
              <td class="text-left">{{ item.publicName }}</td>
              <td>
                <div class="d-flex justify-center">
                  <div>{{ item.price }}</div>
                  <div>
                    <v-icon :color="item.format.color">
                      {{ item.format.icon }}
                    </v-icon>
                  </div>
                  <div>({{ item.sign }}{{ item.diff }})</div>
                </div>
              </td>

              <td>{{ item.units }}</td>
              <td>{{ num(item.value) }}</td>
              <td>{{ num(item.pandle.realized) }}</td>
              <td>{{ num(item.pandle.unrealized) }}</td>
              <td>{{ num(item.pandle.total) }}</td>

              <td>{{ parseFloat(item.share * 100).toFixed(2) + "%" }}</td>
            </tr>
            <tr class="blue lighten-4">
              <td colspan="4" class="text-left">Current portfolio value</td>
              <td  class="d-flex align-items-center justify-end">
                <div>{{ num(portfoglioValue()) }}</div>
              </td>

              <td></td>
              <td class="text-right">{{ num(totRealizedPL) }}</td>
              <td class="text-right">{{ num(totUnrealizedPL) }}</td>
              <td class="text-right">{{ num(totPL) }}</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
const formatDown = {
  color: "red",
  icon: "mdi-arrow-down-bold",
};
const formatUp = {
  color: "green darken-3",
  icon: "mdi-arrow-up-bold",
};
import BuySellDialog from "./BuySellDialog";
import { mapGetters, mapState } from "vuex";
import _ from "lodash";
const diffFun = (newV, oldV) => {
  const perc = (newV - oldV) / oldV;
  return parseFloat(perc * 100).toFixed(2) + "%";
};

export default {
  components: { BuySellDialog },
  data: () => ({}),
  created() {},
  computed: {
    isLG() {
      return this.$vuetify.breakpoint.name === "lg";
    },
    ...mapGetters(["portfoglioValue", "pandle"]),
    ...mapState(["stocks"]),
    stocksForHoldings() {
      const t = _.map(this.stocks, (i) => {
        return {
          name: i.innerName,
          publicName: i.publicName,
          price: this.num(i.price),
          sign: i.price >= i.initial ? "+" : "",
          format: i.price >= i.initial ? formatUp : formatDown,
          value: i.quantity * i.price,
          units: i.quantity,
          pandle: this.pandle(i.innerName),
          diff: diffFun(i.price, i.initial),
        };
      });
      let sumPortfolio = _.sumBy(t, (i) => {
        return i.value || 0;
      });
      if (sumPortfolio === 0) {
        sumPortfolio = 1;
      }

      return _.map(t, (i) => ({ ...i, share: i.value / sumPortfolio }));
    },
    totPL() {
      return _.sumBy(this.stocksForHoldings, (i) => {
        return i.pandle.total;
      }).toFixed(2);
    },
    totRealizedPL() {
      return _.sumBy(this.stocksForHoldings, (i) => {
        return i.pandle.realized;
      }).toFixed(2);
    },
    totUnrealizedPL() {
      return _.sumBy(this.stocksForHoldings, (i) => {
        return i.pandle.unrealized;
      }).toFixed(2);
    },
  },

  watch: {},
  methods: {
    num(v) {
      const sign = v < 0 ? "-" : "";
      const currency = "E$";
      const absV = Math.abs(v).toFixed(2);
      return `${sign}${currency}${absV}`;
    },
  },
};
</script>
<style scoped>
td {
  white-space: nowrap;
  padding-left: 8px !important;
  padding-right: 8px !important;
}
</style>