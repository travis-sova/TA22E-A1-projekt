<template>
  <div>
    <h1>{{ $t('events.purchase') }}</h1>
    <p>{{ $t('events.event') }} {{ $t(event.title) }}</p>
    <p>{{ $t('events.total') }} {{ total }} €</p>
    <p>{{ $t('events.seat') }} {{ selectedSeats.join(', ') }} </p>
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
