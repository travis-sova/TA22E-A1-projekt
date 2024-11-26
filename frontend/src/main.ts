import './styles/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import Movies from '@/views/Movies.vue'
import Cinemas from '@/views/Cinemas.vue'
import Events from '@/views/Events.vue'
import Tickets from '@/views/Tickets.vue'
import Profile from '@/views/Profile.vue'
import Settings from '@/views/Settings.vue'

import App from './App.vue'
//import router from './router'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/News', name: 'News', component: News },
    { path: '/Movies', name: 'Movies', component: Movies },
    { path: '/Cinemas', name: 'Cinemas', component: Cinemas },
    { path: '/Events', name: 'Events', component: Events },
    { path: '/Tickets', name: 'Tickets', component: Tickets },
    { path: '/Profile', name: 'Profile', component: Profile },
    { path: '/Settings', name: 'Settings', component: Settings },
  ],
})

app
  .use(createPinia())
  //app.use(router)
  .use(router)
app.mount('#app')
