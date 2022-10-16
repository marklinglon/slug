// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {initI18n} from '@/utils/i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Meta from "vue-meta"
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(Meta)
Vue.use(ElementUI)

const i18n = initI18n('CN', 'US')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
