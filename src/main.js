import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BIcon, BIconBackspace } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.component('BIcon', BIcon)
Vue.component('BIconBackspace', BIconBackspace)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
