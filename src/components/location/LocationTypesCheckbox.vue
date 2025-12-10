<template>
  <div>
  <h4>Sõidukoha tüübid:
  </h4>
    <div>
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
    locationTypes: Array
  },
  computed: {
    locationTypeService() {
      return locationTypeService
    }
  }
}
</script>
