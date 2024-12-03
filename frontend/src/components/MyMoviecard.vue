<script setup lang="ts">
import { onMounted, ref } from 'vue';
import movies from '../../data/movies.js';

const movieList = ref(movies);

onMounted(() => {
  const rounds = document.getElementsByClassName('round');
  Array.from(rounds).forEach((round) => {
    const roundRadius = round.getElementsByTagName('circle')[0].getAttribute('r');
    const roundPercent = round.getAttribute('data-percent');
    const roundCircum = 2 * +roundRadius * Math.PI;
    const roundDraw = (+roundPercent * roundCircum) / 100;
    (round as HTMLElement).style.strokeDasharray = roundDraw + ' 999';
  });
});
</script>

<template>
  <div class="movie-cards">
    <div v-for="movie in movieList" :key="movie.id"
      class="card card-side bg-secondary max-w-xl shadow-xl m-10 pl-5 py-3 dark:text-white text-primary">
      <figure>
        <img :src="movie.img" :alt="movie.name" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ movie.name }}</h2>
        <p>{{ movie.genre }}</p>
        <div class="container flex card-actions jusify-between items-start">
          <div class="svg-container">
            <svg class="round" viewbox="0 0 100 100" width="50" height="50" :data-percent="movie.seats" :class="{
              'low-seats': movie.seats < 20,
              'medium-seats': movie.seats >= 20 && movie.seats < 50,
              'high-seats': movie.seats >= 50
            }">
              <circle cx="25" cy="25" r="20"/>
            </svg>
          </div>

          <div class="flex-grow content-container">
            <p>Available seats</p>
            <p>{{ movie.seats }}</p>
          </div>
          <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }" class="btn btn-accent watch-button">
            Watch
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
  display: flex;
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
  height: 250px;
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
  /* Allow text to wrap */
  overflow: visible;
  /* Ensure text is visible */
  text-overflow: clip;
  /* Prevent text from being clipped */
}

p {
  word-wrap: break-word;
  /* Ensure long words break and wrap */
  white-space: normal;
  /* Allow text to wrap */
}

.watch-button {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 1rem;
  margin-right: 1rem;
}
</style>
