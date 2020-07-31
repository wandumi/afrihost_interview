import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Modal from '../components/modal.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/Modal',
    name: 'Modal',
    component: Modal
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
