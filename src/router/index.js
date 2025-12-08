import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import ErrorView from "@/views/ErrorView.vue";
import LocationsView from "@/views/LocationView.vue";
import RegisterView from "@/views/RegisterView.vue";
import NewLocationView from "@/views/NewLocationView.vue";
import EditLocationView from "@/views/EditLocationView.vue";

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
        path: '/locations',
        name: 'locationsRoute',
        component: LocationsView
    },
    {
        path: '/register',
        name: 'registerRoute',
        component: RegisterView
    },
    {
        path: '/locations/new',
        name: 'newLocationRoute',
        component: NewLocationView
    },
    {
        path: '/edit-location',
        name: 'editLocationRoute',
        component: EditLocationView
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
