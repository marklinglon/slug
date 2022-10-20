import Vue from 'vue'
import Router from 'vue-router'
import SlugSet from '@/page/root/SlugSet'
import SlugSetM from '@/page/root_m/SlugSetM'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'slugset',
      component: SlugSet
    },
    {
      path: '/m',
      name: 'slugset_m',
      component: SlugSetM
    },
  ]
})
