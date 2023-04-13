import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import HatChoice from '../views/HatChoice.vue'
import WaitingChoice from '../views/WaitingChoice.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz
    },
    {
      path: '/hatchoice',
      name: 'hatchoice',
      component: HatChoice,
    },
    {
      path: '/waitingchoice',
      name: 'waitingchoice',
      component: WaitingChoice,
    }
  ]
})

export default router
