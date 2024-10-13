<script lang="ts" setup>
  import FishItem from '@/components/FishItem.vue';
  import bg from '@/assets/images/bg.jpg'
  import { store } from '@/store';
</script>

<template>
    <section
      id="aquarium"
      class="w-full md:w-4/5 h-2/3 md:h-screen"
      :style="{ 
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover' 
      }"> 
      <FishItem
        v-for="(fish, idx) in store.fishes"
        :fish="fish"
        :key="`fish-${idx}`"
      />
    </section>
</template>