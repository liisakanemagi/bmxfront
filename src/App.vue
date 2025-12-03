<template>
  <LogOutModal :log-out-modal-is-open="logOutModalIsOpen"
               @event-close-modal="closeLogOutModal"
               @event-log-out-executed ="executeLogOut"

  />
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/location">Sõidukohad</router-link>

    <template v-if="isLoggedIn">
      <button @click="startLogOutProcess" type="button" class="btn btn-secondary btn-sm ms-3">Logi valja</button>
    </template>
    <template v-else>
      <button @click="navigateToLoginView" type="button" class="btn btn-secondary btn-sm ms-3">Logi sisse / registreeri</button>
    </template>

  </nav>
  <router-view @event-user-logged-in="updateNavMenu"/>
</template>
<script>

import SessionStorageService from "@/service/SessionStorageService";
import NavigationService from "@/service/NavigationService";
import LogOutModal from "@/components/modal/LogOutModal.vue";

export default {

  name: 'App',
  components: {LogOutModal},

  data() {
    return {
      isLoggedIn: false,
      isAdmin: false,
      logOutModalIsOpen: false
    }
  },

  methods: {

    startLogOutProcess(){
      this.openLogOutModal()
    },

    openLogOutModal(){
      this.logOutModalIsOpen = true
    },

    closeLogOutModal(){
      this.logOutModalIsOpen = false
    },

    executeLogOut(){
      this.closeLogOutModal()
      sessionStorage.clear()
      this.updateNavMenu()
      NavigationService.navigateToHomeView()
    },

    updateNavMenu() {
      this.isLoggedIn = SessionStorageService.isLoggedIn();
      this.isAdmin = SessionStorageService.isAdmin()
    },

    navigateToLoginView() {
      NavigationService.navigateToLoginView()
    },

  },
  mounted() {
    this.updateNavMenu();
  }
}


</script>