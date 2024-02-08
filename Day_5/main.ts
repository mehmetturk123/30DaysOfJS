//Exercise: Level 2

import { countries } from "./countries";
import { webTechs } from "./web_techs";
import { bubbleSort, middleIndexCalculator } from "./arrays";

//First remove all the punctuations and change the string to array and count the number of words in the array

const text: string = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const textWOPunctuations: string = text.replaceAll('.','').replaceAll(',','');
const words: string[] = textWOPunctuations.split(' ');
console.log(words);
console.log(words.length);

//In the following shopping cart add, remove, edit items => start here <=

const shoppingCart: string[] = ['Milk', 'Coffee', 'Tea', 'Honey'];

//add 'Meat' in the beginning of your shopping cart if it has not been already added

if(!(shoppingCart.includes('Meat'))){
    shoppingCart.unshift('Meat');
}

//add Sugar at the end of you shopping cart if it has not been already added

if(!(shoppingCart.includes('Sugar'))){
    shoppingCart.push('Sugar');
}

//remove 'Honey' if you are allergic to honey

let isAllergicToHoney = true;

if(isAllergicToHoney){
   bubbleSort(shoppingCart,shoppingCart.lastIndexOf("Honey"));
   shoppingCart.pop();
   console.log(shoppingCart.toString());
}

//modify Tea to 'Green Tea'

shoppingCart[shoppingCart.lastIndexOf('Tea')] = 'Green Tea';

console.log(shoppingCart.toString());
// => end here <=

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

if(countries.includes('Ethiopia')){
    console.log(countries[countries.indexOf('Ethiopia')].toUpperCase());
}else{
    countries.push('Ethiopia');
    console.log(countries.toString());
}

/* In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array. */

if(webTechs.includes("Saas")){
    console.log('Sass is a CSS preprocess.');
}else{
    webTechs.push('Saas');
    console.log(webTechs.toString());
}

//Concatenate the following two variables and store it in a fullStack variable.

const frontEnd: string[] = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd: string[] = ['Node','Express', 'MongoDB']

const fullStack: string[] = frontEnd.concat(backEnd);

console.log(fullStack.toString());

//Exercise: Level 3

//The following is an array of 10 students ages:   => starts here <=

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sort the array and find the min and max age

ages.sort((a,b) => a - b);
console.log(`Minimum age: ${ages[0]} and Maximum age: ${ages[ages.length - 1]} `);

//Find the median age(one middle item or two middle items divided by two)

const middleIndex: number | number[] = middleIndexCalculator(ages.length);

if(typeof(middleIndex) === 'number'){
    console.log(`Median age: ${ages[middleIndex] }`);
}else{
    console.group(`Median age: ${ages[middleIndex[0]] + ages[middleIndex[1]] / 2}`);
}

//Find the average age(all items divided by number of items)

let sumOfAges: number = 0;
ages.forEach(x => sumOfAges = sumOfAges + x);
let averageAge: number =  sumOfAges / (ages.length);
console.log(`Average age: ${averageAge}`);

//Find the range of the ages(max minus min)

console.log(`Range of the ages: ${ages[ages.length - 1] - ages[0]}`);

//Compare the value of (min - average) and (max - average), use abs() method

const firstNumberForCompare: number = Math.abs(ages[0] - averageAge);
const secondNumberForCompare: number = Math.abs(ages[ages.length - 1] - averageAge);

if(firstNumberForCompare > secondNumberForCompare){
    console.log(`(min - average) = ${firstNumberForCompare} is greater than (max - average) = ${secondNumberForCompare}`);
}else if(firstNumberForCompare == secondNumberForCompare){
    console.log('They are same!');
}else{
    console.log(`(min - average) = ${firstNumberForCompare} is lesser than (max - average) = ${secondNumberForCompare}`);
}
// => end here <=

//Slice the first ten countries from the countries array

console.log(countries.slice(0,10).toString());

//Find the middle country(ies) in the countries array

const middleCountryIndex: number | number[] = middleIndexCalculator(countries.length);

if(typeof(middleCountryIndex) === 'number'){
    console.log((`Middle country: ${countries[middleCountryIndex]}`));
}else{
    console.log(`Middle Countries:${countries[middleCountryIndex[0]]} and ${countries[middleCountryIndex[1]]}`);
}

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

if(countries.length % 2 == 0){
    const firstPartOfCountries: string[] = countries.slice(0,(middleCountryIndex as number[])[1]);
    const secondPartOfCountries: string[] = countries.slice((middleCountryIndex as number[])[1], countries.length);
    console.log(`First part of countries: ${firstPartOfCountries.toString()} and Second part of countries: ${secondPartOfCountries.toString()}`);
}else{
    const firstPartOfCountries: string[] = countries.slice(0,(middleCountryIndex as number) + 1);
    const secondPartOfCountries: string[] = countries.slice((middleCountryIndex as number) + 1, countries.length);
    console.log(`First part of countries: ${firstPartOfCountries.toString()} and Second part of countries: ${secondPartOfCountries.toString()}`);
}