<template>
  <div>
    <h3>Transactions:</h3>
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
    </v-data-table>

  </div>
  
</template>

<script>
import { format } from 'date-fns'

import { mapGetters } from "vuex";
export default {
    data () {
      return {
        sortBy: 'time',
        sortDesc: true,
        headers: [
          {
            text: 'Stock name',
          
            value: 'name',
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
      formatTime(v){return format(v, "HH:mm:ss.S")}
    }
  }
</script>
