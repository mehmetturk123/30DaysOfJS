//Exercise: Level 3

//cSpell:words mern
import { countries, webTechs, mernStack } from "./variables";
import { randomNumber } from "./level1";


//Copy countries array(Avoid mutation)

/* Meaning of mutation: In TypeScript (and JavaScript), when you assign an array to a new variable, it doesn’t create a new copy of the array. 
Instead, it creates a reference to the original array. This means if you modify the new array, it will also modify the original array. This is known as mutation. */

const copiedCountries: string[] = [];

for (const iterator of countries) {
    copiedCountries.push(iterator);
}

console.log(copiedCountries);

//Arrays are mutable. Create a copy of array of numbers which does not modify the original. Sort the copied array and store in a variable sortedArray.

const originalArray: number[] = [];

for(let i = 0; i < 10; i++){
    originalArray.push(randomNumber(0,100));
}

const copiedArray: number[] = [];

for (const iterator of originalArray) {
    copiedArray.push(iterator);    
}

const sortedArray: number[] = copiedArray.toSorted((a, b) => a - b);

console.log(sortedArray.toString());