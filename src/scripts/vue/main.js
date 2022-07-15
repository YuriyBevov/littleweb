import Vue from 'vue'
import Calc from './Calc.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Calc)
}).$mount('#calculator')
