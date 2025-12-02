<template>
  <nav>
    <router-link to="/">Home</router-link>


    <template v-if="isLoggedIn">
    <button  type="button" class="btn btn-secondary btn-sm"  >Logi välja</button>
    </template>

    <template v-else>
      <button @click="NavigationService.navigateToLoginView()" type="button" class="btn btn-secondary btn-sm ms-3"  >Logi sisse / registreeri</button>
    </template>


  </nav>
  <router-view @event-user-logged-in="updateNavMenu" />
</template>
<script>

import SessionStorageService from "@/services/SessionStorageService";
import NavigationService from "@/services/NavigationService";

export default {
  name: 'App',
  computed: {
    NavigationService() {
      return NavigationService
    }
  },


  //
  data() {
    return{
      isLoggedIn: false,
      isAdmin: false


      }

    },
  methods: {

    updateNavMenu() {
      this.isLoggedIn = SessionStorageService.isLoggedIn()
      this.isAdmin = SessionStorageService.isAdmin()

    },




  },


  }






</script>

