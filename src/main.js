import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueInputAutowidth from 'vue-input-autowidth'
import router from './router'

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueInputAutowidth);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
