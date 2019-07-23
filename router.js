import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index.vue'
import History from '@/pages/history/index'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{
      path: '/',
      name: 'index',
      component: Index,
      children: [{
        path: 'trade/:id',
        name: 'trade',
        component: Index
      }]
    },
    {
      path: '/history/:id',
      name: 'historyPage',
      component: History
    }]
  })
}
