import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import ErrorView from "@/views/ErrorView.vue";
import LocationView from "@/views/LocationView.vue";
import registerView from "@/views/RegisterView.vue";
import newLocationView from "@/views/NewLocationView.vue";

const routes = [
    {
        path: '/',
        name: 'homeRoute',
        component: HomeView,
    },
    {
        path: '/login',
        name: 'loginRoute',
        component: LoginView,

    },
    {
        path: '/error',
        name: 'errorRoute',
        component: ErrorView,
    },
    {
        path: '/location',
        name: 'locationRoute',
        component: LocationView
    },
    {
        path: '/register',
        name: 'registerRoute',
        component: registerView
    },
    {
        path: '/new-location',
        name: 'locationRoute',
        component: newLocationView
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
