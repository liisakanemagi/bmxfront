<template>
  <div class="container text-center">

    <div class="row justify-content-center">
      <div class="col-6">
        <AlertDanger :alert-message='alertMessage' @event-alert-box-closed='resetAlertMessage'/>
        <AlertSuccess :alert-success="successMessage" @event-alert-box-closed='resetAlertMessage'/>
      </div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col col-2">
        <div class="form-floating mb-3"></div>
        <div class="input-group">
          <input v-model="userInfo.username" type="text" class="form-control" placeholder="Kasutajanimi"
                 aria-label="Username"
                 aria-describedby="visible-addon">
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col col-2">
        <div class="form-floating mb-3"></div>
        <input v-model="userInfo.email" type="text" class="form-control" placeholder="Email">
      </div>
    </div>
    <div class="row justify-content-center ">
      <div class="form-floating "></div>
      <div class="col col-2">
        <div class="form-floating mb-3"></div>
        <input v-model="password2" type="password" class="form-control" placeholder="Parool">
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col col-2">
        <div class="form-floating mb-3"></div>
        <input v-model="userInfo.password" type="password" class="form-control" placeholder="Korda parooli">
      </div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-2">
        <button @click="processRegister"
                class="btn btn-secondary btn-sm" :disabled="isPostingData">
          <span v-if="isPostingData" class="spinner-border spinner-border-sm btn-sm" aria-hidden="true"></span>
          <span class="btn btn-secondary btn-sm">Registreeri</span>
        </button>
      </div>
    </div>
  </div>

</template>

<script>

import AlertDanger from "@/components/AlertDanger.vue";
import RegisterService from "@/services/RegisterService";
import AlertSuccess from "@/components/AlertSuccess.vue";
import NavigationService from "@/services/NavigationService";


export default {
  name: 'RegisterView',
  components: {AlertSuccess, AlertDanger},
  props: {},

  data() {
    return {

      password2: '',
      isPostingData: false,
      alertMessage: '',
      successMessage: '',

      userInfo: {
        username: '',
        password: '',
        email: ''
      },

      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },

  methods: {

    processRegister() {
      if (this.allFieldsHaveCorrectInput()) {
        this.executeRegister();
      } else {
        this.displayIncorrectInputAlert();
      }
    },

    allFieldsHaveCorrectInput() {
      return this.userInfo.username !== '' && this.userInfo.password !== '' && this.userInfo.email !== '' && this.password2 !== '';
    },

    executeRegister() {
      if (this.passwordsAreMatching()) {
        this.startSpinner()
        RegisterService.sendPostRegisterRequest(this.userInfo)
            .then(() => this.handleRegisterResponse())
            .catch(error => this.handleRegisterError(error))
            .finally(() => this.isPostingData = false)
      } else {
        this.passwordsNotMatching();
      }
    },

    passwordsAreMatching() {
      return this.userInfo.password === this.password2;
    },

    startSpinner() {
      this.isPostingData = true
    },


    handleRegisterResponse() {
      this.successMessage = 'Uus kasuataja "' + this.userInfo.username + '" registreeritud!'
      setTimeout(this.resetAlertMessage, 4000)
      this.resetAllFields()
      setTimeout(() => {
            NavigationService.navigateToLoginView()
          }, 4000
      )
    },

    resetAlertMessage() {
      this.successMessage = ''
      this.alertMessage = ''
    },

    resetAllFields() {
      this.userInfo.username = ''
      this.userInfo.password = ''
      this.userInfo.email = ''
      this.password2 = ''

    },

    handleRegisterError(error) {
      this.errorResponse = error.response.data
      if (this.userAlreadyExists(error)) {
        this.alertMessage = this.errorResponse.message
      } else {
        NavigationService.navigateToErrorView()
      }
    },

    userAlreadyExists(error) {
      return error.response.status === 403 && this.errorResponse.errorCode === 112;
    },

    passwordsNotMatching() {
      this.alertMessage = 'Sisestatud paroolid ei kattu'
    },

    displayIncorrectInputAlert() {
      this.alertMessage = 'Täida kõik väljad'
    },
  }
}
</script>