<script lang="ts" setup>
    import Fish from '@/models/Fish';
    import dead from '@/assets/images/dead.png'
    import { store } from '@/store';
    import { onMounted, ref } from 'vue';
    
    defineProps({
        fish: {
            type: Fish,
            required: true
        }
    })

    const xPosition = ref(0)
    const yPosition = ref(0)

    const move = () => {
      xPosition.value = Math.random() * (window.innerWidth - 500)
      yPosition.value = Math.random() * (window.innerHeight - 500)
    }

    onMounted(() => {
      move();
      setInterval(() => move(), 2000)
    })


</script>

<template>
    <div 
      class="p-5 flex flex-col w-44 relative swim"
      :style="{
        left: `${xPosition}px`,
        top: `${yPosition}px`,
        transition: 'all 8s linear'
      }"
    >
        
        <!-- Me alimente -->
        <button
            @click="() => store.feedFish(fish)"
            v-if="fish.hungerLevel >= 75 && fish.hungerLevel < 100"
            class="absolute top-0 right-0 rounded-full bg-white text-center p-2 hover:text-red-500 transition">
                Comida!
        </button>

        <img :src="fish.hungerLevel < 100 ? fish.image : dead"/>

        <span class="rounded bg-black opacity-70 text-white text-center p-2">
          {{ fish.name }}
        </span>

        <!-- Barra de fome -->
        <div class="relative w-full h-1 bg-black">
            <div 
                :style="{ width: `${fish.hungerLevel}%` }"
                class="absolute h-full"
                :class="fish.hungerLevel < 25 
                    ? 'bg-green-500' : fish.hungerLevel < 50
                    ? 'bg-yellow-500' : fish.hungerLevel < 75
                    ? 'bg-orange-500' : 'bg-red-500' ">
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>


</style>