<template>
  <div v-if="alertSuccess !==''" class="alert alert-success alert-dismissible" role="alert">
    {{alertSuccess}}

    <button @click="$emit('event-alert-box-closed')" type="button" class="btn-close"
            aria-label="Close"></button>
  </div>
</template>

<script>
export default {
  name: 'AlertSuccess',
  props: {
    alertSuccess: String
  }
}
</script>