<template>
  <div>
    <h3>Transactions:</h3>
     <v-data-table
    :headers="headers"
    :items="transactions"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>

  </div>
  
</template>

<script>
export default {
    data () {
      return {
        headers: [
          {
            text: 'Stock name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Action', value: 'action' },
          { text: 'Quantity', value: 'quantity' },
          { text: 'Price', value: 'price' },
          { text: 'Time', value: 'time' },
         
        ],
        transactions: [
          {
            name: 'Stock A',
            action: 'Initial purchase',
            quantity: 6.0,
            price: 24,
            time: 4.0,
            
          },
          
        ],
      }
    },
  }
</script>
