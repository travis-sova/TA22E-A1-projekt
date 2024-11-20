<script setup lang="ts">
import logo from '@/assets/logo.svg'
import user from '@/assets/user.png'
import est from '@/assets/flags/est.png'
import uk from '@/assets/flags/uk.png'
import ger from '@/assets/flags/ger.png'
</script>

<template>
  <div class="navbar bg-white">
    <a class="flex flex-shrink-0 items-center mr-4" href="index.html">
      <img class="w-auto h-10" :src="logo" alt="Logo" />
      <span class="hidden md:block text-slate text-2xl font-bold ml-2">Keerleva roti kino</span>
    </a>

    <div class="flex flex-grow">
      <div class="join flex-grow flex">
        <button class="btn btn-ghost no-animation no- join-item flex-grow">Movies</button>
        <button class="btn btn-ghost no-animation join-item flex-grow">Cinemas</button>
        <button class="btn btn-ghost no-animation join-item flex-grow">Events</button>
        <button class="btn btn-ghost no-animation join-item flex-grow">Tickets</button>
        <button class="btn btn-ghost no-animation join-item flex-grow">News</button>
      </div>
    </div>

    <div class="flex gap-2 justify-end">
      <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-square avatar">
          <div class="w-auto h-10">
            <img alt="User" :src="user" />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-square avatar">
          <div class="w-auto h-10">
            <img alt="uk" :src="uk"/>
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-20 p-2 shadow"
        >
          <li><img alt="est" :src="est"></img></li>
          <li><img alt="ger" :src="ger"></img></li>
        </ul>
      </div>
    </div>
  </div>
</template>
