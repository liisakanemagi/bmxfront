<template>
  <h1>Lisa sõidukoht</h1>
  <div class="d-flex justify-content-center mt-4">
    <form @submit="processAddLocation" class="d-flex flex-column col-3 gap-3">
      <AlertError :alert-error-message='alertErrorMessage' @event-alert-box-closed='resetAlertMessages'/>
      <AlertSuccess :alert-success-message="alertSuccessMessage" @event-alert-box-closed='resetAlertMessages'/>
      <div class="form-floating">
        <input v-model="location.locationName" type="text" class="form-control">
        <label>Nimi</label>
      </div>
      <div class="form-floating">
        <input v-model="location.locationAddress" type="text" class="form-control">
        <label>Aadress</label>
      </div>
      <div class="form-floating">
        <textarea v-model="location.locationDescription" class="form-control" placeholder="Leave a comment here"
                  id="floatingTextarea2" style="height: 100px"></textarea>
        <label for="floatingTextarea2">Kirjeldus</label>
      </div>
      <LocationTypesDropdown :locationTypes="locationTypes" @event-new-location-type-selected="setNewLocationTypeId"/>
      <CountyDropdown :counties="counties" @event-new-county-selected="setNewCountyId"/>
      <div class="form-floating">
        <input v-model="location.locationLat" type="number" class="form-control" min="-90" max="90">
        <label>Laiuskraad</label>
      </div>
      <div class="form-floating">
        <input v-model="location.locationLng" type="number" class="form-control" min="-180" max="180">
        <label>Pikkuskraad</label>
      </div>
      <button
              class="btn btn-secondary btn-sm" :disabled="isPostingData">
        <span v-if="isPostingData" class="spinner-border spinner-border-sm btn-sm" aria-hidden="true"></span>
        <span class="btn btn-secondary btn-sm">Edasi</span>
      </button>
    </form>
  </div>
</template>

<script>
import NavigationService from "@/services/NavigationService";
import LocationTypesDropdown from "@/components/location/LocationTypesDropdown.vue";
import CountyDropdown from "@/components/location/CountyDropdown.vue";
import AlertError from "@/components/AlertError.vue";
import AlertSuccess from "@/components/AlertSuccess.vue";
import LocationTypeService from "@/services/LocationTypeService";
import CountyService from "@/services/CountyService";
import LocationService from "@/services/LocationService";

export default {
  name: 'NewLocationView',
  components: {AlertSuccess, AlertError, CountyDropdown, LocationTypesDropdown},
  data() {
    return {
      userId: Number(sessionStorage.getItem('userId')),
      isPostingData: false,
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
      ],
      errorResponse: {
        message: '',
        errorCode: 0
      }
    }
  },
  methods: {
    processAddLocation(e) {
      e.preventDefault()
      this.handleInputErrorMessages();
      if (this.allFieldsHaveCorrectInput())
        this.executeAddLocation();
    },

    handleInputErrorMessages() {
      if (this.location.locationName === '' || this.location.locationAddress === ''
          || this.location.locationDescription === '' || this.location.locationLat === null
          || this.location.locationLng === null) {
        this.alertErrorMessage = 'Täida kõik väljad'
      } else if (this.location.countyId === 0) {
        this.alertErrorMessage = 'Vali maakond'
      } else if (this.location.locationTypeId === 0) {
        this.alertErrorMessage = 'Vali sõidukohatüüp'
      }
    },

    allFieldsHaveCorrectInput() {
      return this.alertErrorMessage === '';
    },

    executeAddLocation() {
      this.startSpinner()
      LocationService.sendPostLocationRequest(this.userId, this.location)
          .then(response => NavigationService.navigateToEditLocationView(response.data))
          .catch(error => this.handleAddLocationError(error))
          .finally(() => this.stopSpinner())
    },

    handleAddLocationError(error) {
      this.errorResponse = error.response?.data
      if (this.locationNameAlreadyExists(error)) {
        this.displayLocationNameAlreadyExists();
      } else {
        NavigationService.navigateToErrorView()
      }
    },

    locationNameAlreadyExists(error) {
      return error.response.status === 403 && this.errorResponse.errorCode === 113;
    },

    displayLocationNameAlreadyExists() {
      this.alertErrorMessage = this.errorResponse.message
    },

    getLocationTypes() {
      LocationTypeService.sendGetLocationTypesRequest()
          .then(response => this.locationTypes = response.data)
          .catch(() => NavigationService.navigateToErrorView())
    },

    getCounties() {
      CountyService.sendGetCountiesRequest()
          .then(response => this.counties = response.data)
          .catch(() => NavigationService.navigateToErrorView())
    },

    setNewLocationTypeId(selectedLocationTypeId) {
      this.location.locationTypeId = selectedLocationTypeId
    },

    setNewCountyId(selectedCountyId) {
      this.location.countyId = selectedCountyId
    },

    resetAlertMessages() {
      this.alertErrorMessage = ''
      this.alertSuccessMessage = ''
    },

    startSpinner() {
      this.isPostingData = true
    },

    stopSpinner() {
      this.isPostingData = false
    },
  },
  mounted() {
    this.getLocationTypes()
    this.getCounties()
  }
}
</script>