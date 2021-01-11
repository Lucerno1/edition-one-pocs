import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.config.productionTip = false

Vue.use(VueObserveVisibility)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
