import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/app/Main.vue';
import Dashboard from '../views/app/Dashboard.vue';
import Todos from '../views/Todos.vue';
import History from '../views/app/History.vue';
import Nf from '../views/app/Nf.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/history',
        name: 'History',
        component: History,
      },
      {
        path: '/todos',
        name: 'Todos',
        component: Todos,
      },
      {
        path: '/Nf',
        name: 'Nf',
        component: Nf,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
