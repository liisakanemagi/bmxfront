import router from "@/router";

export default {

    navigateToErrorView() {
        router.push({name: 'errorRoute'})
    },

    navigateToHomeView() {
        router.push({name:'homeRoute'})
    },
    navigateToLoginView() {
        router.push({name:'loginRoute'})
    },
    navigateToLocationView() {
        router.push({name:'locationRoute'})
    },
    navigateToRegisterView(){
        router.push({name:'registerRoute'})
    }
}