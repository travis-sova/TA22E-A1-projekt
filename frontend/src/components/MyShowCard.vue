<script setup lang="ts">
import { onMounted, ref, watch, computed } from 'vue'
import axios from 'axios';

interface Movie {
  id: number;
  name: string;
  genre: string;
  img: string;
  description: string;
  rating: number;
}

interface Show {
  id: number;
  movie: number;
  cinema: number;
  date: string;
  time: string;
  seats: number;
  movie_name?: string;
  movie_img?: string;
  cinema_name?: string;
}

interface Cinema {
  id: number;
  name: string;
}

const props = defineProps({
  selectedGenre: {
    type: String,
    default: 'All',
  },
  sortTitleOption: {
    type: String,
    default: 'A-Z',
  },
});

const movies = ref<Movie[]>([]);
const shows = ref<Show[]>([]);
const cinemas = ref<Cinema[]>([]);
const isLoading = ref(false);
const error = ref<string | null>(null);

const groupedShows = computed(() => {
  const groups: Record<number, { movie: Movie; shows: Show[] }> = {};

  shows.value.forEach(show => {
    if (!groups[show.movie]) {
      const movie = movies.value.find(m => m.id === show.movie);
      if (movie) {
        groups[show.movie] = { movie, shows: [] };
      }
    }
    if (groups[show.movie]) {
      groups[show.movie].shows.push(show);
    }
  });

  Object.values(groups).forEach(group => {
    group.shows.sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return dateA.getTime() - dateB.getTime();
    });
    group.shows = group.shows.slice(0, 3); // Limit to 3 showtimes
  });

  return Object.values(groups);
});


const filteredMovies = computed(() => {
  let result = [...groupedShows.value];


  if (props.selectedGenre !== 'All') {
    result = result.filter(item => item.movie.genre === props.selectedGenre);
  }


  if (props.sortTitleOption === 'A-Z') {
    result.sort((a, b) => a.movie.name.localeCompare(b.movie.name));
  } else if (props.sortTitleOption === 'Z-A') {
    result.sort((a, b) => b.movie.name.localeCompare(a.movie.name));
  }

  return result;
});


const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};


const getCinemaName = (cinemaId: number) => {
  return cinemas.value.find(c => c.id === cinemaId)?.name || 'Unknown Cinema';
};


const fetchData = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    const [moviesRes, showsRes, cinemasRes] = await Promise.all([
      axios.get<Movie[]>('http://localhost:3000/api/content/movies'),
      axios.get<Show[]>('http://localhost:3000/api/content/shows'),
      axios.get<Cinema[]>('http://localhost:3000/api/content/cinemas')
    ]);

    movies.value = moviesRes.data;
    shows.value = showsRes.data;
    cinemas.value = cinemasRes.data;
  } catch (err) {
    error.value = axios.isAxiosError(err)
      ? err.response?.data?.error || err.message
      : 'Failed to fetch data';
    console.error('Error fetching data:', err);
  } finally {
    isLoading.value = false;
  }
};


watch(
  () => [props.selectedGenre, props.sortTitleOption],
  () => {

  },
  { immediate: true }
);

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div v-if="isLoading" class="flex flex-col items-center justify-center p-8 text-gray-500">
    <div class="w-10 h-10 border-4 border-gray-200 border-l-blue-600 rounded-full animate-spin mb-4"></div>
    <p>Loading movies...</p>
  </div>

  <div v-else-if="error" class="p-8 bg-red-50 text-red-600 rounded-lg text-center max-w-2xl mx-auto my-8 font-medium">
    {{ error }}
  </div>

  <div v-else class="container mx-auto px-4 py-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div v-for="group in filteredMovies" :key="group.movie.id"
        class="card card-side bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-600 rounded-lg">
        <figure class="w-1/3 shrink-0">
          <img :src="group.movie.img" :alt="group.movie.name" class="h-full w-full object-cover" />
        </figure>

        <div class="card-body p-4 w-2/3 ">
          <div class="flex flex-col h-full">
            <div>
              <h2 class="card-title text-xl">{{ group.movie.name }}</h2>
              <div class="flex items-center gap-2 my-2">
                <span class="badge badge-outline opacity-75">{{ $t('shows.genres.' + group.movie.genre) }}</span>
                <div class="flex items-center gap-1">
                  <span class="text-yellow-500 font-semibold">{{ group.movie.rating }}%</span>
                </div>
              </div>
              <p class="text-sm line-clamp-3 mb-4">{{ group.movie.description }}</p>
            </div>

            <div class="mt-auto">
              <div class="divider my-2 text-sm">Showtimes</div>
              <div class="space-y-3">
                <div v-for="show in group.shows" :key="show.id" class="flex justify-between items-center gap-4">
                  <div>
                    <div class="font-semibold">{{ getCinemaName(show.cinema) }}</div>
                    <div class="flex gap-2 text-sm">
                      <span>{{ formatDate(show.date) }}</span>
                      <span class="text-blue-600 bg-blue-50 px-2 rounded">{{ show.time }}</span>
                    </div>
                  </div>

                  <div class="flex flex-col items-end min-w-[120px]">
                    <div class="w-full flex items-center gap-2 mb-1">
                      <div class="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div class="h-full transition-all duration-500" :class="{
                          'bg-red-500': show.seats < 20,
                          'bg-yellow-500': show.seats >= 20 && show.seats < 50,
                          'bg-green-500': show.seats >= 50
                        }" :style="{ width: `${show.seats}%` }"></div>
                      </div>
                      <span class="text-xs text-gray-500">{{ show.seats }} {{ $t('card.seats') }}</span>
                    </div>
                    <router-link :to="{ name: 'MovieDetails', params: { id: group.movie.id } }"
                      class="btn btn-sm btn-primary">
                      {{ $t('card.watch') }}
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
