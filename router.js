import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index.vue'
import History from '@/pages/history/index'
import Handbook from '@/pages/handbook/index'
import Handdirect from '@/pages/handbook/direct'
import Handcompensate from '@/pages/handbook/compensate'
import Handinsurance from '@/pages/handbook/insurance'
import Handinstructions from '@/pages/handbook/instructions/index'
import HandnounExplanation from '@/pages/handbook/nounExplanation'
import Handprice from '@/pages/handbook/price'
import HandusdtCompensate from '@/pages/handbook/usdtCompensate'
import HandusdtInsurance from '@/pages/handbook/usdtInsurance'
import HandusdtDirect from '@/pages/handbook/usdtDirect'
import HandregularDirect from '@/pages/handbook/regularDirect'
import HandusdtContract from '@/pages/handbook/usdtContract/index'
import HandregularContract from '@/pages/handbook/regularContract/index'
import HandregularInsurance from '@/pages/handbook/regularInsurance'
import HandprofitDeficit from '@/pages/handbook/profitDeficit'
import HandusdtProfitDeficit from '@/pages/handbook/usdtProfitDeficit'

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
    },
    {
      path: '/handbook',
      component: Handbook,
      children: [
        { path: '', component: Handdirect },
        { path: 'compensate/:id', component: Handcompensate },
        { path: 'insurance/:id', component: Handinsurance },
        { path: 'instructions', name: 'instructions', component: Handinstructions },
        { path: 'nounExplanation', component: HandnounExplanation },
        { path: 'price/:id', component: Handprice },
        { path: 'usdtCompensate/:id', component: HandusdtCompensate },
        { path: 'usdtInsurance/:id', component: HandusdtInsurance },
        { path: 'usdtDirect', component: HandusdtDirect },
        { path: 'regularDirect', component: HandregularDirect },
        { path: 'usdtContract', component: HandusdtContract },
        { path: 'regularContract', component: HandregularContract },
        { path: 'regularContract/insurance/:id', component: HandregularInsurance },
        { path: 'profitDeficit', component: HandprofitDeficit },
        { path: 'usdtProfitDeficit', component: HandusdtProfitDeficit }
      ]
    }]
  })
}
