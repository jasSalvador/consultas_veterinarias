import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewConsultationView from '../views/NewConsultationView.vue'
//import EditconsultationView from '../views/EditconsultationView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/newConsultation',
    name: 'newConsultation',
    component: NewConsultationView
  },
  {
    path: '/editConsultation/:id',
    name: 'editConsultation',
    component: () => import("@/views/EditConsultationView.vue"),
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
