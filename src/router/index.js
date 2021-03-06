import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/login',
    name: 'login',
    movieId: '',
    component: () => import( '../views/LoginView.vue')
  },

  {
    path: '/movie/:movieId',
    name: 'movie',
    movieId: '',
    component: () => import( '../views/MovieView.vue')
  },
  
  {
    path: '/films-favoris',
    name: 'favoris',

    component: () => import( '../views/FavoriView.vue')
  },
  {
    path: '/film-a-voir',
    name: 'watchlist',

    component: () => import( '../views/WatchListView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
