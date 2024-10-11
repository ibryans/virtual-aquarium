import { reactive } from "vue";
import Fish from "./models/Fish";

export const store = reactive<{ fishes: Fish[] }>({
    fishes: []
})