// Exercise: Level 2

import {
  Product,
  countriesOnlyName,
  names,
  numbers,
  products,
} from "./variables";
import { Country, countries } from "./countries_data";

//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const totalPrice: number = products
  .map((value: Product) => {
    if (typeof value.price === "string") {
      return 0;
    } else {
      return value.price;
    }
  })
  .reduce((previousValue: number, currentValue: number) => {
    return previousValue + currentValue;
  });

console.log(totalPrice);

// Find the sum of price of products using only reduce reduce(callback))

const onlyReduce: Product = products.reduce(
  (previousValue: Product, currentValue: Product) => {
    if (typeof previousValue.price === "string") {
      previousValue.price = 0;
    } else if (typeof currentValue.price === "string") {
      currentValue.price = 0;
    }
    return {
      product: "Total Price",
      price: (previousValue.price as number) + (currentValue.price as number),
    };
  },
);

console.log(onlyReduce);

/* Declare a function called categorizeCountries which returns an array of countries which have some common pattern
(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).*/

/**
 * Returns an array of countries which have some common pattern
 * @param key (eg 'land', 'ia', 'island','stan')
 */
function categorizeCountries(key: string): Country[] {
  return countries.filter((value: Country) => {
    return value.name.includes(key);
  });
}

console.log(categorizeCountries("stan"));

//Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

/**
 * Returns a objects, which is the letter and the number of times the letter use to start with a name of a country.
 * @param letter
 */
function totalNumberOfLetter(letter: string): {
  letter: string;
  totalNumberOfLetter: number;
} {
  const arr: Country[] = countries.filter((element: Country) => {
    return element.name.startsWith(letter);
  });
  return { letter: letter, totalNumberOfLetter: arr.length };
}

//Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

function getFirstTenCountries(): Country[] {
  return countries.slice(0, 10);
}

//Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

function getLastTenCountries(): Country[] {
  return countries.slice(-10, countries.length);
}

//Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

function findMostCommonInitialLetter(): {
  letter: string;
  totalNumberOfLetter: number;
} {
  const initialLetters: string[] = [];
  const letters: { letter: string; totalNumberOfLetter: number }[] = [];
  countries.forEach((element: Country, index: number) => {
    if (!initialLetters.includes(element.name.charAt(0))) {
      initialLetters.push(element.name.charAt(0));
    }
  });

  initialLetters.forEach((element) => {
    letters.push(totalNumberOfLetter(element));
  });

  letters.sort((a, b) => {
    if (a.totalNumberOfLetter < b.totalNumberOfLetter) return -1;
    if (a.totalNumberOfLetter > b.totalNumberOfLetter) return 1;
    return 0;
  });

  return letters[letters.length - 1];
}

console.log(findMostCommonInitialLetter());
