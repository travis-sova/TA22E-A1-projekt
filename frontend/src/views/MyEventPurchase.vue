<template>
  <div>
    <h1>Purchase Tickets</h1>
    <p>Event: {{ event.title }}</p>
    <p>Total Price: {{ total }} €</p>
    <p>Seats: {{ selectedSeats.join(', ') }} </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { events } from "../../data/events.js";

const route = useRoute();
const eventId = Number(route.params.id);
const total = Number(route.query.total || 0);
const selectedSeats = ref(route.query.seats ? route.query.seats.split(',') : []);

const event = events.find((e) => e.id === eventId);
if (!event) {
  throw new Error(`Event with ID ${eventId} not found`);
}
</script>
