//Exercise: Level 2 

//cSpell:words mern
import { countries, webTechs, mernStack } from "./variables";

/* Using the above countries array, create the following new array.
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"] */

const newArr0: string[] = [];

countries.forEach((element, index) => {
    newArr0[index] = element.toUpperCase();
});

console.log(newArr0.toString());

//Using the above countries array, create an array for countries length'.

const newArr1: number[] = [];

countries.forEach((element, index) => {
    newArr1[index] = element.length;
});

console.log(newArr1.toString());

/* Use the countries array to create the following array of arrays:
[
  ['Albania', 'ALB', 7], ['Bolivia', 'BOL', 7], ['Canada', 'CAN', 6], ['Denmark', 'DEN', 7], ['Ethiopia', 'ETH', 8], ['Finland', 'FIN', 7], 
  ['Germany', 'GER', 7], ['Hungary', 'HUN', 7], ['Ireland', 'IRE', 7], ['Iceland', 'ICE', 7], ['Japan', 'JAP', 5],  ['Kenya', 'KEN', 5]
] */

const arrOFArrays: (number | string)[][] = [];

countries.forEach((element, index) => {
    arrOFArrays[index] = [element, element.slice(0,3).toUpperCase(), element.length];
});

console.log(arrOFArrays);

/* In above countries array, check if there is a country or countries containing the word 'land'.
If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'. */

const arrOfLands: string[] = [];
let counter: number = 0;

countries.forEach(element => {
    if(element.includes('land')){
        arrOfLands[counter++] = element;        
    }
});

if(arrOfLands.length == 0){
    console.log('All these countries are without land.');
}else{
    console.log(arrOfLands);
}

//Using the above countries array, find the country containing the biggest number of characters.

let maxLength: number = countries[0].length;
let maxIndex: number = 0;

for(let i = 1; i <= countries.length - 1; i++){
    if(maxLength < countries[i].length){
        maxLength = countries[i].length;
        maxIndex = i;
    }
}

console.log(countries[maxIndex]);

//Using the above countries array, find the country containing only 5 characters.

const newArr2: string[] = [];
let secondCounter: number = 0;

countries.forEach(element => {
    if(element.length == 5){
        newArr2[secondCounter++] = element;        
    }
});

console.log(newArr2);

//Find the longest word in the webTechs array

let maxLength1: number = webTechs[0].length;
let maxIndex1: number = 0;

for(let i = 1; i <= webTechs.length - 1; i++){
    if(maxLength1 < webTechs[i].length){
        maxLength1 = webTechs[i].length;
        maxIndex1 = i;
    }
}

console.log(webTechs[maxIndex1]);

/* Use the webTechs array to create the following array of arrays:
[["HTML", 4], ["CSS", 3], ["JavaScript", 10], ["React", 5], ["Redux", 5], ["Node", 4], ["MongoDB", 7]] */

const arrOFArrays1: (string | number)[][] = [];

webTechs.forEach((element, index) => {
    arrOFArrays1[index] = [element, element.length];
});

console.log(arrOFArrays1);

//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

const newArr3: string[] = [];

for (const iterator of mernStack) {
    newArr3.push(iterator.charAt(0).toUpperCase());
}

console.log(newArr3.toString().replaceAll(/,/g,''));

//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

const newArr4: string[] = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];

for (const iterator of newArr4) {
    console.log(iterator);
}

//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

const fruitArray: string[] = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruitArray: string[] = [];

for(let i = fruitArray.length - 1; i >= 0; i--){
    reversedFruitArray.push(fruitArray[i]);
}

console.log(reversedFruitArray);