<template>
    <v-card class="">
    <v-card-title>Transactions</v-card-title>
     <v-data-table
    :headers="headers"
    :items="getAllTransactions()"
    :items-per-page="5"
    class="elevation-1"
          :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      >
      <template v-slot:item.time="{ item }">
     
        {{ formatTime(item.time) }}
     
    </template>
      <template v-slot:item.price="{ item }">
     
        {{ formatPrice(item.price)}}
     
    </template>
    </v-data-table>

    </v-card>
</template>

<script>
import { format } from 'date-fns'
import _ from 'lodash'
import { mapGetters } from "vuex";
export default {
    data () {
      return {
        sortBy: 'time',
        sortDesc: true,
        headers: [
          {
            text: 'Stock name',
          
            value: 'publicName',
          },
          { text: 'Action', value: 'action' },
          { text: 'Quantity', value: 'quantity' },
          { text: 'Price', value: 'price' },
          { text: 'Time', value: 'time' },
         
        ],
       
      }
    },
    computed:{

    ...mapGetters(["getAllTransactions"]),
    },
    methods:{
      formatTime(v){return format(v, "HH:mm:ss.S")},
      formatPrice(v){
        if  (_.isNumber(v) ){
          return v.toFixed(2)
        }
        return v
        }
    }
  }
</script>
