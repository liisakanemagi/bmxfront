<template>


  <div style="height: 40vh;">
    <l-map
        v-model:zoom="zoom"
        :center="[58.7, 25.3]"
        @move="log('move')"
    >
      <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>


      <!--  I NEED HELP. I want the marker color to come from location.typeColorCode    -->
      <l-marker v-for="location in locations"
                :lat-lng="[location.locationLat, location.locationLng]"
      >
        <l-tooltip>
          {{ location.locationName }}
        </l-tooltip>
        <l-popup>
          <!--                <LocationInfoCard :location-info="locationInfo"/>-->
        </l-popup>
      </l-marker>




    </l-map>
  </div>


</template>
<script>
import {
  LControlLayers,
  LIcon,
  LMap,
  LMarker,
  LPolygon,
  LPolyline,
  LPopup,
  LRectangle,
  LTileLayer,
  LTooltip,
} from "@vue-leaflet/vue-leaflet";


export default {
  name: 'Map',
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,

  },
  props: {
    locations: Array
  },
  data() {
    return {
      zoom: 7,


    };
  },
  methods: {

    updateDraggableMarker(event) {
      // `event` is the Leaflet event object
      const {lat, lng} = event.target.getLatLng();
      this.draggableMarker.latitude = lat
      this.draggableMarker.longitude = lng
      console.log(`Draggable pin moved to: ${lat}, ${lng}`);
    },

    log(a) {
      console.log(a);
    },
  },
};
</script>
