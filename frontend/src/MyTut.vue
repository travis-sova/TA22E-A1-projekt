<script setup lang="ts">
import { onMounted, ref } from 'vue'

const name = ref('Transfomers')
//const year = ref('2007')
const status = ref('active')

const link = 'https://www.imdb.com/title/tt0418279/'

const movies = ref(['Transformers', 'Transformers 2', 'Transformers 3'])

const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending'
  } else if (status.value === 'pending') {
    status.value = 'inactive'
  } else {
    status.value = 'active'
  }
}

const newMovie = ref('')

const addMovie = () => {
  if (newMovie.value.trim() !== '') {
    movies.value.push(newMovie.value)
    newMovie.value = ''
  }
}

const deleteMovie = (index) => {
  movies.value.splice(index, 1)
}

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    movies.value = data.map((movie) => movie.title)
  } catch (error) {
    console.log('Error fetching movies', error)
  }
})
</script>

<template>
  <h1>{{ name }},</h1>
  <p v-if="status === 'active'">In cinemas</p>
  <p v-else-if="status === 'pending'">Soon in cinemas</p>
  <p v-else-if="status === 'inactive'">Not in cinemas</p>
  <p v-else>Not in cinemas</p>

  <form @submit.prevent="addMovie">
    <label for="newMovie">Movie:</label>
    <input type="text" id="newMovie" name="newMovie" v-model="newMovie" />
    <button type="submit">Add movie</button>
  </form>

  <h3>Movies:</h3>
  <ul>
    <li v-for="(movie, index) in movies" :key="movie">
      <span>
        {{ movie }}
      </span>
      <button @click="deleteMovie(index)">x</button>
    </li>
  </ul>

  <a :href="link">IMDB</a>
  <br />
  <button @click="toggleStatus">Change Status</button>
</template>

<style scoped></style>
