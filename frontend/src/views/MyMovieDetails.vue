<script setup lang="ts">
import { useRoute } from 'vue-router'
import movies from '../../data/movies.js'

const route = useRoute()
const movieId = Number(route.params.id)

const movie = movies.find((m) => m.id === movieId)

if (!movie) {
  throw new Error(`Movie with ID ${movieId} not found`)
}
</script>

<template>
  <div class="container mx-auto p-6">
    <div
      class="card shadow-xl bg-primary text-primary-content rounded-lg"
    >
      <div class="flex">
        <figure class="w-1/3">
          <img :src="movie.img" :alt="movie.name" class="w-full h-full object-cover rounded-l-lg" />
        </figure>
        <div class="card-body w-2/3 p-6">
          <h2 class="card-title text-4xl font-bold">{{ movie.name }}</h2>
          <div
            class="badge badge-outline text-sm mb-4 bg-pink-700 text-white border-pink-500"
          >
            {{ movie.genre }}
          </div>
          <p class="text-primary-content text-lg mb-6">
            {{ movie.description }}
          </p>
          <div class="flex justify-between items-center mt-6">
            <div
              class="stats shadow bg-secondary text-primary-content rounded-lg"
            >
              <div class="stat">
                <div class="stat-title text-primary-content">Available Seats</div>
                <div class="stat-value text-primary-content">{{ movie.seats }}</div>
              </div>
              <div class="stat">
                <div class="stat-title text-primary-content">Rating</div>
                <div class="stat-value text-success">
                  {{ movie.rating }}/100
                </div>
              </div>
            </div>
            <router-link to="/Movies" class="btn btn-accent mt-4 sm:mt-0 sm:ml-6">
              Back
            </router-link>
            <router-link 
            :to="{ name: 'Tickets', params: { id: movie.id } }" 
            class="btn btn-accent mt-4 sm:mt-0 sm:ml-6">
              Buy tickets
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
}
</style>
