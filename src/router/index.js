import Vue from 'vue'
import Router from 'vue-router'
import SlugRoot from '@/page/root/SlugRoot'
import SlugSet from '@/page/root/SlugSet'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/slugroot',
      name: 'slugroot',
      component: SlugRoot
    },
    {
      path: '/slugset',
      name: 'slugset',
      component: SlugSet
    },
  ]
})
