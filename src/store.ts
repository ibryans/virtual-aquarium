import { reactive } from "vue";
import Fish from "./models/Fish";

type StoreType = {
    fishes: Fish[];
    incrementHunger: (fish: Fish) => void,
    addFish: (fish: Fish) => void
}

export const store = reactive<StoreType>({
    fishes: [],
    incrementHunger: (fish: Fish) => {
        const interval = setInterval(() => {
            if (fish.hungerLevel < 100)
                fish.hungerLevel++;
            else
                clearInterval(interval)
        }, 100);
    },
    addFish: (fish: Fish) => {
        const idx = store.fishes.push(fish)
        store.incrementHunger(store.fishes[idx-1])
    }
})