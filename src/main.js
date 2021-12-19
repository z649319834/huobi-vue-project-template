import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import { i18n } from '@/locales'
import { Button } from 'mint-ui'
import 'mint-ui/lib/style.css'
import {registerConsole} from '@/utils/vconsole'

import { api } from '@/api'

const components = [Button]
components.forEach((component) => {
  Vue.use(component)
})

Vue.config.productionTip = false

Vue.prototype.api = api

registerConsole()

new Vue({
  router,
  // store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
