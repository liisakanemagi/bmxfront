<template>
<Modal :modal-is-open="logOutModalIsOpen"
  @event-close-modal = "$emit('event-close-modal')"

>

  <template #title>
    Logi välja?
  </template>

  <template #body>
    <img src="https://i.makeagif.com/media/2-06-2014/iNeqEY.gif" class="img-thumbnail">
  </template>

  <template #buttons>
    <button @click= "$emit('event-log-out-executed')" type="button" class="btn btn-dark">Jah</button>
    <button @click= "$emit('event-close-modal')" type="button" class="btn btn-link">Ei</button>
  </template>

</Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";


export default {
  name: 'LogOutModal',
  components: {Modal},
  props: {
    logOutModalIsOpen: Boolean

  }
}
</script>