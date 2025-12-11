<template>
  <div>
    <h4>{{ location.locationName }}</h4>
    <p>{{ location.locationAddress }}</p>
    <LocationImage :image-data="location.locationImageData"/>
  </div>
</template>
<script>
import LocationImage from "@/components/map/LocationImage.vue";

export default {
  name: 'MapCard',
  components: {LocationImage},
  props: {
    location: {}
  }
}
</script>