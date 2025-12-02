<template>
<LogOutModal :log-out-modal-is-open="logOutModalIsOpen"
             @event-close-modal="closeLogOutModal"
             @event-log-out-executed="executeLogOut"

/>
  <nav>
    <router-link to="/">Home</router-link>
    <template v-if="isLoggedIn">
    <button @click="startLogOutProcess" type="button" class="btn btn-secondary btn-sm ms-3"  >Logi välja</button>
    </template>

    <template v-else>
      <button @click="NavigationService.navigateToLoginView()" type="button" class="btn btn-secondary btn-sm ms-3">Logi sisse / registreeri</button>
    </template>


  </nav>
  <router-view @event-user-logged-in="updateNavMenu" />
</template>
<script>

import SessionStorageService from "@/services/SessionStorageService";
import NavigationService from "@/services/NavigationService";
import LogOutModal from "@/components/modal/custom/LogOutModal.vue";

export default {
  name: 'App',
  components: {LogOutModal},
  computed: {
    NavigationService() {
      return NavigationService
    }
  },
  data() {
    return{
      isLoggedIn: false,
      isAdmin: false,
      logOutModalIsOpen: false

      }
    },
  methods: {

    updateNavMenu() {
      this.isLoggedIn = SessionStorageService.isLoggedIn()
      this.isAdmin = SessionStorageService.isAdmin()

    },
    startLogOutProcess() {
      this.openLogOutModal()
    },

    openLogOutModal() {
      this.logOutModalIsOpen= true
    },
    closeLogOutModal() {
      this.logOutModalIsOpen= false
    },

    executeLogOut() {
      this.closeLogOutModal()
      sessionStorage.clear()
      this.updateNavMenu()
      NavigationService.navigateToHomeView()
    },

  },

  mounted() {
    this.updateNavMenu()
  }


}






</script>

