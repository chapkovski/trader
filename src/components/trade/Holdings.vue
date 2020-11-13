<template>
  <v-card class="mx-auto "  >
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
                Gain
              </th>
              <th class="text-left">
                Return
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in holdings" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.value }}</td>
              <td>{{ item.units }}</td>
              <td>{{ item.gain }}</td>
              <td>{{ item.return }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
    
     
  </v-card>
</template>

<script>

export default {

  data: () => ({
    selection: 1,
    holdings: [
      { name: "Stock A", units: 100, value: 20, gain: -70, return: 0.25 },
      { name: "Stock B", units: 200, value: 10, gain: 70, return: 0.36 },
    ],
  }),

  methods: {},
};
</script>
