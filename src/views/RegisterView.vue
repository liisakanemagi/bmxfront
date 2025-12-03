<template>
  <div class="container text-center">

    <div class="row justify-content-center mt-3">
      <div class="col col-2">
        <div class="form-floating mb-3"></div>
        <div class="input-group">
          <input v-model="userinfo.username" type="text" class="form-control" placeholder="Kasutajanimi" aria-label="Username"
                 aria-describedby="visible-addon">
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col col-2">
        <div class="form-floating mb-3"></div>
        <input v-model="userinfo.email" type="text" class="form-control" placeholder="Email">
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
        <input v-model="userinfo.password" type="password" class="form-control" placeholder="Korda parooli">
      </div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-2">
        <button @click="executeRegister"
            class="btn btn-secondary btn-sm">Registreeri
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import LoginService from "@/services/LoginService";
import NavigationService from "@/services/NavigationService";
import AlertDanger from "@/components/AlertDanger.vue";
import RegisterService from "@/services/RegisterService";

export default {
  name: 'RegisterView',
  components: {AlertDanger},
  props: {},

  data() {
    return {

      passWord2:'',
      isPostingData: false,
      alertMessage:'',

      userinfo: {
        username: '',
        password: '',
        email:''
      },


      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },

  methods: {

    executeRegister(){
      if (this.userinfo.password === this.passWord2 ) {
        RegisterService.sendPostRegisterRequest(this.userInfo)
            .then()
            .catch()
            .finally()
      } else {
          this.alertMessage = 'Sisestatud paroolid ei kattu'

      }

    }

  }
}
</script>