<script lang="ts" setup>
    import Fish from '@/models/Fish';
    import dead from '@/assets/images/dead.png'
    import { store } from '@/store';
    import { onMounted, onUnmounted, ref } from 'vue';
    
    defineProps({
        fish: {
            type: Fish,
            required: true
        }
    })

    // Pega a div do aquario
    const aquarium = ref(document.getElementById('aquarium'));

    // Se ta indo pra direita ou esquerda (para inverter a imagem do peixe)
    const goingBack = ref(false);

    // Define uma posição aleatória de início
    const xPosition = ref(
      Math.random() * ((aquarium.value?.clientWidth || 500) - 200)
    )
    const yPosition = ref(
      Math.random() * ((aquarium.value?.clientHeight || 500) - 200)
    )

    // Faz o peixe se mover para uma posição aleatória (mudando o top e left)
    const move = () => {
      if (aquarium.value) {
        const x = Math.random() * (aquarium.value.clientWidth - 176)
        
        goingBack.value = x < xPosition.value;

        xPosition.value = x;
        yPosition.value = Math.random() * (aquarium.value.clientHeight - 176)
      }
    }

    onMounted(() => {
      move();
      const interval = setInterval(() => move(), 8000) // Se move a cada 8s
      onUnmounted(() => clearInterval(interval))
    })
</script>

<template>
  <div class="relative">
    <div
      class="absolute p-5 flex flex-col w-44" 
      :style="{
        left: `${xPosition}px`,
        top: `${yPosition}px`,
        transition: 'all 8s linear'
      }"
    >

      <button
          @click="() => store.feedFish(fish)"
          v-if="fish.hungerLevel >= 75 && fish.hungerLevel < 100"
          class="absolute z-20 top-0 right-10 -mt-6 rounded-full bg-white text-center m-2 p-2 hover:text-red-500 transition">
            Comida!
      </button>

      <img 
        :src="fish.hungerLevel < 100 ? fish.image : dead"
        :style="{
          transform: `scaleX(${goingBack ? -1 : 1})`,
          transition: 'all 0.1s linear'
        }"  
      />

      <span class="rounded bg-black opacity-70 text-white text-center p-2">
        {{ fish.name }}
      </span>

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
  </div>
</template>