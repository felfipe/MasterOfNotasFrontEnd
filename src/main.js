import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
//import Vuex from 'vuex'
import store from '@/store'
Vue.config.productionTip = false

//Vue.use(Vuex)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
