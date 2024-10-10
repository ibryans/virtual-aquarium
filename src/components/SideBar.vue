<script lang="ts" setup>
import { ref } from 'vue';

    const selected = ref<number>(1);
    const selectedName = ref<string>('');

    const fishes = [
        { type: 1 },
        { type: 2 },
        { type: 3 },
        { type: 4 },
        { type: 5 },
    ]

    function selectFishType(type: number) {
        selected.value = type;
    }

    function addFish() {
        console.log(selected.value, selectedName.value)
    }

</script>

<template>
    <aside class="w-1/4 h-screen bg-blue-900 p-5 flex flex-col">
        <p class="text-xl text-white font-bold">
            Tipo de peixe
        </p>
        <div id="choose-fish" class="grid grid-cols-2 justify-items-start mt-5">
            <button 
                v-for="(fish, idx) in fishes" 
                :key="idx"
                class="w-1/2 items-center hover:opacity-50 transition"
                @click="() => selectFishType(fish.type)"
            >
                <img
                    :src="`@/assets/fish_type${fish.type}.png`" 
                    width="100px"
                    class="rounded-full p-2"
                    :class="{ 'ring-2 ring-blue-300': selected === fish.type }"
                />
            </button>
        </div>
        <form action="" class="flex flex-col gap-3">
            <p class="text-xl text-white font-bold mt-10">
                Nome:
            </p>
            <input 
                type="text" 
                v-model="selectedName" 
                class="w-100 p-2 rounded-lg"
            >
            <button
                @click.prevent="addFish" 
                class="w-100 bg-red-500 text-white rounded-lg py-2 px-4 hover:bg-red-700 transition">
                Adicionar peixe
            </button>
        </form>
        
    </aside>
</template>