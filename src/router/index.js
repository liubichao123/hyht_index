import Vue from 'vue'
import Router from 'vue-router'
// 复制插件
import VueClipboard from 'vue-clipboard2'

import index from '@/components/index'
import index0 from '@/components/index/index'
import collection from '@/components/index/collection'
import visit from '@/components/index/visit'
import integrate from '@/components/index/integrate'
import dashboard from '@/components/index/dashboard'

import index1 from '@/components/index1/index'
import index2 from '@/components/index2/index'
import index3 from '@/components/index3/index'
import index4 from '@/components/index4/index'
import index5 from '@/components/index5/index'
import index6 from '@/components/index6/index'
Vue.use(VueClipboard)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          name: 'index0',
          component: index0,
          children: [
            {
              path: '/',
              name: 'collection',
              component: collection
            },
            {
              path: '/visit',
              name: 'visit',
              component: visit
            },
            {
              path: '/integrate',
              name: 'integrate',
              component: integrate
            },
            {
              path: '/dashboard',
              name: 'dashboard',
              component: dashboard
            }
          ]
        },
        {
          path: 'index1',
          name: 'index1',
          component: index1
        },
        {
          path: 'index2',
          name: 'index2',
          component: index2
        },
        {
          path: 'index3',
          name: 'index3',
          component: index3
        },
        {
          path: 'index4',
          name: 'index4',
          component: index4
        },
        {
          path: 'index5',
          name: 'index5',
          component: index5
        },
        {
          path: 'index6',
          name: 'index6',
          component: index6
        }
      ]
    }
  ]
})
