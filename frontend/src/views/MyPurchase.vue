<template>
  <div v-if="isLoading" class="flex flex-col items-center justify-center p-8 text-gray-500">
    <div class="w-10 h-10 border-4 border-gray-200 border-l-blue-600 rounded-full animate-spin mb-4"></div>
    <p>Loading movies...</p>
  </div>

  <div v-if="error" class="p-8 bg-red-50 text-red-600 rounded-lg text-center max-w-2xl mx-auto my-8 font-medium">
    {{ error }}
  </div>

  <div v-if="movie">
    <h1>{{ $t('ticket.purchase') }}</h1>
    <p>{{ $t('ticket.movie') }} {{ movie.name }}</p>
    <p>{{ $t('ticket.total') }} {{ total }} €</p>
    <p>{{ $t('ticket.seat') }} {{ selectedSeats.join(', ') }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

interface Movie {
  id: number;
  name: string;
  genre: string;
  img: string;
  description: string;
  rating: number;
}

const movie = ref<Movie | null>(null);
const isLoading = ref(false);
const error = ref<string | null>(null);

const route = useRoute();
const movieId = Number(route.params.id);
const total = ref(Number(route.query.total || 0));
const selectedSeats = ref(route.query.seats ? route.query.seats.split(',') : []);

const fetchData = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    const [moviesRes] = await Promise.all([
      axios.get<Movie>(`http://localhost:3000/api/movies/` + movieId),
    ]);

    movie.value = moviesRes.data;
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
