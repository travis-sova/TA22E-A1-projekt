<script setup lang="ts"></script>
<template>
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <router-link to="/">Go to Home</router-link>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'My404Error',
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>