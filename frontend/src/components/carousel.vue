<script setup lang="ts">
import { ref } from 'vue'
import ext from '@/assets/carousel/ext.jpg'
import gvsk from '@/assets/carousel/gvsk.jpg'
import mk from '@/assets/carousel/mk.jpg'

const slides = [ext, gvsk, mk]
const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}
</script>

<template>
  <div class="flex justify-center items-center h-full">
    <div class="carousel-container relative w-3/4">
      <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div v-for="(slide, index) in slides" :key="index" class="w-full flex-shrink-0">
          <img :src="slide" class="w-full h-96 object-cover" />
        </div>
      </div>
      <div class="absolute inset-0 flex justify-between items-center">
        <button @click="prevSlide" class="btn btn-circle">❮</button>
        <button @click="nextSlide" class="btn btn-circle">❯</button>
      </div>
      <div class="absolute inset-0 pointer-events-none">
        <div class="blur-overlay left-0"></div>
        <div class="blur-overlay right-0"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  position: relative;
}

.blur-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 15%;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  z-index: 10;
}

.blur-overlay.left-0 {
  left: 0;
}

.blur-overlay.right-0 {
  right: 0;
}
</style>

<!--
<template>
  <div class="flex justify-center">
    <div class="carousel w-1/2">
      <div id="slide1" class="carousel-item relative w-full">
        <img :src="ext" class="w-full" />
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a href="#slide3" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img :src="gvsk" class="w-full" />
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img :src="mk" class="w-full" />
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a href="#slide2" class="btn btn-circle">❮</a>
          <a href="#slide1" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  </div>
</template>
-->
