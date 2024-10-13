<script setup lang="ts">
  import SideBar from '@/components/SideBar.vue';
  import AquariumContainer from '@/components/AquariumContainer.vue';
</script>

<template>
  <main class="flex flex-col md:flex-row w-screen h-screen">
    <SideBar/>
    <AquariumContainer/>
  </main>
</template>