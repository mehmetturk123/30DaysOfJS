"use strict";
//Exercise: Level 2 
Object.defineProperty(exports, "__esModule", { value: true });
//cSpell:words mern
const variables_1 = require("./variables");
/* Using the above countries array, create the following new array.
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"] */
const newArr0 = [];
variables_1.countries.forEach((element, index) => {
    newArr0[index] = element.toUpperCase();
});
console.log(newArr0.toString());
//Using the above countries array, create an array for countries length'.
const newArr1 = [];
variables_1.countries.forEach((element, index) => {
    newArr1[index] = element.length;
});
console.log(newArr1.toString());
/* Use the countries array to create the following array of arrays:
[
  ['Albania', 'ALB', 7], ['Bolivia', 'BOL', 7], ['Canada', 'CAN', 6], ['Denmark', 'DEN', 7], ['Ethiopia', 'ETH', 8], ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7], ['Hungary', 'HUN', 7], ['Ireland', 'IRE', 7], ['Iceland', 'ICE', 7], ['Japan', 'JAP', 5],  ['Kenya', 'KEN', 5]
] */
const arrOFArrays = [];
variables_1.countries.forEach((element, index) => {
    arrOFArrays[index] = [element, element.slice(0, 3).toUpperCase(), element.length];
});
console.log(arrOFArrays);
/* In above countries array, check if there is a country or countries containing the word 'land'.
If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'. */
const arrOfLands = [];
let counter = 0;
variables_1.countries.forEach(element => {
    if (element.includes('land')) {
        arrOfLands[counter++] = element;
    }
});
if (arrOfLands.length == 0) {
    console.log('All these countries are without land.');
}
else {
    console.log(arrOfLands);
}
//Using the above countries array, find the country containing the biggest number of characters.
let maxLength = variables_1.countries[0].length;
let maxIndex = 0;
for (let i = 1; i <= variables_1.countries.length - 1; i++) {
    if (maxLength < variables_1.countries[i].length) {
        maxLength = variables_1.countries[i].length;
        maxIndex = i;
    }
}
console.log(variables_1.countries[maxIndex]);
//Using the above countries array, find the country containing only 5 characters.
const newArr2 = [];
let secondCounter = 0;
variables_1.countries.forEach(element => {
    if (element.length == 5) {
        newArr2[secondCounter++] = element;
    }
});
console.log(newArr2);
//Find the longest word in the webTechs array
let maxLength1 = variables_1.webTechs[0].length;
let maxIndex1 = 0;
for (let i = 1; i <= variables_1.webTechs.length - 1; i++) {
    if (maxLength1 < variables_1.webTechs[i].length) {
        maxLength1 = variables_1.webTechs[i].length;
        maxIndex1 = i;
    }
}
console.log(variables_1.webTechs[maxIndex1]);
/* Use the webTechs array to create the following array of arrays:
[["HTML", 4], ["CSS", 3], ["JavaScript", 10], ["React", 5], ["Redux", 5], ["Node", 4], ["MongoDB", 7]] */
const arrOFArrays1 = [];
variables_1.webTechs.forEach((element, index) => {
    arrOFArrays1[index] = [element, element.length];
});
console.log(arrOFArrays1);
//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const newArr3 = [];
for (const iterator of variables_1.mernStack) {
    newArr3.push(iterator.charAt(0).toUpperCase());
}
console.log(newArr3.toString().replaceAll(/,/g, ''));
//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const newArr4 = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (const iterator of newArr4) {
    console.log(iterator);
}
//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruitArray = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruitArray = [];
for (let i = fruitArray.length - 1; i >= 0; i--) {
    reversedFruitArray.push(fruitArray[i]);
}
console.log(reversedFruitArray);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV2ZWwyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGV2ZWwyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQkFBb0I7O0FBRXBCLG1CQUFtQjtBQUNuQiwyQ0FBNkQ7QUFFN0Q7d0hBQ3dIO0FBRXhILE1BQU0sT0FBTyxHQUFhLEVBQUUsQ0FBQztBQUU3QixxQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTtJQUNqQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUVoQyx5RUFBeUU7QUFFekUsTUFBTSxPQUFPLEdBQWEsRUFBRSxDQUFDO0FBRTdCLHFCQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFO0lBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQ3BDLENBQUMsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUVoQzs7OztJQUlJO0FBRUosTUFBTSxXQUFXLEdBQTBCLEVBQUUsQ0FBQztBQUU5QyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTtJQUNqQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JGLENBQUMsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUV6Qjtn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