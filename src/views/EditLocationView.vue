<template>
<h1>Muuda Sõidukohta {{locationId}}</h1>
  <div class="d-flex justify-content-center mt-4">
    <form class="d-flex flex-column col-3 gap-3">
      <div class="form-floating">
        <input type="text" class="form-control">
        <label>Nimi</label>
      </div>
      <div class="form-floating">
        <input  type="text" class="form-control">
        <label>Aadress</label>
      </div>
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here"
                  id="floatingTextarea2" style="height: 100px"></textarea>
        <label for="floatingTextarea2">Kirjeldus</label>
      </div>
      <LocationTypesDropdown :locationTypes="locationTypes" @event-new-location-type-selected="setNewLocationTypeId"/>
      <CountyDropdown :counties="counties" @event-new-county-selected="setNewCountyId"/>
      <div class="form-floating">
        <input type="number" class="form-control" min="-90" max="90">
        <label>Laiuskraad</label>
      </div>
      <div class="form-floating">
        <input  type="number" class="form-control" min="-180" max="180">
        <label>Pikkuskraad</label>
      </div>
      <button>

        <span class="btn btn-secondary btn-sm">Muuda asukoha infot</span>
      </button>
    </form>
  </div>


</template>

<script>
import AlertError from "@/components/AlertError.vue";
import AlertSuccess from "@/components/AlertSuccess.vue";
import LocationTypesDropdown from "@/components/location/LocationTypesDropdown.vue";
import CountyDropdown from "@/components/location/CountyDropdown.vue";

export default {
  name: 'EditLocationView',
  components: {CountyDropdown, LocationTypesDropdown, AlertSuccess, AlertError},
  data() {
    return {
      locationId: this.$route.params.id,
      // location: null
      alertErrorMessage: '',
      alertSuccessMessage: '',

      location: {
        locationTypeId: 0,
        countyId: 0,
        locationName: '',
        locationAddress: '',
        locationLng: null,
        locationLat: null,
        locationDescription: ''
      },

      locationTypes: [
        {
          locationTypeId: 0,
          locationTypeName: '',
          locationTypeColorCode: '',
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
        ]



    }
  },
  methods: {},
  beforeMount() {


  }
}
</script>