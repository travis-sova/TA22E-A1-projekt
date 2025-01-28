<template>
  <div class="container mx-auto p-6">
    <div class="card shadow-xl bg-primary text-primary-content rounded-lg p-6">
      <h2 class="text-3xl font-bold mb-4">{{ movie.name }}</h2>
      <p class="text-lg text-primary-content mb-6">{{ movie.description }}</p>

      <div class="stats shadow bg-secondary text-primary-content rounded-lg p-4 mb-4">
        <div class="stat">
          <div class="stat-title text-primary-content">Available Seats</div>
          <div class="stat-value text-primary-content">{{ availableSeats }}</div>
        </div>
      </div>

      <div class="bg-secondary p-4 rounded-lg shadow">
        <div v-for="ticket in tickets" :key="ticket.type"
          class="flex justify-between items-center py-3 border-b-2 border-primary">
          <div>
            <h3 class="font-bold text-lg text-primary-content">{{ ticket.label }}</h3>
            <p class="text-sm text-primary-content">{{ ticket.description }}</p>
          </div>
          <div class="flex items-center">
            <span class="text-lg font-bold mr-4 text-primary-content">{{ ticket.price }} €</span>
            <button @click="decreaseCount(ticket.type)" class="btn btn-sm btn-gray">−</button>
            <span class="mx-2 text-primary-content">{{ ticketCounts[ticket.type] }}</span>
            <button @click="increaseCount(ticket.type)" class="btn btn-sm btn-accent"
              :disabled="totalTickets >= movie.seats">+</button>
          </div>
        </div>
      </div>

      <div class="mt-4 text-lg font-bold text-right text-primary-content">
        Total Price: {{ totalPrice }} €
      </div>

      <div class="mt-6 text-center">
        <router-link :to="{ name: 'Purchase', params: { id: movie.id, total: totalPrice } }"
          class="btn btn-lg btn-accent" :disabled="totalTickets.value === 0">
          Purchase Tickets
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import movies from '../../data/movies.js';

const route = useRoute();
const movieId = Number(route.params.id);
const movie = movies.find(m => m.id === movieId);
if (!movie) throw new Error(`Movie with ID ${movieId} not found`);

const ticketCounts = ref({ Adult: 0, Student: 0, Senior: 0, Child: 0 });
const availableSeats = ref(movie.seats);

const tickets = [
  { type: 'Adult', label: 'Regular ticket', price: '10,60', description: '' },
  { type: 'Student', label: 'Student ticket', price: '8,38', description: 'Applicable only with valid Student Card' },
  { type: 'Senior', label: 'Senior ticket', price: '6,45', description: 'Applicable only with valid ID' },
  { type: 'Child', label: 'Kids ticket', price: '6,45', description: 'up to 12 years (incl.)' },
];

const totalTickets = computed(() =>
  Object.values(ticketCounts.value).reduce((sum, count) => sum + count, 0)
);
console.log(totalTickets.value)
const totalPrice = computed(() => tickets.reduce((sum, ticket) => sum + (ticketCounts.value[ticket.type] * parseFloat(ticket.price.replace(',', '.'))), 0).toFixed(2));

function increaseCount(type) {
  if (totalTickets.value < movie.seats) {
    ticketCounts.value[type]++;
    console.log(totalTickets.value)
  }
}

function decreaseCount(type) {
  if (ticketCounts.value[type] > 0) {
    ticketCounts.value[type]--;
  }
}
</script>

<style scoped>
.btn {
  padding: 8px 12px;
  border-radius: 6px;
}

.btn-sm {
  padding: 4px 8px;
}
</style>
