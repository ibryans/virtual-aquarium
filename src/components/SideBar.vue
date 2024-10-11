<script lang="ts" setup>
    import { ref } from 'vue';

    import type1 from '@/assets/images/golden-purple-fish.png'
    import type2 from '@/assets/images/goldfish.png'
    import type3 from '@/assets/images/guppie.png'
    import type4 from '@/assets/images/tropical-fish.png'
    import type5 from '@/assets/images/tuna.png'
    import Fish from '@/models/Fish';
    import { store } from '@/store';
import type FishType from '@/models/FishType';

    const selected = ref<FishType>();
    const selectedName = ref<string>('');

    const types: FishType[] = [
        { type: 1, image: type1 },
        { type: 2, image: type2 }, 
        { type: 3, image: type3 }, 
        { type: 4, image: type4 }, 
        { type: 5, image: type5 }, 
    ]

    function selectFishType(type: FishType) {
        selected.value = type;
    }

    function addFish() {
        if (selected.value) {
            store.fishes.push(new Fish(
                selectedName.value,
                selected.value?.type,
                selected.value?.image
            ))
        }
    }

</script>

<template>
    <aside class="w-1/4 max-w-96 h-screen bg-blue-900 p-5 flex flex-col">
        <p class="text-xl text-white font-bold">
            Tipo:
        </p>
        <div id="choose-fish" class="grid grid-cols-2 justify-items-start mt-5">
            <button 
                v-for="(type, idx) in types" 
                :key="idx"
                class="w-1/2 items-center hover:opacity-50 transition"
                @click="() => selectFishType(type)"
            >
                <img
                    :src="type.image"
                    class="rounded-full p-2"
                    :class="{ 'ring-2 ring-blue-300': selected?.type === type.type }"
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
                :disabled="!selected"
                @click.prevent="addFish"
                class="w-100 bg-red-500 text-white rounded-lg p-4 hover:bg-red-700 transition">
                Adicionar peixe
            </button>
        </form>
    </aside>
</template>