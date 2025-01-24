<template>
  <button
    :style="{ top: cinema.position.top, left: cinema.position.left }"
    class="cinema-icon absolute bg-red-500 hover:bg-red-700 rounded-full w-10 h-10 focus:outline-none focus:ring-4 focus:ring-blue-300 transform hover:scale-125 animate-fadeIn"
    @click="$emit('selectCinema', cinema)"
  >
  🎥
  </button>
</template>

<script lang="ts">
export default {
  props: {
    cinema: { type: Object, required: true },
  },
};
</script>
