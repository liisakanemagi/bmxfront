<template>
  <select @change="newTagSelected($event.target.value)" :value="selectedTagId" class="form-select">
    <option selected :value="0">Vali tag</option>
    <option v-for="tag in tags" :key="tag.tagId" :value="tag.tagId">{{ tag.tagName }}</option>
  </select>
</template>
<script>
export default {
  name: 'LocationTagDropDown',
  props: {

    locationTag: Object,
    tags: Array,
    selectedTagId: {
      type: Number,
      default: 0
    }
  },

  methods: {
    newTagSelected(selectedTagId) {
      this.$emit('event-new-locationTag-selected', Number(selectedTagId))
    }

  }
}
</script>