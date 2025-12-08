<template>
  <select @change="selectNewCounty($event.target.value)" :value="selectedCountyId" class="form-select">
    <option selected :value="0">Kõik maakonnad</option>
    <option v-for="county in counties" :key="county.countyId" :value="county.countyId">{{ county.countyName }}</option>
  </select>
</template>
<script>
export default {
  name: 'CountyDropdown',
  props: {
    counties: Array,
    selectedCountyId: {
      type: Number,
      default: 0
    }
  },

  methods: {
    selectNewCounty(selectedCountyId) {
      this.$emit('event-new-county-selected', Number(selectedCountyId))
    }
  }
}
</script>