import Vue from 'vue'
import Router from 'vue-router'
import SlugSet from '@/page/root/SlugSet'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'slugset',
      component: SlugSet
    },
  ]
})
