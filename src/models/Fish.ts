export default class Fish {
    
    name: string;
    type: number;
    image: string;
    hungerLevel: number;
    
    constructor(name: string, type: number, image: string) {
        this.name = name;
        this.type = type;
        this.image = image;
        this.hungerLevel = 0;
    }
}