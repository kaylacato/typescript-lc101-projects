import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
export class Rocket{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number){
        this.name= name;
        this.totalCapacityKg= totalCapacityKg;
    }
    sumMass(items:Payload[]): number{
        let weight: number = 0;
        for (let i = 0; i < items.length; i++){
            weight += items[i].massKg;
        }
        return weight;
    }
    currentMassKg(): number{
        let astronautMass = this.sumMass(this.astronauts);
        let cargoMass = this.sumMass(this.cargoItems);
        return astronautMass + cargoMass;
    }
    canAdd(item:Payload): boolean{

    }
    addCargo(cargo: Cargo): boolean{

    }
    addAstronaut(astronaut: Astronaut): boolean{

    }
}