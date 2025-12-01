<template>
  <div class="container text-center">
    <div class="row justify-content-center mt-5">
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
        <button @click="executeLogin" type="button" class="btn btn-secondary btn-sm" :disabled="isFetchingData">
          <span v-if="isFetchingData" class="spinner-border spinner-border-sm btn-sm" aria-hidden="true"></span>
          <span class="btn btn-secondary btn-sm">Logi sisse</span>
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import LoginService from "@/service/LoginService";

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
        roleName: '',
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

      // todo> andmed loginResponse sisse
      // todo> andmed session storagesse
      // todo> navigeeeri j'rgmisele lehele

      // todo> catch (kuva alerti kus vaja, v]i naeigeeri UPS mdiagi l'ks valesti

    },

    startSpinner() {
      this.isFetchingData = true
    },


  }
}
</script>