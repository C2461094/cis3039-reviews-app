import { createRouter, createWebHistory } from 'vue-router';
import ListDevices from '@/views/devices/ListDevices.vue';

const routes = [
  {
    path: '/',
    redirect: '/devices',
  },
  {
    path: '/devices',
    name: 'Devices',
    component: ListDevices,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
