<template>

  <div class="container text-center">
    <div class="row justify-content-center mb-5">
      <div class="col ">
        <h1>Sõidukohad</h1>
      </div>
    </div>
    <div class="row justify-content-center mb-5">
      <div class="col col-4 ">
        <LocationTypePins
            :location-types="locationTypes"
            @event-pin-toggled="updateLocationTypes"
        />
        <CountyDropdown :counties="counties" @event-new-county-selected="setSelectedCountyId"/>
      </div>
      <div class="col ">
        MAP placeholder
      </div>
    </div>
    <div class="row justify-content-center mb-5">
      <div class="col col-10 ">
        <LocationsTable :locations="locations"/>
      </div>
    </div>
  </div>
</template>

<script>
import CountyDropdown from "@/components/location/CountyDropdown.vue";
import CountyService from "@/services/CountyService";
import NavigationService from "@/services/NavigationService";
import LocationService from "@/services/LocationService";
import LocationsTable from "@/components/location/LocationsTable.vue";
import LocationTypePins from "@/components/location/LocationTypePins.vue";
import LocationTypeService from "@/services/LocationTypeService";
import FilterPin from "@/components/FilterPin.vue";
import SessionStorageService from "@/services/SessionStorageService";

export default {
  name: 'LocationView',
  components: {FilterPin, LocationTypePins, LocationsTable, CountyDropdown},
  data() {
    return {
      userId: 0,
      selectedCountyId: 0,
      locationTypeIds: [],

      locationTypes: [
        {
          locationTypeId: 0,
          locationTypeName: '',
          locationTypeColorCode: '',
          isSelected: true
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


      LocationTags: [
        {
          tagId: 0,
          tagName: ''
        }
      ],

      locations:
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

    }


  },

  methods: {

    getCounties() {
      CountyService.sendGetCountiesRequest()
          .then(response => this.counties = response.data)
          .catch(() => NavigationService.navigateToErrorView())
    },

    setSelectedCountyId(selectedCountyId) {
      this.selectedCountyId = selectedCountyId
    },
    getLocationTypes() {
      LocationTypeService.sendGetLocationTypesRequest()
          .then(response => this.handleLocationTypesResponse(response))
          .catch(() => NavigationService.navigateToErrorView())

    },

    handleLocationTypesResponse(response) {
      this.locationTypes = response.data
      this.generateLocationTypeIds()
      this.getFilteredLocations()
    },


    getFilteredLocations() {
      LocationService.sendGetFilteredLocationsRequest(this.userId, this.selectedCountyId, this.locationTypeIds, 0)
          .then(response => this.locations = response.data)
          .catch(() => NavigationService.navigateToErrorView())
    },

    updateLocationTypes(locationTypeId) {
      const item = this.locationTypes.find(
          type => type.locationTypeId === locationTypeId
      );

        item.isSelected = !item.isSelected
      this.generateLocationTypeIds()
    },

    generateLocationTypeIds() {
      this.locationTypeIds = this.locationTypes
          .filter(type => type.isSelected)
          .map(type => type.locationTypeId);
    }

  },



  mounted() {
    let userIsLoggedIn = SessionStorageService.isLoggedIn()
    if (userIsLoggedIn) {
        this.userId = SessionStorageService.getUserId()
    }
    this.getLocationTypes()
    this.getCounties()
  }
}
</script>