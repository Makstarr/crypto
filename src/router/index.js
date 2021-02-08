import Vue from 'vue'
import VueRouter from 'vue-router'
import Wallet from '../views/Wallet.vue'
import Converter from '../views/Converter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Конвертер',
    component: Converter
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
