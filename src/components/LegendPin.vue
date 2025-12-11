<template>
      <font-awesome-icon
        icon="fa-solid fa-map-pin"
        :style="{ color: colorCode }"
    />
  <label>{{locationTypeName}}</label>

</template>

<script>
export default {
  name: 'LegendPin',
  props: {
    colorCode: {
      type: String,
      default: '#807b7b'
    },
    locationTypeName: {
      type: String,
      default: ''
    }
  }
}
</script>