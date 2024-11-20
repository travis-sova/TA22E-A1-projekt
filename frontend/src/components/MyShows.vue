<script setup lang="ts"></script>

<template>
  <ul class="menu menu-vertical lg:menu-horizontal bg-base-200 w-full justify-center">
    <li><a>Now in Theaters</a></li>
    <li><a>Coming Soon</a></li>
    <li><a>Showtimes</a></li>
  </ul>
  <br />
  <ul class="menu menu-vertical lg:menu-horizontal w-full justify-start bg-secondary text-primary">
    <li class="mx-5">
      <select class="select select-ghost max-w-xs w-full">
        <option>Today, 11.20.2024</option>
        <option>Tomorrow, 11.21.2024</option>
        <option>Fr, 11.22.2024</option>
        <option>Sa, 11.23.2024</option>
        <option>Su, 11.24.2024</option>
        <option>Mo, 11.25.2024</option>
      </select>
    </li>
    <li class="mx-5">
      <select class="select select-ghost max-w-xs w-full">
        <option>All Genres</option>
        <option>Comedy</option>
        <option>Drama</option>
        <option>Sci-fi</option>
        <option>Horror</option>
        <option>Action</option>
      </select>
    </li>
    <li class="mx-5">
      <select class="select select-ghost max-w-xs w-full">
        <option disabled selected>Showtime</option>
        <option>Mida?</option>
      </select>
    </li>
  </ul>
</template>

<style scoped>
a {
  margin: 0 1rem;
}

.select-ghost {
  --tw-bg-opacity: 0;
}
.select-ghost:focus {
  --tw-bg-opacity: 0;
  --tw-text-opacity: 1;
  color: var(--fallback-bc, oklch(var(--bc) / var(--tw-text-opacity)));
}
</style>
