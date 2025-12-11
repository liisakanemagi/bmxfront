<template>
  <div>
    <img v-if="imageData === null || imageData === ''" src="../../assets/logo.png" class="img-thumbnail">
    <img v-else :src="imageData" class="img-thumbnail">
  </div>
</template>
<script>
export default {
  name: 'LocationImage',
  props: {
    imageData: String
  }
}
</script>