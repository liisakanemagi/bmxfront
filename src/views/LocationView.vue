<template>
  <h1>Sõidukohad</h1>

  <div class="row d-flex justify-content-center mt-4">
    <div class="col d-flex flex-column col-3 gap-3 justify-content-center">
  <CountyDropdown :counties="counties" @event-new-county-selected="setNewCountyId"/>
      <LocationTypesCheckbox/>
      </div>
    <div class="col">
      <LocationsTable/>
    </div>
  </div>
  <div>

  </div>
</template>

<script>
import CountyDropdown from "@/components/location/CountyDropdown.vue";
import CountyService from "@/services/CountyService";
import NavigationService from "@/services/NavigationService";
import LocationService from "@/services/LocationService";
import LocationsTable from "@/components/location/LocationsTable.vue";
import LocationTypesCheckbox from "@/components/location/LocationTypesCheckbox.vue";

export default {
  name: 'LocationView',
  components: {LocationTypesCheckbox, LocationsTable, CountyDropdown},
  data() {
    return{

      filteredLocation:
      [
          {
            locationId: 0,
            locationName: '',
            locationAverageRating: 0,
            locationAddress: '',
            typeColorCode: '',
            countyName: '',
            locationImageData: '',
            isInFavourites: true
          }
          ],

    counties: [
      {
        countyId: 0,
        countyName: '',
        zoomLevel: 0,
        countyLng: null,
        countyLat: null
      }
    ],
      locations: {
        locationTypeId: 0,
        countyId: 0,
        locationName: '',
        countyName: '',
        locationDescription: '',
        typeColorCode: '',
        locationImageData: '',
        isInFavorites: false
      },

      LocationTags: [
        {
          tagId: 0,
          tagName: ''
        }
      ],
  }
},

methods: {
  getLocations() {
    LocationService.sendGetLocationsRequest()
        .then(response => this.locations = response.data)
        .catch(() => NavigationService.navigateToErrorView())
  },

  getCounties() {
    CountyService.sendGetCountiesRequest()
        .then(response => this.counties = response.data)
        .catch(() => NavigationService.navigateToErrorView())
  },

  setNewCountyId(selectedCountyId) {
    this.location.countyId = selectedCountyId
  },

},
  mounted() {
  this.getLocations()
  this.getCounties()
}
}
</script>