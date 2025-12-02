import router from "@/router";

export default {

    navigateToErrorView() {
        router.push({name: 'errorRoute'})
    },

    navigateToHomeView() {
        router.push({name:'homeRoute'})
    }
}