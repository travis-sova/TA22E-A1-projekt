<template>
  <div>
    <h1>Purchase Tickets</h1>
    <p>Movie: {{ movie.name }}</p>
    <p>Total Price: {{ total }} €</p>
    <p>Seats: {{ selectedSeats.join(', ') }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import movies from '../../data/movies.js';

const route = useRoute();
const movieId = Number(route.params.id);
const total = ref(Number(route.query.total || 0));
const selectedSeats = ref(route.query.seats ? route.query.seats.split(',') : []);

const movie = movies.find((m) => m.id === movieId);
if (!movie) {
  throw new Error(`Movie with ID ${movieId} not found`);
}
</script>
