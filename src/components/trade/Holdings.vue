<template>
  <v-card class="mx-auto ">
    <v-card-title>Current holdings</v-card-title>

    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Stock name
              </th>
              <th class="text-left">
                Value
              </th>
              <th class="text-left">
                Items
              </th>

              <th class="text-left">
                Return
              </th>
            </tr>
          </thead> 
          <tbody>
            <tr v-for="item in stocksForHoldings" :key="item.name">
              <td>{{ item.publicName }}</td>
              <td>{{ item.value }}</td>
              <td>{{ item.units }}</td>

              <td>{{ item.rate_return }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import _ from "lodash";
export default {
  data: () => ({
    selection: 1,
    stocksForHoldings: [],
  }),
  computed: { ...mapState(["stocks"]) },
  watch: {
    stocks(newV, oldV) {
      this.stocksForHoldings = _.map(newV, (i) => {
        return {
          publicName: i.publicName,
          value: i.quantity*i.price,
          units: i.quantity,
          rate_return: i.rate_return,
        };
      });
      
    },
  },
  methods: {},
};
</script>
