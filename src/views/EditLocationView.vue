<template>
<h1>Muuda Sõidukohta {{locationId}}</h1>
</template>

<script>
export default {
  name: 'EditLocationView',
  data() {
    return {
      locationId: this.$route.params.id,
      location: null
    }
  },
  methods: {},
  mounted() {

  }
}
</script>