import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Passage from '../views/Passage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/passage/:id', name: 'Passage', component: Passage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
