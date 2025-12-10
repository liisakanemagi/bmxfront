<template>
  <h1>Sõidukohad</h1>
  <div class="d-flex justify-content-center mt-4">
    <div class="d-flex flex-column col-3 gap-3 ">
  <CountyDropdown :counties="counties" @event-new-county-selected="setNewCountyId"/>
      </div>
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
      
      location: {
        locationTypeId: 0,
        countyId: 0,
        locationName: '',
        locationAddress: '',
        locationLng: null,
        locationLat: null,
        locationDescription: ''
      },
    counties: [
      {
        countyId: 0,
        countyName: '',
        zoomLevel: 0,
        countyLng: null,
        countyLat: null,
      }
    ]
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