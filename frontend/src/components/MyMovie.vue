<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'

import spiderman from '@/assets/spiderman.webp'

onMounted(() => {
  const round = document.getElementsByClassName('round')
  const roundRadius = round[0].getElementsByTagName('circle')[0].getAttribute('r')
  const roundPercent = round[0].getAttribute('data-percent')
  const roundCircum = 2 * +roundRadius * Math.PI
  const roundDraw = (+roundPercent * roundCircum) / 100
  round[0].style.strokeDasharray = roundDraw + ' 999'
})

const seatPercent = ref(65)
const seats = ref(11)
</script>

<template>
  <div class="card card-side bg-secondary max-w-xl shadow-xl m-10 pl-5 py-3 text-primary">
    <figure>
      <img :src="spiderman" alt="Movie" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">Spiderman</h2>
      <p>Action</p>
      <div class="container flex card-actions jusify-between items-start">
        <div class="svg-container">
          <svg
            class="round"
            viewbox="0 0 100 100"
            width="50"
            height="50"
            :data-percent="seatPercent"
          >
            <circle cx="25" cy="25" r="20" />
          </svg>
        </div>

        <div class="flex-grow content-container">
          <p>Available seats</p>
          <p>{{ seats }}</p>
        </div>
        <button class="btn btn-primary watch-button">Watch</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.round {
  transform: rotate(-90deg);
  transition: all 1s ease-in-out;

  /* SVG */
  fill: none;
  stroke: red;
  stroke-width: 5;
  stroke-linecap: round;
  stroke-dasharray: 0 999;
}

.container {
  display: flex;
  align-items: flex-start;
}

.svg-container {
  flex-shrink: 0;
}

.content-container {
  flex-grow: 1;
  align-self: flex-end;
}

.watch-button {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 1rem;
  margin-right: 1rem;
}
</style>
