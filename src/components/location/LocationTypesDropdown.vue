<template>
  <select @change="selectNewLocationType($event.target.value)" :value="selectedLocationTypeId" class="form-select">
    <option selected :value="0">Kõik sõidukohatüübid</option>
    <option v-for="locationType in locationTypes" :key="locationType.locationTypeId"
            :value="locationType.locationTypeId">{{locationType.locationTypeName}}</option>
  </select>
</template>
<script>
export default {
  name: 'LocationTypesDropdown',
  props: {
    locationTypes: Array,
    selectedLocationTypeId: {
      type: Number,
      default: 0
    }
  },
  methods: {
    selectNewLocationType(selectedLocationTypeId){
      this.$emit('event-new-location-type-selected', Number(selectedLocationTypeId))
    }
  }
}
</script>