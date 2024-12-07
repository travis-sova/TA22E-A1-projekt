<script setup lang="ts">
import MyCarousel from '@/components/MyCarousel.vue'
import MyShows from '@/components/MyShows.vue'
import MyMoviecard from '@/components/MyMoviecard.vue'

import { ref } from "vue";

const selectedGenre = ref("All");
const sortTitleOption = ref("A-Z");

function handleSortChange(newOption: { genre: string, title: string }) {
  selectedGenre.value = newOption.genre;
  sortTitleOption.value = newOption.title;
}
</script>

<template>
  <div>
    <MyCarousel />
    <MyShows @sort-option-changed="handleSortChange" />
    <div class="movie-cards-container">
      <div class="movie-cards">
        <MyMoviecard :selectedGenre="selectedGenre" :sortTitleOption="sortTitleOption"  />
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-cards-container {
  display: flex;
  justify-content: center; /* Center the grid horizontally */
  align-items: center; /* Center the grid vertically */
  width: 100%;
}

.movie-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns by default */
  gap: 20px; /* Increase gap for better spacing */
  max-width: 1200px;
  width: 100%;
}

@media (max-width: 1024px) {
  .movie-cards {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
  }
}

@media (max-width: 768px) {
  .movie-cards {
    grid-template-columns: repeat(1, 1fr); /* 1 column for smaller screens */
  }
}
</style>
