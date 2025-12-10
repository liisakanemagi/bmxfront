<template>
  <div class="container text-center">
    <div v-for="location in locations" class="row">
      <div class="col">
        Värviga pin
      </div>
      <div class="col">
        Nimi, aadress {{location.locationName}}, {{location.locationAddress}}
      </div>
      <div class="col">
        keskmine hinne {{location.locationRating}}
      </div>
      <div class="col">
        Pilt {{location.locationImage}}
      </div>
      <div v-if="isLoggedIn" class="col">
        Favorite y/n {{location.locationFavorite}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationsTable',
  props: {
    locations: Array,
    isLoggedIn: false,
  },

}

</script>