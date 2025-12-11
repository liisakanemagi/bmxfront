<template>
  <h1>{{ location.locationName }}</h1>
  <font-awesome-icon icon="fa-solid fa-pen-to-square" />
  <div class="d-flex justify-content-center mt-4">
    <form class="d-flex flex-column col-3 gap-3">
      <AlertError :alert-error-message='alertErrorMessage' @event-alert-box-closed='resetAlertMessages'/>
      <AlertSuccess :alert-success-message="alertSuccessMessage" @event-alert-box-closed='resetAlertMessages'/>
      <div class="form-floating">
        <input v-model="location.locationName" :disabled="isView" type="text" class="form-control">
        <label>Nimi</label>
      </div>
      <div class="form-floating">
        <input v-model="location.locationAddress" :disabled="isView" type="text" class="form-control">
        <label>Aadress</label>
      </div>
      <div class="form-floating">
        <textarea v-model="location.locationDescription" :disabled="isView" class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2" style="height: 100px"></textarea>
        <label for="floatingTextarea2">Kirjeldus</label>
      </div>
      <LocationTypesDropdown :locationTypes="locationTypes" :selected-location-type-id="location.locationTypeId"
                             :disabled="isView" @event-new-location-type-selected="setNewLocationTypeId"/>
      <CountyDropdown :counties="counties" :selected-county-id="location.countyId" :disabled="isView"
                      @event-new-county-selected="setNewCountyId"/>
      <div class="form-floating">
        <input v-model="location.locationLat" :disabled="isView" type="number" class="form-control" min="-90" max="90">
        <label>Laiuskraad</label>
      </div>
      <div class="form-floating">
        <input v-model="location.locationLng" :disabled="isView" type="number" class="form-control" min="-180"
               max="180">
        <label>Pikkuskraad</label>
      </div>
      <button type="button" class="btn btn-secondary btn-sm">Salvesta</button>
      <hr>
      <div class="d-flex align-items-center gap-3">
        <h1 class="mb-0">Pildid</h1>
        <ImageInput ref="imageInput" @event-new-image-selected = "handleImageSelected"/>
      </div>
      <div>
        <button @click="addImage" type="button" class="btn btn-secondary btn-sm">Lisa pilt</button>
      </div>
      <hr>
      <div class="d-flex align-items-center gap-3">
        <h1 class="mb-0">Tagid</h1>
<!--        <font-awesome-icon icon="fa-solid fa-plus" style="cursor: pointer" @click="addTag"/>-->
        <TagsDropdown :tags="tags" @event-new-locationTag-selected = "setSelectedLocationTagId"/>
      </div>
      <div>
        <button @click="addLocationTag" type="button" class="btn btn-secondary btn-sm">Lisa tag</button>
      </div>

    </form>
  </div>
</template>

<script>
import AlertError from "@/components/AlertError.vue";
import AlertSuccess from "@/components/AlertSuccess.vue";
import LocationTypesDropdown from "@/components/location/LocationTypesDropdown.vue";
import CountyDropdown from "@/components/location/CountyDropdown.vue";
import LocationService from "@/services/LocationService";
import NavigationService from "@/services/NavigationService";
import LocationTypeService from "@/services/LocationTypeService";
import CountyService from "@/services/CountyService";
import TagsDropdown from "@/components/location/TagsDropdown.vue";
import TagService from "@/services/TagService";
import ImageInput from "@/components/Image/ImageInput.vue";
import LocationImageService from "@/services/LocationImageService";

export default {
  name: 'EditLocationView',
  components: {ImageInput, TagsDropdown, CountyDropdown, LocationTypesDropdown, AlertSuccess, AlertError},
  data() {
    return {
      selectedTagId:0,
      isView: true,
      locationId: Number(this.$route.params.id),
      alertErrorMessage: '',
      alertSuccessMessage: '',

      location: {
        locationTypeId: 0,
        countyId: 0,
        locationName: '',
        locationAddress: '',
        locationLng: 0,
        locationLat: 0,
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
      tags:
          [
            {
              tagId:0,
              tagName: ''
            }
          ],
      locationTags:
          {
            locationId: 0,
            tagId: 0,
            tagName: ''
          },

      locationImage:
    {
      locationId: 0,
      locationImageData: ''
    }

    }
  },
  methods: {

    getLocation() {
      LocationService.sendGetLocationRequest(this.locationId)
          .then(response => this.location = response.data)
          .catch()
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

    getTags(){
    TagService.sendGetTagsRequest()
        .then(response =>this.tags = response.data)
        .catch(() => NavigationService.navigateToErrorView())
    },

    setSelectedLocationTagId(selectedTagId){
      this.selectedTagId = selectedTagId
    },

    addLocationTag(){
      this.locationTags.locationId = this.locationId
      this.locationTags.tagId =this.selectedTagId
      TagService.sendPostLocationTagRequest(this.locationTags)
          .then(() => this.getLocationTags())
          .catch(() => NavigationService.navigateToErrorView())
        //Todo parandada tagi lisamine, vale andmevorming.
    },

    handleImageSelected(imageData) {
      this.locationImage.locationId = this.locationId
      this.locationImage.locationImageData = imageData



    },

    addImage(){
      LocationImageService.sendPostLocationImageRequest(this.locationImage)
          .then(() => this.alertSuccessMessage = 'Pilt lisatud')
          .catch(() => NavigationService.navigateToErrorView())
    },

    getLocationTags() {

    },


    resetAlertMessages() {
      this.alertSuccessMessage = ''
      this.alertErrorMessage = ''
    },

  },
  mounted() {
    this.getLocation()
    this.getLocationTypes()
    this.getCounties()
    this.getTags()
    this.getLocationTags()
  }
}
</script>