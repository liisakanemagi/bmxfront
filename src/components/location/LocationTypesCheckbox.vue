<template>
  <div>
  <h4>Sõidukoha tüübid:
  </h4>
    <div v-for="locationType in locationTypes" :key="LocationType.locationType.id" class="form-check">
      <input :checked="locationType.isAvailable" type="checkbox" class="form-check-input"
              @change="updateLocationType(locationType.locationTypeId, $event.target.checked)"
      >
      <label class="form-check-label">
        {{locationType.locationTypeName}}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationTypesCheckbox",
  props:{
    locationTypes: Array,
    },
  methods: {
    updateLocationType(locationTypeId, isAvailable) {
      let  updatedLocationType = {
        locationTypeId: locationTypeId,
        isAvailable: isAvailable
      }
      this.$emit('event-location-type-updated', updatedLocationType)
    }
  }
}
</script>
