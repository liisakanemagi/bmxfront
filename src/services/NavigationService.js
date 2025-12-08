import router from "@/router"

export default {

    navigateToErrorView (){
  //      router.push({name:'errorRoute'})
    },

    navigateToHomeView(){
        router.push({name: 'homeRoute'})
    },

    navigateToLoginView(){
        router.push({name: 'loginRoute'})
    },

    navigateToRegisterView(){
        router.push({name: 'registerRoute'})
    },

    navigateToEditLocationView(locationId){
        router.push({name: 'editLocationRoute', params:{id: locationId}})
    }
}