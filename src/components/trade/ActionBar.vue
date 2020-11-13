<template>
  <v-card>
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
          <tr v-for="item in stocks" :key="item.name">
            <td>{{ item.name }}</td>
            <td>
              {{ item.price }}
              <span :style="{ color: 'red' }"
                ><v-icon :color="item.color">{{ item.icon }}</v-icon></span
              >
            </td>
            <td><management-buttons /></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
import _ from 'lodash'
import ManagementButtons from "./ManagementButtons";
export default {
  components: { ManagementButtons },
  data: () => ({
    stocks: [
      {
        name: "Stock A",
        price: 3.456,
        color: "red",
        icon: "mdi-arrow-down-bold-outline",
      },
      {
        name: "Stock B",
        price: 4.356,
        color: "blue",
        icon: "mdi-arrow-up-bold-outline",
      },
    ],
  }),
  created() {
    this.updStock();
  },
  methods: {
    updStock: function() {
      this.intervalid1 = setInterval(() => {
        _.forEach(this.stocks, function(i) {
          i.price = (Math.random() * 100).toFixed(2);
        });
      }, 1000);
    },
  },
};
</script>
