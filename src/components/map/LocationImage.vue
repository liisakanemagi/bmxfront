<template>
  <div>
    <img v-if="imageData === null || imageData === ''" src="https://www.shutterstock.com/image-vector/extreme-slogan-cartoon-cat-riding-600w-1976858315.jpg" class="img-thumbnail">
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