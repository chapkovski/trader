<template>
<v-card
    :loading="loading"
    class="mx-auto "
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>



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
        <tr
          v-for="item in holdings"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{item.value}}</td>
          <td>{{item.items}}</td>
          <td>{{item.gain}}</td>
          <td>{{item.return}}</td>
 
          
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </v-card-text>
    <v-card-actions>
      <margin-dialog/>
    </v-card-actions>
  </v-card>
</template>

<script>
import MarginDialog from './MarginDialog'
export default {
  components:{MarginDialog},
    data: () => ({
      loading: false,
      selection: 1,
      holdings: [
        {name:'Stock A', units:100, value:20, gain: -70, return:0.25},
        {name:'Stock B', units:200, value:10, gain: 70, return:0.36},
        
      ]
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>
