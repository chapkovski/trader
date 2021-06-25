<template>
  <v-card class="mx-auto ">
    <v-card-title>Current holdings</v-card-title>

    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">
                Stock name
              </th>
              <th class="text-center">
                Market value
              </th>
              <th class="text-left">
                Quantity
              </th>
                <th class="text-left">
                Return
              </th>
              <th class="text-left">
                P&L
              </th>
              
              <th class="text-center">
                % Portfolio
              </th>

            
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in stocksForHoldings" :key="item.name">
              <td>{{ item.publicName }}</td>
              <td>{{ item.value }}</td>
              <td>{{ item.units }}</td>

              <td>{{ item.rate_return }}</td>
              <td>{{ item.pandle.toFixed(2) }}</td>
            </tr>
          </tbody>
          <thead>
            <tr class='black white--text caption'>
              <th colspan="4" class=' subtitle-1 white--text'>Current portfolio value</th>
              <th class='black  subtitle-1 white--text darken'>{{portfoglioValue()}}</th>
            </tr>
          </thead>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import _ from "lodash";
export default {
  data: () => ({}),
  created() {},
  computed: {
       ...mapGetters(['portfoglioValue', 'pandle']),
    ...mapState(["stocks"]),
    stocksForHoldings() {
      return _.map(this.stocks, (i) => {
        
        return {
          publicName: i.publicName,
          value: _.round(i.quantity * i.price,2).toFixed(2),
          units: i.quantity,
          rate_return: i.rate_return,
          pandle: this.pandle(i.innerName)
        };
      });
    },
  },
  watch: {},
  methods: {},
};
</script>
