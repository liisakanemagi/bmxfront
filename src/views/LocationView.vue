<template>
  <h1>Sõidukohad</h1>
  <div>
    <CountyDropdown :counties="counties" @event-new-county-selected="setNewCountyId"/>

  </div>
</template>

<script>
import CountyDropdown from "@/components/location/CountyDropdown.vue";
import CountyService from "@/services/CountyService";
import NavigationService from "@/services/NavigationService";

export default {
  name: 'LocationView',
  components: {CountyDropdown},
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
        countyLat: null,
      }
    ],
      location: {
        locationTypeId: 0,
        countyId: 0,
        locationName: '',
        locationAddress: '',
        locationLng: null,
        locationLat: null,
        locationDescription: ''
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
  this.getCounties()
}
}
</script>