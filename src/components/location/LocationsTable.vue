<template>
  <div class="container text-center">
    <div v-for="location in locations" :key="location.locationId" class="row">
      <div class="col">
        <Pin :color-code="location.typeColorCode" :location-type-name="location.locationTypeName"/>
      </div>
      <div class="col">
        {{ location.locationName }}, {{ location.locationAddress }}
      </div>
      <div class="col">
        {{ location.locationAverageRating }}
      </div>
      <div class="col">
        {{ location.locationImageData }}
      </div>
      <div v-if="isLoggedIn" class="col">
        {{ location.isInFavourites }}
      </div>
    </div>
  </div>

</template>

<script>
import SessionStorageService from "@/services/SessionStorageService";
import FilterPin from "@/components/FilterPin.vue";

export default {
  name: 'LocationsTable',
  components: {Pin: FilterPin},
  props: {
    locations: Array
  },
  data(){
    return {
      isLoggedIn: SessionStorageService.isLoggedIn()
    }
  }

}

</script>