import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import HighchartsVue from "highcharts-vue";
import Highcharts from "highcharts";
import dataModule from "highcharts/modules/data";
import router from './router'
dataModule(Highcharts);
import VueConfetti from 'vue-confetti'
 
Vue.use(VueConfetti)
Vue.use(HighchartsVue);
import vueAwesomeCountdown from 'vue-awesome-countdown'

Vue.use(vueAwesomeCountdown, 'vac') // Component name, `countdown` and `vac` by default
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
