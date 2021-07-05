<template>
  <v-card class="mx-auto">
    <v-card-title>Current holdings</v-card-title>

    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">Stock name</th>

              <th class="text-center" :style="{ width: '15%' }">Price</th>
              <th class="text-center">Market value</th>
              <th class="text-left">Quantity</th>
              <th class="text-center">Realized P&L</th>
              <th class="text-center">Unrealized P&L</th>
              <th class="text-center">Total P&L</th>

              <th class="text-center">Share Portfolio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in stocksForHoldings" :key="item.name">
              <td>{{ item.publicName }}</td>
              <td>
                <div class="d-flex align-items-center justify-center">
                  <div>E$</div>
                  <div>{{ item.price.toFixed(2) }}</div>
                  <div class="ml-1 d-flex">
                    (<v-icon :color="item.format.color">
                      {{ item.format.icon }}
                    </v-icon>
                    {{ item.diff }})
                  </div>
                </div>
              </td>

              <td>E$ {{ item.value }}</td>
              <td>{{ item.units }}</td>
              <td>{{ item.pandle.realized.toFixed(2) }}</td>
              <td>{{ item.pandle.unrealized.toFixed(2) }}</td>
              <td>{{ item.pandle.total.toFixed(2) }}</td>

              <td>{{ parseFloat(item.share * 100).toFixed(2) + "%" }}</td>
              <td>
                <div class="d-flex">
                  <buy-sell-dialog
                    action="buy"
                    :stockName="item.publicName"
                    :name="item.name"
                    actionIcon="mdi-cart-arrow-down"
                  ></buy-sell-dialog>
                  <buy-sell-dialog
                    action="sell"
                    :stockName="item.publicName"
                    :name="item.name"
                    :actionIcon="'mdi-trash-can-outline'"
                  ></buy-sell-dialog>
                </div>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr class="blue lighten-4 caption">
              <th colspan="2" class="subtitle-1 font-weight-bold">
                Current portfolio value
              </th>
              <th class="subtitle-1 font-weight-bold d-flex align-items-center justify-center">
                <div>E$</div>
                <div>{{ portfoglioValue() }}</div>
              </th>
            </tr>
          </thead>
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
  if (!oldV) return;
  const perc = (newV - oldV) / oldV;
  return parseFloat(perc * 100).toFixed(2) + "%";
};

export default {
  components: { BuySellDialog },
  data: () => ({}),
  created() {},
  computed: {
    ...mapGetters(["portfoglioValue", "pandle"]),
    ...mapState(["stocks"]),
    stocksForHoldings() {
      const t = _.map(this.stocks, (i) => {
        return {
          name: i.innerName,
          publicName: i.publicName,
          price: i.price,
          format: i.price >= i.previous ? formatUp : formatDown,
          value: _.round(i.quantity * i.price, 2),
          units: i.quantity,
          pandle: this.pandle(i.innerName),
          diff: diffFun(i.price, i.previous),
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
  },

  watch: {},
  methods: {},
};
</script>
