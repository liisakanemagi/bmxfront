<template>
  <div>
  <h4>Sõidukoha tüübid:
  </h4>
    <div v-for="locationType in locationTypes" :key="locationType.id">
      <input type="checkbox" class="form-check-input">
      <label>
        {{locationType.locationTypeName}}
      </label>

    </div>
  </div>
</template>

<script>
import locationTypeService from "@/services/LocationTypeService";

export default {
  name: "LocationTypesCheckbox",
  props:{
    locationTypes: Array,
    },

  methods: {
    filterLocationType(locationTypeId, ) {
      return locationTypeService
    }
  }
}
</script>
