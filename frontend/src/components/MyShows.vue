<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const movies = ref<Movie[]>([]);
const isLoading = ref(false);
const error = ref<string | null>(null);

interface Movie {
  id: number;
  name: string;
  genre: string;
  img: string;
  description: string;
  rating: number;
}

const emits = defineEmits(['sort-option-changed'])
// Extract unique genres from the movies list
const genres = ref([...new Set(movies.value.map((movie) => movie.genre))])
console.log('Movies:', movies.value)
console.log('Genres:', genres.value)
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

const fetchData = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    const [moviesRes] = await Promise.all([
      axios.get<Movie[]>("http://localhost:3000/api/content/movies")
    ]);

    movies.value = moviesRes.data;

    // Update genres after fetching movies
    genres.value = [...new Set(movies.value.map((movie) => movie.genre))];
  } catch (err) {
    error.value = axios.isAxiosError(err)
      ? err.response?.data?.error || err.message
      : 'Failed to fetch data';
    console.error('Error fetching data:', err);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <ul class="menu menu-vertical sm:menu-horizontal bg-base-200 w-full justify-center">
    <li><a>Now in Theaters</a></li>
    <li><a>Coming Soon</a></li>
    <li><a>Showtimes</a></li>
  </ul>
  <form class="menu menu-vertical lg:menu-horizontal w-full justify-start bg-secondary text-primary\">
    <div class="mx-5">
      <select id="date"
        class="bg-primary border border-gray-300 text-primary-content text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option selected>Today, 23.11.2024</option>
        <option value="US">Tomorrow, 24.11.2024</option>
        <option value="CA">Monday, 25.11.2024</option>
        <option value="FR">Tuesday, 26.11.2024</option>
        <option value="DE">Wednesday, 27.11.2024</option>
      </select>
    </div>
    <!-- Genre dropdown -->
    <div class="mx-5">
      <select id="genre-select" v-model="selectedGenre" @change="updateGenre(selectedGenre)"
        class="bg-primary border border-gray-300 text-primary-content text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option value="All">{{ $t('shows.genres.all') }}</option>
        <option v-for="genre in genres" :key="genre" :value="genre">
          {{ $t('shows.genres.' + genre) }}
        </option>
      </select>
    </div>
    <!-- title sort dropdown -->
    <div class="mx-5">
      <select id="title-sort-select" v-model="sortTitleOption" @change="updateTitleSort(sortTitleOption)"
        class="bg-primary border border-gray-300 text-primary-content text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
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
