<template>
  <div class="container text-center mb-3">
    <div class="row justify-content-center mt-5">

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
          <button @click="executeLogin" class="btn btn-secondary btn-sm" type="button" :disabled="isFetchingData">
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

  export default {
    name: 'LoginView',
    props: {},

    data() {
      return {
        isFetchingData: false,
        username: '',
        password: '',

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


      executeLogin() {
        this.startSpinner()
        LoginService.sendGetLoginRequest(this.username, this.password)
            .then(response => this.loginResponse(response.data))
            .catch(error => this.errorResponse = error.response.data)
            .finally()


      },
      startSpinner(){
        this.isFetchingData = true
      }

    }




  }
  </script>