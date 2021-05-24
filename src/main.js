import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import dataModule from "highcharts/modules/data";
import router from './router'
dataModule(Highcharts);
import VueConfetti from 'vue-confetti'
import store from './store'
Vue.use(VueConfetti)

import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import Highcharts from "highcharts";
import Stock from "highcharts/modules/stock";
import HighchartsVue from "highcharts-vue";

Stock(Highcharts);
Vue.use(HighchartsVue);

Vue.use(VueLodash, { lodash: lodash })
import vueAwesomeCountdown from 'vue-awesome-countdown'

Vue.use(vueAwesomeCountdown, 'vac') // Component name, `countdown` and `vac` by default
Vue.config.productionTip = false;
// TODO:  this one to be injected by backend
Vue.prototype.$gamified = true;
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
