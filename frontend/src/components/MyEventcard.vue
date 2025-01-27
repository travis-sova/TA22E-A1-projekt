<template>
  <div class="card bg-gradient-to-r from-secondary to-secondary-focus shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 border border-gray-600 rounded-lg overflow-hidden animate-fadeIn">
    <figure>
      <img :src="event.image" :alt="event.title" class="object-cover w-full h-48" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-lg text-primary-content">{{ event.title }}</h2>
      <p class="text-primary-content">{{ event.description }}</p>
      <p class="text-sm text-primary-content">Date: {{ event.date }}</p>
      <p class="text-sm text-primary-content">Time: {{ event.time }}</p>
      <p class="text-sm text-primary-content">Location: {{ event.location }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary border border-gray-600">Book Tickets</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>
