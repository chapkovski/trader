<template>
  <v-card class=" "  >
    <v-card-title>Charts</v-card-title>
  <v-tabs
          v-model="currentTab"
          centered
          slider-color="yellow"
        >
          <v-tab
            v-for="i in stocks"
            :key="i.innerName"
            :href="`#${i.innerName}`"
          >
             {{ i.publicName }}
          </v-tab>
        </v-tabs>
   <v-tabs-items v-model="currentTab">
      <v-tab-item
         eager
        v-for="i in stocks"
        :key="i.innerName"
        :value="`${i.innerName}`"
      >
        <v-card flat>
          <v-card-text  >
            <chart :stock-name='i.innerName'></chart>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

  </v-card>
</template>
<script>
import _ from 'lodash'
import { mapState } from "vuex";
import Chart from './SingleChart' 
export default {
  components:{Chart},
  data: () => ({
    chartStocks:[],
    currentTab:'a',

  }),
  computed:{
    ...mapState(['stocks']),
    getCurrentTab(){
      
      return _.find(this.stocks, (i)=>(i.innerName===this.currentTab))
      }
  },
  
};
</script>
