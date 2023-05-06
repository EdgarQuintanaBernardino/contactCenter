import { createRouter, createWebHistory } from 'vue-router';
import configRoutes from './configRoutes';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:configRoutes(), 
})
export default router
