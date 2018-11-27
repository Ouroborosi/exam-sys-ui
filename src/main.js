import Vue from 'vue'
import App from './App.vue'
import router from './router'

/* import vue material components*/
import {MdContent, MdButton, MdCard} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

Vue.use(MdContent)
Vue.use(MdButton)
Vue.use(MdCard)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
