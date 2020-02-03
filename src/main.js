import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BIcon, BIconBackspace, BIconCalendarFill } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VCalendar from 'v-calendar'
import Moment from 'moment'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.component('BIcon', BIcon)
Vue.component('BIconBackspace', BIconBackspace)
Vue.component('BIconCalendarFill', BIconCalendarFill)
Vue.use(VCalendar);
Vue.use(Moment);

window.Moment = Moment;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
