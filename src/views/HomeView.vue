<script setup lang="ts">
import SideBar from '@/components/SideBar.vue';
import bg from '@/assets/images/bg.jpg'
import { store } from '@/store';
</script>

<template>
  <main class="w-screen h-screen flex flex-row">
    <SideBar/>
    <section 
      class="w-screen h-screen" 
      :style="{ 
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover' 
      }">

      <div class="p-5 flex flex-col gap-2 w-44" v-for="(fish,idx) in store.fishes" :key="idx">
        <img :src="fish.image"/>
        <span class="rounded bg-black opacity-70 text-white text-center p-2">
          {{ fish.name }}
        </span>
      </div>

    </section>
  </main>
</template>
