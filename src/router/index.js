import Vue from 'vue'
import Router from 'vue-router'
import GitHub from '@/components/GitHub'
import Qiita from '@/components/Qiita'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/github',
      name: 'GitHub',
      component: GitHub
    },
    {
      path: '/qiita',
      name: 'Qiita',
      component: Qiita
    }
  ]
})
