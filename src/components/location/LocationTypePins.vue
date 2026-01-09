+<template>
  <div>
  <h4>Sõidukoha tüübid:
  </h4>
    <div v-for="locationType in locationTypes" :key="locationType.locationTypeId + '_' + locationType.isSelected" class="form-check">

      <FilterPin
            :locationTypeId="locationType.locationTypeId"
            :location-type-name="locationType.locationTypeName"
            :color-code="locationType.locationTypeColorCode"
            :is-selected="locationType.isSelected"
            @event-pin-toggled="$emit('event-pin-toggled', $event)"
        />

<!--      <input :checked="locationType.isSelected" type="checkbox" class="form-check-input"-->
<!--              @change="updateLocationType(locationType.locationTypeId, $event.target.checked)"-->
<!--      >-->
      <label class="form-check-label">
      </label>
    </div>
  </div>
</template>

<!--{-->
<!--locationTypeId: 0,-->
<!--locationTypeName: '',-->
<!--locationTypeColorCode: '',-->
<!--isSelected: true-->
<!--}-->

<script>
import FilterPin from "@/components/FilterPin.vue";

export default {
  name: "LocationTypePins",
  components: {FilterPin},
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
