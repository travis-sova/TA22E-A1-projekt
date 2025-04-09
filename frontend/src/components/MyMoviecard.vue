<script setup lang="ts">
import { onMounted, ref, watch, onUpdated } from 'vue'
import movies from '../../data/movies.js'

const movieList = ref([...movies])

// Props for genre and title sorting options
const props = defineProps({
  selectedGenre: {
    type: String,
    default: 'All',
  },
  sortTitleOption: {
    type: String,
    default: 'A-Z',
  },
})

// Watch for changes in genre and title sorting props
// Watch props directly for changes
watch(
  () => [props.selectedGenre, props.sortTitleOption],
  ([selectedGenre, sortTitleOption]) => {
    filterAndSortMovies(selectedGenre, sortTitleOption)
  },
  { immediate: true },
)

// Filter and sort movies
function filterAndSortMovies(genre: string, titleSort: string) {
  let filteredMovies = [...movies]

  // Filter by genre if not "All"
  if (genre !== 'All') {
    filteredMovies = filteredMovies.filter((movie) => movie.genre === genre)
  }

  // Sort by title
  if (titleSort === 'A-Z') {
    filteredMovies.sort((a, b) => a.name.localeCompare(b.name))
  } else if (titleSort === 'Z-A') {
    filteredMovies.sort((a, b) => b.name.localeCompare(a.name))
  }

  movieList.value = filteredMovies
}

onMounted(() => {
  updateSeats()
})

onUpdated(() => {
  updateSeats()
})

function updateSeats() {
  const rounds = document.getElementsByClassName('round')
  Array.from(rounds).forEach((round) => {
    const roundRadius = round.getElementsByTagName('circle')[0].getAttribute('r')
    const roundPercent = round.getAttribute('data-percent')
    const roundCircum = 2 * +roundRadius * Math.PI
    const roundDraw = (+roundPercent * roundCircum) / 100
      ; (round as HTMLElement).style.strokeDasharray = roundDraw + ' 999'
  })
}
</script>

<template>
  <div class="movie-cards">
    <div v-for="movie in movieList" :key="movie.id"
      class="card card-side bg-secondary max-w-xl shadow-xl m-10 pl-5 py-3 text-primary-content">
      <figure>
        <img :src="movie.img" :alt="movie.name" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ movie.name }}</h2>
        <p>{{ $t('shows.genres.' + movie.genre) }}</p>
        <div class="container flex card-actions justify-between items-start">
          <div class="svg-container">
            <svg class="round" viewbox="0 0 100 100" width="50" height="50" :data-percent="movie.seats" :class="{
              'low-seats': movie.seats < 20,
              'medium-seats': movie.seats >= 20 && movie.seats < 50,
              'high-seats': movie.seats >= 50,
            }">
              <circle cx="25" cy="25" r="20" />
            </svg>
          </div>
          <div class="flex-grow content-container">
            <p>{{ $t('card.seats') }}</p>
            <p>{{ movie.seats }}</p>
          </div>
          <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }" class="btn btn-accent watch-button">
            {{ $t('card.watch') }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.round {
  transform: rotate(-90deg);
  transition: all 1s ease-in-out;

  /* SVG */
  fill: none;
  stroke: red;
  stroke-width: 5;
  stroke-linecap: round;
  stroke-dasharray: 0 999;
}

.movie-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  max-width: 500px;
  flex-direction: column;
}

.low-seats {
  stroke: red;
}

.medium-seats {
  stroke: orange;
}

.high-seats {
  stroke: green;
}

img {
  width: 200px;
  max-height: 235px;
}

.container {
  display: flex;
  align-items: flex-start;
  flex: 1;
}

.svg-container {
  flex-shrink: 0;
}

.content-container {
  flex-grow: 1;
  align-self: flex-end;
}

.card-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
}

.card-title {
  white-space: normal;
  overflow: visible;
  text-overflow: clip;
}

h2 {
  word-wrap: break-word;
  white-space: normal;
  max-width: 150px;
}

.watch-button {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 1rem;
  margin-right: 1rem;
}
</style>
