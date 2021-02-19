<template>
  <v-card class=" "  >
    <v-card-title>Historical data</v-card-title>
  <v-tabs
          v-model="currentTab"
          centered
          slider-color="yellow"
        >
          <v-tab
            v-for="i in tabs"
            :key="i.name"
            :href="`#${i.name}`"
          >
             {{ i.label }}
          </v-tab>
        </v-tabs>
   <v-tabs-items v-model="currentTab">
      <v-tab-item
        v-for="i in tabs"
        :key="i.name"
        :value="`${i.name}`"
      >
        <v-card flat>
          <v-card-text  >
            <chart :chart-id='i.name'></chart>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

  </v-card>
</template>
<script>
import _ from 'lodash'
import Chart from './SingleChart' 
export default {
  components:{Chart},
  data: () => ({
    tabs:[
      {name:'a', label:'stock A', text:'jopa 1'},
      {name:'b', label:'stock B', text:'pizda 2'},
      {name:'c', label:'stock C', text:'hui 3'},
      {name:'d', label:'stock D', text:'putin!'},
    ],
    currentTab:'a',

  }),
  computed:{
    getCurrentTab(){
      
      return _.find(this.tabs, (i)=>(i.name===this.currentTab))
      }
  },
  watch:{
    currentTab(newv, oldv){
      console.debug('CCCC', newv,oldv)
    }
  }
};
</script>
