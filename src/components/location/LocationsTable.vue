<template>
  <div class="container text-center">
    <div v-for="location in filteredLocations" class="row">
      <div class="col">
        Värviga pin
      </div>
      <div class="col">
        Nimi, aadress {{ filteredLocations.locationName }}, {{ filteredLocations.locationAddress }}
      </div>
      <div class="col">
        keskmine hinne {{ filteredLocations.locationRating }}
      </div>
      <div class="col">
        Pilt {{ filteredLocations.locationImage }}
      </div>
      <div v-if="isLoggedIn" class="col">
        Favorite y/n {{ filteredLocations.locationFavorite }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationsTable',
  props: {
    filteredLocations: Array
  },

}

</script>