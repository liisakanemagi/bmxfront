<template>
  <h1>Sõidukohad</h1>

  <div class="row d-flex justify-content-center mt-4">
    <div class="col d-flex flex-column col-3 gap-3 justify-content-center">
      <CountyDropdown :counties="counties" @event-new-county-selected="setNewCountyId"/>
      <LocationTypesCheckbox/>
    </div>
    <div class="col">

    </div>
  </div>
  <div>
    <LocationsTable :locations="locationsTable"/>
  </div>
</template>

<script>
import CountyDropdown from "@/components/location/CountyDropdown.vue";
import CountyService from "@/services/CountyService";
import NavigationService from "@/services/NavigationService";
import LocationService from "@/services/LocationService";
import LocationsTable from "@/components/location/LocationsTable.vue";
import LocationTypesCheckbox from "@/components/location/LocationTypesCheckbox.vue";
import LocationTypeService from "@/services/LocationTypeService";

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
      locationsTable: [],

      // See on vajalik, et getLocationTypes() meetod saaks andmed salvestada
      locationTypes: [],

      // See on vajalik, et setNewCountyId() meetod saaks korrektselt töötada
      // Tavaliselt hoitakse siin filtrite valikuid
      filters: {
        countyId: null
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
    getLocationTypes() {
      LocationTypeService.sendGetLocationTypeRequest()
          .then(response => this.locationTypes = response.data)
          .catch(() => NavigationService.navigateToErrorView())

    },
    getFilteredLocations() {
      LocationService.sendGetFilteredLocationsRequest()
          .then(response => this.filteredLocation = response.data)
          .catch(() => NavigationService.navigateToErrorView())
    },
  },
  mounted() {
    this.getLocations()
    this.getCounties()
    this.getLocationTypes()
    this.getFilteredLocations()
  }
}
</script>