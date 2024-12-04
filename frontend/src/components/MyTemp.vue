<script setup lang="ts"></script>

<template>
  <div class="svg-container">
    <svg height="50" width="50" xmlns="http://www.w3.org/2000/svg">
      <circle r="25" cx="25" cy="25" fill="red" />
    </svg>
  </div>

  <form class="max-w-sm mx-auto">
    <label for="countries" class="block mb-2 text-sm font-medium text-primary-content"
      >Select an option</label
    >
    <select
      id="countries"
      class="bg-primary border border-gray-300 text-primary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
      <option selected>Choose a country</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="FR">France</option>
      <option value="DE">Germany</option>
    </select>
  </form>
</template>

<ul
  class="menu menu-vertical lg:menu-horizontal w-full justify-start bg-secondary text-primary"
></ul>
