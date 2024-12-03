<script setup lang="ts">
import { useRoute } from 'vue-router';
import movies from '../../data/movies.js';

const route = useRoute();
const movieId = Number(route.params.id);

const movie = movies.find((m) => m.id === movieId);

if (!movie) {
    throw new Error(`Movie with ID ${movieId} not found`);
}
</script>

<template>
    <div class="container mx-auto p-6">
      <!-- Main Card -->
      <div class="card shadow-xl dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg">
        <div class="flex">
          <!-- Movie Image -->
          <figure class="w-1/3">
            <img :src="movie.img" :alt="movie.name" class="w-full h-full object-cover rounded-l-lg" />
          </figure>
  
          <!-- Movie Info -->
          <div class="card-body w-2/3 p-6">
            <h2 class="card-title text-4xl font-bold">{{ movie.name }}</h2>
            <div
              class="badge badge-outline text-sm mb-4 bg-pink-200 text-pink-800 dark:bg-pink-700 dark:text-white border-pink-500">
              {{ movie.genre }}
            </div>
            <p class="text-gray-700 dark:text-gray-300 text-lg mb-6">
              {{ movie.description }}
            </p>
  
            <div class="flex justify-between items-center mt-6">
              <!-- Stats Section -->
              <div
                class="stats shadow bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-300 rounded-lg">
                <div class="stat">
                  <div class="stat-title text-gray-500 dark:text-gray-400">
                    Available Seats
                  </div>
                  <div class="stat-value text-gray-900 dark:text-white">{{ movie.seats }}</div>
                </div>
                <div class="stat">
                  <div class="stat-title text-gray-500 dark:text-gray-400">
                    Rating
                  </div>
                  <div class="stat-value text-green-600 dark:text-green-400">
                    {{ movie.rating }}%
                  </div>
                </div>
              </div>
  
              <!-- Back Button -->
              <router-link to="/Movies" class="btn btn-outline btn-primary dark:btn-accent mt-4 sm:mt-0 sm:ml-6">
                Back to Movies
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  </style>
  
