import Vue from 'vue'
import Router from 'vue-router'
import LoginView from './views/LoginView.vue'
import MainView from './views/MainView.vue'
import AddView from './views/AddView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/main',
      name: 'main',
      component: MainView,
      children: [
        {
          path: 'list',
          name: 'list',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('./views/ListView.vue')
        },
        {
          path: 'mine',
          name: 'mine',
          component: () => import('./views/MineView.vue')
        }
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: AddView
    }
  ]
})
