<template>
  <LogOutModal :log-out-modal-is-open="logOutModalIsOpen"
               @event-close-modal="closeLogOutModal"
               @event-log-out-executed="executeLogOut"

  />
  <nav class="d-flex gap-2 justify-content-center">
    <router-link to="/">Home</router-link>
    <router-link to="/locations">Sõidukohad</router-link>
    <router-link v-if="isLoggedIn" to="/locations/new">Lisa Sõidukoht</router-link>

    <button v-if="isLoggedIn" @click="startLogOutProcess" type="button" class="btn btn-secondary btn-sm ms-3">
      Logi välja
    </button>

    <button v-else @click="navigateToLoginView" type="button" class="btn btn-secondary btn-sm ms-3">
      Logi sisse / registreeri
    </button>
  </nav>
  <router-view @event-user-logged-in="updateNavMenu"/>
</template>
<script>

import SessionStorageService from "@/services/SessionStorageService";
import NavigationService from "@/services/NavigationService";
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

    startLogOutProcess() {
      this.openLogOutModal()
    },

    openLogOutModal() {
      this.logOutModalIsOpen = true
    },

    closeLogOutModal() {
      this.logOutModalIsOpen = false
    },

    executeLogOut() {
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