<template>
  <div class="container text-center">
    <div class="row justify-content-center mt-3">
      <div class="col col-2">
        <div class="form-floating mb-3"></div>
        <div class="input-group">
          <input v-model="userInfo.username" type="text" class="form-control" placeholder="Kasutajanimi" aria-label="Username"
                 aria-describedby="visible-addon">
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col col-2">
        <div class="form-floating mb-3"></div>
        <div class="input-group">
          <input v-model="userInfo.email" type="text" class="form-control" placeholder="Email" aria-label="Username"
                 aria-describedby="visible-addon">
        </div>
      </div>
    </div>
    <div class="row justify-content-center ">
      <div class="form-floating "></div>
      <div class="col col-2">
        <div class="form-floating mb-3"></div>
        <input v-model="userInfo.password" type="password" class="form-control" placeholder="Parool">
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="row col-2">
      <div class="form-floating mb-3"></div>
      <input v-model="password2" type="password" class="form-control" placeholder="Korda parooli">
    </div>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-2">
        <button @click="executeRegister" type="button" class="btn btn-secondary btn-sm" >
          Registreeri
        </button>
      </div>
    </div>
  </div>

</template>

<script>
import AlertDanger from "@/components/AlertDanger.vue";
import RegisterService from "@/services/RegisterService";

export default {
  name: 'RegisterView',
  components: {AlertDanger},
  data() {
    return {
      isPostingData: false,
      alertMessage: '',
      password2: '',

      errorResponse: {
        message:'',
        errorCode: 0
      },
      userInfo: {
        username: '',
        password: '',
        email: '',
      }
    }
  },
  methods: {
    executeRegister() {
      if (this.userInfo.password === this.password2){
      RegisterService.sendPostRegisterRequest(this.userInfo)
          .then()
          .catch()
      }else{
        // displayPasswordNotMatching(){
        // this.alertMessage = 'sisestatud paroolid ei kattu'
        // }
      }
    },


  },

}
</script>