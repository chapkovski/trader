import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import HighchartsVue from "highcharts-vue";
import Highcharts from "highcharts";
import dataModule from "highcharts/modules/data";
import router from './router'
dataModule(Highcharts);
import lodash from 'lodash'
import VueLodash from 'vue-lodash'
Vue.use(VueLodash, lodash)
Vue.use(HighchartsVue);
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
