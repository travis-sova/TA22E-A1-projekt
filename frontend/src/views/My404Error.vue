<script setup lang="ts"></script>
<template>
  <main class="grid min-h-full place-items-center bg-base-100 px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-indigo-600">404</p>
      <h1 class="mt-4 text-balance text-5xl font-semibold tracking-tight text-primary-content sm:text-7xl">
        {{ $t('error.found') }}
      </h1>
      <p class="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
        {{ $t('error.sorry') }}
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <router-link to="/"
          class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{{
            $t('error.back') }}</router-link>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: 'My404Error',
}
</script>

<style scoped>
/* Add your styles here */
</style>
