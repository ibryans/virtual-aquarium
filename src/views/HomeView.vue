<script setup lang="ts">
import SideBar from '@/components/SideBar.vue';
import bg from '@/assets/images/bg.jpg'
import { store } from '@/store';
import dead from '@/assets/images/dead.png'
</script>

<template>
  <main class="w-screen h-screen flex flex-row">
    <SideBar/>
    <section 
      class="w-screen h-screen relative" 
      :style="{ 
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover' 
      }">

      <div class="p-5 flex flex-col gap-2 w-44 fish relative" v-for="(fish,idx) in store.fishes" :key="idx">
        <button
          @click="() => store.feedFish(fish)"
          v-if="fish.hungerLevel > 75 && fish.hungerLevel < 100"
          class="absolute top-0 right-0 rounded-full bg-white text-center p-2 hover:text-red-500 transition">
            Comida!
        </button>
        <img :src="fish.hungerLevel < 100 ? fish.image : dead"/>
        <span class="rounded bg-black opacity-70 text-white text-center p-2">
          {{ fish.name }} - 
          {{ fish.hungerLevel }}%
        </span>
        <div class="relative w-full h-1 bg-black rounded">
          <div 
            :style="{ width: `${fish.hungerLevel}%` }"
            class="absolute h-full"
            :class="fish.hungerLevel < 25 
              ? 'bg-green-500' : fish.hungerLevel < 50
              ? 'bg-yellow-500' : fish.hungerLevel < 75
              ? 'bg-orange-500' : 'bg-red-500' 
            "
          >
          </div>
        </div>
      </div>

    </section>
  </main>
</template>

<style lang="css" scoped>
  /* TODO: fazer a animação de nadar */
</style>