<script setup lang="ts">
import { ref } from 'vue'
import movies from '../../data/movies.js'

const emits = defineEmits(['sort-option-changed'])
// Extract unique genres from the movies list
const genres = ref([...new Set(movies.map((movie) => movie.genre))])
const selectedGenre = ref('All') // Default: Show all genres
const sortTitleOption = ref('A-Z') // Default: Sort titles A-Z

function updateGenre(option: string) {
  selectedGenre.value = option
  emits('sort-option-changed', { genre: selectedGenre.value, title: sortTitleOption.value })
}

function updateTitleSort(option: string) {
  sortTitleOption.value = option
  emits('sort-option-changed', { genre: selectedGenre.value, title: sortTitleOption.value })
}
</script>

<template>
  <ul class="menu menu-vertical sm:menu-horizontal bg-base-200 w-full justify-center">
    <li><a>Now in Theaters</a></li>
    <li><a>Coming Soon</a></li>
    <li><a>Showtimes</a></li>
  </ul>
  <form
    class="menu menu-vertical lg:menu-horizontal w-full justify-start bg-secondary text-primary\"
  >
    <div class="mx-5">
      <select
        id="date"
        class="bg-primary border border-gray-300 text-primary-content text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option selected>Today, 23.11.2024</option>
        <option value="US">Tomorrow, 24.11.2024</option>
        <option value="CA">Monday, 25.11.2024</option>
        <option value="FR">Tuesday, 26.11.2024</option>
        <option value="DE">Wednesday, 27.11.2024</option>
      </select>
    </div>
    <!-- Genre dropdown -->
    <div class="mx-5">
      <select
        id="genre-select"
        v-model="selectedGenre"
        @change="updateGenre(selectedGenre)"
        class="bg-primary border border-gray-300 text-primary-content text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="All">All Genres</option>
        <option v-for="genre in genres" :key="genre" :value="genre">
          {{ genre }}
        </option>
      </select>
    </div>
    <!-- title sort dropdown -->
    <div class="mx-5">
      <select
        id="title-sort-select"
        v-model="sortTitleOption"
        @change="updateTitleSort(sortTitleOption)"
        class="bg-primary border border-gray-300 text-primary-content text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </div>

    <div class="mx-5">
      <select
        id="showtime"
        class="bg-primary border border-gray-300 text-primary-content text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option selected>Showtime</option>
        <option value="US">Mida?</option>
      </select>
    </div>
  </form>
</template>

<style scoped>
a {
  margin: 0 1rem;
}

.select-ghost {
  --tw-bg-opacity: 0;
}
.select-ghost:focus {
  --tw-bg-opacity: 0;
  --tw-text-opacity: 1;
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
}
</style>
