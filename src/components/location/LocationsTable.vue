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
        <StarRating :location-average-rating="location.locationAverageRating" />
        {{ location.locationAverageRating }}
      </div>
      <div class="col">
        <LocationImage :image-data="location.locationImageData"/>
      </div>
      <div v-if="isLoggedIn" class="col">
        <font-awesome-icon @click="removeFromFavorites(location.locationId)" v-if="location.isInFavourites" icon="fa-solid fa-heart" />
        <font-awesome-icon v-else @click="addToFavorites(location.locationId)" icon="fa-regular fa-heart" />
      </div>
    </div>
  </div>

</template>

<script>
import SessionStorageService from "@/services/SessionStorageService";
import FilterPin from "@/components/FilterPin.vue";
import StarRating from "@/components/StarRating.vue";
import LocationImage from "@/components/map/LocationImage.vue";

export default {
  name: 'LocationsTable',
  components: {LocationImage, StarRating, Pin: FilterPin},
  props: {
    userId: Number,
    locations: Array
  },
  data(){
    return {
      isLoggedIn: SessionStorageService.isLoggedIn()
    }
  },
  methods: {
    removeFromFavorites(locationId) {
      // todo: saada sõnum backi. eduka then() sees emiti teade ülesse, et updateToggle

      this.$emit('event-toggle-location-is-in-favourites', locationId)
    },

    addToFavorites(locationId) {

      // todo: saada sõnum backi. eduka then() sees emiti teade ülesse, et updateToggle

      this.$emit('event-toggle-location-is-in-favourites', locationId)
    },
  }

}

</script>