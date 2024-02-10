"use strict";
//Exercise: Level 3
Object.defineProperty(exports, "__esModule", { value: true });
//cSpell:words mern
const variables_1 = require("./variables");
const level1_1 = require("./level1");
//Copy countries array(Avoid mutation)
/* Meaning of mutation: In TypeScript (and JavaScript), when you assign an array to a new variable, it doesn’t create a new copy of the array.
Instead, it creates a reference to the original array. This means if you modify the new array, it will also modify the original array. This is known as mutation. */
const copiedCountries = [];
for (const iterator of variables_1.countries) {
    copiedCountries.push(iterator);
}
console.log(copiedCountries);
//Arrays are mutable. Create a copy of array of numbers which does not modify the original. Sort the copied array and store in a variable sortedArray.
const originalArray = [];
for (let i = 0; i < 10; i++) {
    originalArray.push((0, level1_1.randomNumber)(0, 100));
}
const copiedArray = [];
for (const iterator of originalArray) {
    copiedArray.push(iterator);
}
const sortedArray = copiedArray.toSorted((a, b) => a - b);
console.log(sortedArray.toString());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV2ZWwzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGV2ZWwzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQkFBbUI7O0FBRW5CLG1CQUFtQjtBQUNuQiwyQ0FBNkQ7QUFDN0QscUNBQXdDO0FBR3hDLHNDQUFzQztBQUV0QztvS0FDb0s7QUFFcEssTUFBTSxlQUFlLEdBQWEsRUFBRSxDQUFDO0FBRXJDLEtBQUssTUFBTSxRQUFRLElBQUkscUJBQVMsRUFBRSxDQUFDO0lBQy9CLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFN0Isc0pBQXNKO0FBRXRKLE1BQU0sYUFBYSxHQUFhLEVBQUUsQ0FBQztBQUVuQyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7SUFDeEIsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFBLHFCQUFZLEVBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUVELE1BQU0sV0FBVyxHQUFhLEVBQUUsQ0FBQztBQUVqQyxLQUFLLE1BQU0sUUFBUSxJQUFJLGFBQWEsRUFBRSxDQUFDO0lBQ25DLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUVELE1BQU0sV0FBVyxHQUFhLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyJ9