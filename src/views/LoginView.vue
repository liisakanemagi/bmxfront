<template>
  <div class="container text-center mb-3">
    <div class="row justify-content-center">
      <div class="col-6">
        <AlertDanger :alert-message="alertMessage" @event-alert-box-closed="resetAlertMessage" />
      </div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col col-2">
        <div class="mb-3">
          <div class="input-group mb-3">
            <input v-model="username" type="text" class="form-control" placeholder="Kasutajanimi" aria-label="Username">

          </div>
        </div>
      </div>

    </div>
    <div class="row justify-content-center">

      <div class="col col-2">
        <div class="input-group mb-3">
          <input v-model="password" type="password" class="form-control" placeholder="Parool" aria-label="Username">
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-2">
        <!--  <button @click="executeLogin" type="button" class="btn btn-secondary btn-sm ">Logi sisse</button>
  -->
          <button @click="processLogin" class="btn btn-secondary btn-sm" type="button" :disabled="isFetchingData">
            <span v-if="isFetchingData" class="spinner-border spinner-border-sm btn-sm" aria-hidden="true"></span>
            <span class="btn btn-secondary btn-sm" role="status">Logi sisse</span>
          </button>


        </div>
      </div>
    </div>
  </template>

  <script>
  import LoginService from "@/services/LoginService";
  import {start} from "@popperjs/core";
  import errorView from "@/views/ErrorView.vue";
  import NavigationService from "@/services/NavigationService";
  import AlertDanger from "@/components/AlertDanger.vue";

  export default {
    name: 'LoginView',
    components: {AlertDanger},
    props: {},

    data() {
      return {
        isFetchingData: false,
        username: '',
        password: '',
        alertMessage:'',

        loginResponse: {
          userId: 0,
          roleName: ''
        },

        errorResponse: {
          message: '',
          errorCode: 0
        }
      }
    },
    methods: {

      processLogin() {
        if (this.username!=='' && this.password!=='') {
          this.executeLogin();
        } else {
          this.displayIncorrectInputAlert();
        }
      },

      displayIncorrectInputAlert() {
        this.alertMessage='Täida kõik väljad'
      },


      executeLogin() {
        this.startSpinner()
        LoginService.sendGetLoginRequest(this.username, this.password)
            .then(response => this.handleLoginResponse(response))
            .catch(error => this.handleLoginError(error))
            .finally(() => this.isFetchingData=false)



      },

      handleLoginResponse(response) {
        this.loginResponse = response.data;
        sessionStorage.setItem('userId', this.loginResponse.userId)
        sessionStorage.setItem('roleName', this.loginResponse.roleName)
        this.updateNavMenuUserIsLoggedIn()

        NavigationService.navigateToHomeView()
      },

      updateNavMenuUserIsLoggedIn() {
        this.$emit('event-user-logged-in')

      },


      startSpinner(){
        this.isFetchingData = true
      },

      handleLoginError(error) {
        this.errorResponse = error.response.data
        if (error.response.status === 403 && this.errorResponse.errorCode === 111) {

          this.alertMessage =this.errorResponse.message

        }
        else {
            NavigationService.navigateToErrorView();
        }


      },
      resetAlertMessage() {
        this.alertMessage=''

      },




    }




  }
  </script>