<template>
  <div class="container text-center">

    <div class="row justify-content-center">
      <div class="col-6">
        <AlertError :alert-error-message='alertErrorMessage' @event-alert-box-closed='resetAlertMessages'/>
        <AlertSuccess :alert-success-message="alertSuccessMessage" @event-alert-box-closed='resetAlertMessages'/>
      </div>
    </div>
    <div v-if="displayAllFields" class="row justify-content-center mt-3">
      <div class="col col-2">

        <div class="form-floating mb-3">
          <input v-model="userInfo.username" type="text" class="form-control" placeholder="Kasutajanimi">
          <label>Kasutajanimi</label>
        </div>

        <div class="form-floating mb-3">
          <input v-model="userInfo.email" type="text" class="form-control" placeholder="Email">
          <label>Email</label>
        </div>

        <div class="form-floating mb-3">
          <input v-model="userInfo.password" type="password" class="form-control" placeholder="Parool">
          <label>Parool</label>
        </div>

        <div class="form-floating mb-3">
          <input v-model="passwordRetype" type="password" class="form-control" placeholder="Korda parooli">
          <label>Korda parooli</label>
        </div>

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

import RegisterService from "@/services/RegisterService";
import AlertSuccess from "@/components/AlertSuccess.vue";
import NavigationService from "@/services/NavigationService";
import AlertError from "@/components/AlertError.vue";


export default {
  name: 'RegisterView',
  components: {AlertError, AlertSuccess},
  props: {},

  data() {
    return {
      alertErrorMessage: '',
      alertSuccessMessage: '',
      displayAllFields: true,

      passwordRetype: '',
      isPostingData: false,

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
      if (!this.allFieldsHaveCorrectInput()) {
        this.displayIncorrectInputAlert();
      } else if (!this.passwordsAreMatching()) {
        this.displayPasswordsNotMatchingAlert()
      } else {
        this.executeRegister();
      }
    },

    allFieldsHaveCorrectInput() {
      return this.userInfo.username !== '' && this.userInfo.password !== '' && this.userInfo.email !== '' && this.passwordRetype !== ''
    },

    passwordsAreMatching() {
      return this.userInfo.password === this.passwordRetype;
    },

    executeRegister() {
      this.startSpinner()
      RegisterService.sendPostRegisterRequest(this.userInfo)
          .then(() => this.handleRegisterResponse())
          .catch(error => this.handleRegisterError(error))
          .finally(() => this.stopSpinner())
    },

    handleRegisterResponse() {
      this.alertSuccessMessage = 'Uus kasuataja "' + this.userInfo.username + '" registreeritud!'
      this.hideAllFields()
      setTimeout(NavigationService.navigateToLoginView, 4000)
    },

    hideAllFields() {
      this.displayAllFields = false
    },

    resetAlertMessages() {
      this.alertSuccessMessage = ''
      this.alertErrorMessage = ''
    },

    resetAllFields() {
      this.userInfo.username = ''
      this.userInfo.password = ''
      this.userInfo.email = ''
      this.passwordRetype = ''

    },

    handleRegisterError(error) {
      this.errorResponse = error.response.data
      if (this.userAlreadyExists(error)) {
        this.alertErrorMessage = this.errorResponse.message
      } else {
        NavigationService.navigateToErrorView()
      }
    },

    userAlreadyExists(error) {
      return error.response.status === 403 && this.errorResponse.errorCode === 112;
    },

    startSpinner() {
      this.isPostingData = true
    },

    stopSpinner() {
      this.isPostingData = false
    },

    displayPasswordsNotMatchingAlert() {
      this.alertErrorMessage = 'Sisestatud paroolid ei kattu'
    },

    displayIncorrectInputAlert() {
      this.alertErrorMessage = 'Täida kõik väljad'
    },
  }
}
</script>