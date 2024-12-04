<script setup lang="ts"></script>

<template>
  <ul class="menu menu-vertical sm:menu-horizontal bg-base-200 w-full justify-center">
    <li><a>Now in Theaters</a></li>
    <li><a>Coming Soon</a></li>
    <li><a>Showtimes</a></li>
  </ul>
  <form
    class="menu menu-vertical lg:menu-horizontal w-full justify-start bg-secondary text-primary\"
  >
    <div class="mx-5">
      <select
        id="date"
        class="bg-primary border border-gray-300 text-primary-content text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option selected>Today, 23.11.2024</option>
        <option value="US">Tomorrow, 24.11.2024</option>
        <option value="CA">Monday, 25.11.2024</option>
        <option value="FR">Tuesday, 26.11.2024</option>
        <option value="DE">Wednesday, 27.11.2024</option>
      </select>
    </div>
    <div class="mx-5">
      <select
        id="genre"
        class="bg-primary border border-gray-300 text-primary-content text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option selected>All genres</option>
        <option value="US">Comdey</option>
        <option value="CA">Drama</option>
        <option value="FR">Sci-fi</option>
        <option value="DE">Horror</option>
      </select>
    </div>
    <div class="mx-5">
      <select
        id="showtime"
        class="bg-primary border border-gray-300 text-primary-content text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option selected>Showtime</option>
        <option value="US">Mida?</option>
      </select>
    </div>
  </form>
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
