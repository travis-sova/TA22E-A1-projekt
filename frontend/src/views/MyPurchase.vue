<template>
  <div>
    <h1>Purchase Tickets</h1>
    <p>Movie: {{ movie.name }}</p>
    <p>Total Price: {{ total }} €</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import movies from '../../data/movies.js';

const route = useRoute();
const movieId = Number(route.params.id);
const total = Number(route.query.total || 0);
console.log('Total:', total);
const movie = movies.find((m) => m.id === movieId);

if (!movie) {
  throw new Error(`Movie with ID ${movieId} not found`);
}

</script>
