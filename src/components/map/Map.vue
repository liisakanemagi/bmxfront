<template>
  <div style="height: 40vh;">
    <l-map
        v-model:zoom="zoom"
        :center="[58.7, 25.3]"
        @click="handleMapClick"
    >
      <!-- Tile layer -->
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>


      <!-- Click Pin Marker -->
      <l-marker
          v-if="displayClickMarker"
          :lat-lng="clickCoordinates"
      >
        <l-popup :options="{ closeButton: true, autoClose: false }">
        </l-popup>
      </l-marker>

      <!-- Colored circle markers -->
      <l-circle-marker
          v-for="location in locations"
          :key="location.locationId"
          :lat-lng="[location.locationLat, location.locationLng]"
          :radius="8"
          :fill-color="location.typeColorCode"
          color="#000"
      weight="1"
      fill-opacity="0.8"
      >
      <l-tooltip>{{ location.locationName }}</l-tooltip>
      <l-popup>
        <MapCard :location="location"/>
      </l-popup>
      </l-circle-marker>

    </l-map>
  </div>
</template>

<script>
import {LCircleMarker, LMap, LPopup, LTileLayer, LTooltip, LMarker} from "@vue-leaflet/vue-leaflet";
import MapCard from "@/components/map/MapCard.vue";

export default {
  name: "Map",
  components: {
    MapCard,
    LMap,
    LTileLayer,
    LCircleMarker,
    LTooltip,
    LPopup,
    LMarker
  },
  props: {
    displayClickMarker: {
      type: Boolean,
      default: false
    },

    locations: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      zoom: 7,
      clickCoordinates: [0,0],
    };
  },
  methods: {

    handleMapClick(e) {
      this.clickCoordinates = [e.latlng.lat, e.latlng.lng]
      this.$emit('event-location-selected', this.clickCoordinates)
    },
  }
};
</script>
