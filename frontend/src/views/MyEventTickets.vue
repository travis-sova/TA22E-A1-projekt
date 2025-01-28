<template>
  <div class="container mx-auto p-6">
    <div class="card shadow-xl bg-primary text-primary-content rounded-lg p-6">
      <h2 class="text-3xl font-bold mb-4">{{ event.title }}</h2>
      <p class="text-lg text-primary-content mb-6">{{ event.description }}</p>

      <div class="bg-secondary p-4 rounded-lg shadow">
        <div class="border-b-2 border-primary py-3">
          <p><strong>Date:</strong> {{ event.date }}</p>
          <p><strong>Time:</strong> {{ event.time }}</p>
          <p><strong>Location:</strong> {{ event.location }}</p>
          <p><strong>Available Seats:</strong> {{ event.seats }}</p>
        </div>

        <div v-for="ticket in tickets" :key="ticket.type"
          class="flex justify-between items-center py-3 border-b-2 border-primary">
          <div>
            <h3 class="font-bold text-lg text-primary-content">{{ ticket.label }}</h3>
            <p class="text-sm text-primary-content">{{ ticket.description }}</p>
          </div>
          <div class="flex items-center">
            <span class="text-lg font-bold mr-4 text-primary-content">{{ ticket.price }} €</span>
            <button @click="decreaseCount(ticket.type)" class="btn btn-sm btn-gray"
              :disabled="ticketCounts[ticket.type] === 0">−</button>
            <span class="mx-2 text-primary-content">{{ ticketCounts[ticket.type] }}</span>
            <button @click="increaseCount(ticket.type)" class="btn btn-sm btn-accent"
              :disabled="totalTickets >= event.seats">+</button>
          </div>
        </div>
      </div>

      <div class="mt-4 text-lg font-bold text-right text-primary-content">
        Total Price: {{ totalPrice }} €
      </div>

      <div class="mt-6 flex justify-center gap-4">
        <router-link :to="'/events'" class="btn btn-lg btn-accent">
          Back
        </router-link>
        <router-link :to="{ name: 'EventPurchase', params: { id: event.id }, query: { total: totalPrice } }"
          class="btn btn-lg btn-accent" :class="{ 'opacity-50 pointer-events-none': totalTickets === 0 }">
          Purchase Tickets
        </router-link>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { events } from '../../data/events.js';

const route = useRoute();
const eventId = Number(route.params.id);

const event = events.find((e) => e.id === eventId);

if (!event) {
  throw new Error(`Event with ID ${eventId} not found`);
}

const ticketCounts = ref({ Adult: 0, Student: 0, Senior: 0, Child: 0 });
const tickets = [
  { type: 'Adult', label: 'Regular ticket', price: '20.99', description: '' },
  { type: 'Student', label: 'Student ticket', price: '15.49', description: 'Applicable only with valid Student Card' },
  { type: 'Senior', label: 'Senior ticket', price: '15.49', description: 'Applicable only with valid ID' },
  { type: 'Child', label: 'Kids ticket', price: '10.60', description: 'Up to 12 years (incl.)' },
];

const totalTickets = computed(() =>
  Object.values(ticketCounts.value).reduce((sum, count) => sum + count, 0)
);

const totalPrice = computed(() =>
  tickets.reduce(
    (sum, ticket) => sum + ticketCounts.value[ticket.type] * parseFloat(ticket.price),
    0
  ).toFixed(2)
);

function increaseCount(type) {
  if (totalTickets.value < event.seats) {
    ticketCounts.value[type]++;
  }
}

function decreaseCount(type) {
  if (ticketCounts.value[type] > 0) {
    ticketCounts.value[type]--;
  }
}

console.log('Event:', event);
console.log('Total Price:', totalPrice);
</script>

<style scoped></style>
