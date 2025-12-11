<template>
  <font-awesome-icon v-if="isSelected" @click="pinToggled"
                     icon="fa-solid fa-map-pin"
                     :style="{ color: colorCode }"
  />
  <font-awesome-icon v-else @click="pinToggled"
                     icon="fa-solid fa-map-pin"
                     style=" color: #807b7b"
  />
  <label>{{ locationTypeName }}</label>
</template>

<script>
export default {
  name: 'FilterPin',
  props: {

    locationTypeId: Number,

    locationTypeName: {
      type: String,
      default: ''
    },

    colorCode: String,

    isSelected: Boolean
  },
  methods: {
    pinToggled() {
      this.$emit('event-pin-toggled', this.locationTypeId)
    },
  }
}
</script>