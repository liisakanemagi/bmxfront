<template>
  <div class="stars-outer">
    <div class="stars-inner" :style="{ width: filledWidth }"></div>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    locationAverageRating: {
      type: Number,
      default: 4.5
    },
  },

  computed: {
    filledWidth() {
      // 5 stars total → 100%
      return (this.locationAverageRating / 5) * 100 + "%";
    },
  },
};
</script>

<style scoped>
.stars-outer {
  display: inline-block;
  position: relative;
  font-family: "Font Awesome 6 Free"; /* important */
  font-weight: 900;
  font-size: 24px;
  color: #c3c3c3; /* gray background stars */
}

.stars-outer::before {
  content: "★★★★★"; /* gray stars */
}

.stars-inner {
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  color: #ffd700; /* yellow stars */
}

.stars-inner::before {
  content: "★★★★★"; /* yellow stars */
}
</style>
