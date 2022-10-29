import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import ElementTest from '../components/ui/ElementTest'
import like from '../components/animation/like'
import Game from './Game'
import VideoTest from './VideoTest'
import MainProcess from './MainProcess'

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
    },
    {
      path: '/games',
      name: 'games',
      component: Game
    },
    {
      path: '/MainProcess',
      name: 'MainProcess',
      component: MainProcess
    },
    {
      path: '/video',
      name: 'video',
      component: VideoTest
    }
  ]
})
