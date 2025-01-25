<template>
  <div class="relative w-full h-0 pb-[56.25%] mt-8">
    <img
      src="@/assets/kaart.png"
      alt="City Map"
      class="absolute top-0 left-0 w-full h-full object-cover rounded-box"
    />
    <CinemaIcon
      v-for="(cinema, index) in cinemas"
      :key="index"
      :cinema="cinema"
      @selectCinema="selectCinema"
    />
  </div>
</template>

<script lang="ts">
import CinemaIcon from './MyCinemaIcon.vue'
import cinemaimage1 from '@/assets/cinemas/UnderwaterCinema.jpg'
import cinemaimage2 from '@/assets/cinemas/CylinderCinema.jpg'
import cinemaimage3 from '@/assets/cinemas/BaltiJaamCinema.jpg'

export default {
  components: { CinemaIcon },
  data() {
    return {
      cinemas: [
        {
          id: 'cinema1',
          name: 'Ülemiste Järve Underwater Cinema',
          description: `Seats: 100<br>Halls: 1<br>Located in the heart of Ülemiste Järv, Ülemiste Järve Underwater Cinema offers a unique movie-watching experience like no other. Dive into a world of cinematic magic while submerged beneath the serene waters, surrounded by panoramic views of the lake. With state-of-the-art sound and visual technology, this immersive venue provides a one-of-a-kind viewing atmosphere, blending nature's beauty with the latest in film entertainment. Whether you're enjoying a thrilling action flick or a tranquil drama, Ülemiste Järve Underwater Cinema takes you on a journey beyond the screen, leaving you captivated by the waters and the story.`,
          image: cinemaimage1,
          position: { top: '75%', left: '50%' },
        },
        {
          id: 'cinema2',
          name: 'Õismäe ring Central Cinema',
          description: `Seats: 200<br>Halls: 3<br>Set in the iconic cylindrical structure of Õismäe Ring, the Central Cinema offers an architectural marvel combined with cutting-edge film technology. This modern cinema's circular design ensures that every seat in the house provides a perfect, unobstructed view of the screen. With a 360-degree immersive experience, the venue delivers crystal-clear visuals and rich sound, creating an unforgettable atmosphere for every film screening. Whether you're enjoying the latest blockbuster or an indie gem, Õismäe Ring Central Cinema's unique layout and state-of-the-art facilities make it the go-to spot for cinephiles seeking something extraordinary.`,
          image: cinemaimage2,
          position: { top: '57%', left: '24%' },
        },
        {
          id: 'cinema3',
          name: 'Balti Jaama Cinema',
          description: `Seats: 150<br>Halls: 2<br>Nestled in the heart of Tallinn, Balti Jaama Cinema is a vibrant cultural hub offering a dynamic film experience. Located near the historic Balti Jaam train station, this cinema blends contemporary design with the charm of its urban surroundings. Featuring the latest digital projection technology and immersive sound systems, Balti Jaama Cinema brings a wide range of films to life, from blockbusters to indie films. With its cozy atmosphere, stylish interiors, and convenient location, it’s the perfect spot to enjoy a movie while soaking in the vibrant energy of the city.`,
          image: cinemaimage3,
          position: { top: '37%', left: '43%' },
        },
      ],
    }
  },
  methods: {
    selectCinema(cinema) {
      this.$emit('selectCinema', cinema)
    },
  },
}
</script>
