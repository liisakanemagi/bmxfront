<template>
  <div class="container text-center">

    <div class="row justify-content-center">
      <div class="col-6">
        <AlertDanger :alert-message='alertMessage' @event-alert-box-closed='resetAlertMessage'/>
      </div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col col-2">
        <div class="form-floating mb-3"></div>
        <div class="input-group">
          <input v-model="username" type="text" class="form-control" placeholder="Kasutajanimi" aria-label="Username"
                 aria-describedby="visible-addon">
        </div>
      </div>
    </div>
    <div class="row justify-content-center ">
      <div class="form-floating "></div>
      <div class="col col-2">
        <div class="form-floating mb-3"></div>
        <input v-model="password" type="password" class="form-control" placeholder="Parool">
      </div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-2">
        <button @click="processLogin" type="button" class="btn btn-secondary btn-sm" :disabled="isFetchingData">
          <span v-if="isFetchingData" class="spinner-border spinner-border-sm btn-sm" aria-hidden="true"></span>
          <span class="btn btn-secondary btn-sm">Logi sisse</span>
        </button>
        <div class="mt-3">
          <button @click="navigateToRegisterView" type="button" class="btn btn-link btn-sm">Registreeri</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import LoginService from "@/services/LoginService";
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
      alertMessage: '',

      loginResponse: {
        userId: 0,
        roleName: '',
      },

      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },

  methods: {

    processLogin() {
      if (this.username !== '' && this.password !== '') {
        this.executeLogin();
      } else {
        this.displayIncorrectInputAlert();
      }
    },

    executeLogin() {
      this.startSpinner()
      LoginService.sendGetLoginRequest(this.username, this.password)
          .then(response => this.handleLoginResponse(response))
          .catch(error => this.handleLoginError(error))
          .finally(() => this.isFetchingData = false)
    },

    startSpinner() {
      this.isFetchingData = true
    },

    displayIncorrectInputAlert() {
      this.alertMessage = 'Täida kõik väljad'
    },

    handleLoginResponse(response) {
      this.loginResponse = response.data;
      this.setSessionStorageItems();
      this.updateNavMenuUserIsLoggedIn()
      NavigationService.navigateToHomeView()
    },

    setSessionStorageItems() {
      sessionStorage.setItem('userId', this.loginResponse.userId)
      sessionStorage.setItem('roleName', this.loginResponse.roleName)
    },

    updateNavMenuUserIsLoggedIn() {
      this.$emit('event-user-logged-in')
    },

    handleLoginError(error) {
      this.errorResponse = error.response.data
      if (this.incorrectCredentialsInput(error)) {
        this.alertMessage = this.errorResponse.message
      } else {
        NavigationService.navigateToErrorView()
      }
    },

    incorrectCredentialsInput(error) {
      return error.response.status === 403 && this.errorResponse.errorCode === 111;
    },

    navigateToRegisterView() {
      NavigationService.navigateToRegisterView()
    },

    resetAlertMessage() {
      this.alertMessage = ''
    },
  }
}
</script>