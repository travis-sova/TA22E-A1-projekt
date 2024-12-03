<script setup lang="ts">
import MyNavbar from '@/components/dashboard/MyNavbar.vue'
import MyFooter from '@/components/dashboard/MyFooter.vue';
</script>

<template>
  <MyNavbar />
  <router-view />
  <MyFooter />
</template>

<style scoped></style>
