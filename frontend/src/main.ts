import './styles/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import MyHome from '@/views/MyHome.vue'
import MyNews from '@/views/MyNews.vue'
import MyMovies from '@/views/MyMovies.vue'
import MyCinemas from '@/views/MyCinemas.vue'
import MyEvents from '@/views/MyEvents.vue'
import MyTickets from '@/views/MyTickets.vue'
import MyProfile from '@/views/MyProfile.vue'
import MySettings from '@/views/MySettings.vue'

import App from './App.vue'
//import router from './router'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: MyHome },
    { path: '/News', name: 'News', component: MyNews },
    { path: '/Movies', name: 'Movies', component: MyMovies },
    { path: '/Cinemas', name: 'Cinemas', component: MyCinemas },
    { path: '/Events', name: 'Events', component: MyEvents },
    { path: '/Tickets', name: 'Tickets', component: MyTickets },
    { path: '/Profile', name: 'Profile', component: MyProfile },
    { path: '/Settings', name: 'Settings', component: MySettings },
  ],
})

app
  .use(createPinia())
  //app.use(router)
  .use(router)
app.mount('#app')
