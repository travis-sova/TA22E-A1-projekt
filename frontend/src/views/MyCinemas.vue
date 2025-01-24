<script lang="ts">
import CinemaMap from "@/components/MyCinemaMap.vue";
import CinemaInfo from "@/components/MyCinemaInfo.vue";

export default {
  components: { CinemaMap, CinemaInfo },
  data() {
    return {
      selectedCinema: null,
    };
  },
  methods: {
    selectCinema(cinema) {
      this.selectedCinema = cinema;
    },
  },
};
</script>

<template>
  <div class="container mx-auto rounded-box" style="max-width: 1300px ">
    <CinemaMap @selectCinema="selectCinema" />
    <CinemaInfo
      :key="selectedCinema?.id"
      :cinema="selectedCinema"
    />
  </div>
</template>
