import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ElementTest from '../components/ui/ElementTest'
import like from '../components/animation/like'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/UI',
      name: 'UI',
      component: ElementTest
    },
    {
      path: '/Lottie',
      name: 'Lottie',
      component: like
    }
  ]
})
