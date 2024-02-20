// Exercises: Level 1

import { countries, names, numbers, products, Product } from "./variables";

// Use forEach to console.log each country in the countries array.

countries.forEach((value: string) => {
  console.log(value);
});

// Use forEach to console.log each name in the names array.

names.forEach((element) => {
  console.log(element);
});

// Use forEach to console.log each number in the numbers array.

numbers.forEach((value: number) => {
  console.log(value);
});

// Use map to create a new array by changing each country to uppercase in the countries array.

const upperCasedCountries: string[] = countries.map((value: string) => {
  return value.toUpperCase();
});

console.log(upperCasedCountries);

// Use map to create an array of countries length from countries array.

const countryLengths: number[] = countries.map((value: string) => {
  return value.length;
});

console.log(countryLengths);

// Use map to create a new array by changing each number to square in the numbers array.

const squaredNumbers: number[] = numbers.map((value: number) => {
  return value ** 2;
});

console.log(squaredNumbers);

// Use map to change to each name to uppercase in the names array.

const upperCasedNames: string[] = names.map((value: string) => {
  return value.toUpperCase();
});

console.log(upperCasedNames);

// Use map to map the products array to its corresponding prices.

const productPrices: number[] = products.map((value: Product) => {
  if (typeof value.price === "number") {
    return value.price;
  } else {
    return 0;
  }
});

console.log(productPrices);

// Use filter to filter out countries containing land.

const countriesContainingLand: string[] = countries.filter((value: string) => {
  return value.includes("Land") || value.includes("land");
});

console.log(countriesContainingLand);

// Use filter to filter out countries having six character.

const countriesHavingSixCharacter: string[] = countries.filter(
  (value: string) => {
    return value.length == 6 ? true : false;
  },
);

console.log(countriesHavingSixCharacter);

// Use filter to filter out countries containing six letters and more in the country array.

const countriesHavingMoreThanSixCharacter: string[] = countries.filter(
  (value: string) => {
    return value.length >= 6 ? true : false;
  },
);

console.log(countriesHavingMoreThanSixCharacter);

// Use filter to filter out country start with 'E'.

const countriesStartWithE: string[] = countries.filter((value: string) => {
  return value.startsWith("e") || value.startsWith("E") ? true : false;
});

console.log(countriesStartWithE);

// Use filter to filter out only prices with values.

const productsWithPrice: Product[] = products.filter((value: Product) => {
  return typeof value.price === "number" ? true : false;
});

console.log(productsWithPrice);

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function getStringLists(array: any[]): string[] {
  return array.filter(
    /* the return type of the callback function in filter is specified as value is string, which is a type predicate. 
    This tells TypeScript that the function will return true if value is a string, */
    (value: any): value is string => typeof value === "string",
  );
}

const stringOrNumber: (string | number)[] = [
  "Personal",
  1,
  "Point",
  2,
  "Grocery",
  3,
];

console.log(getStringLists(stringOrNumber));

// Use reduce to sum all the numbers in the numbers array.

let sum: number = numbers.reduce(
  (previousValue: number, currentValue: number) => previousValue + currentValue,
  0,
);

console.log(sum);

/* Use reduce to concatenate all the countries and 
to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries/ */

let allCountries: string =
  countries.reduce(
    (previousValue: string, currentValue: string, currentIndex: number) => {
      if (currentIndex == countries.length - 1) {
        return `${previousValue} and ${currentValue}`;
      } else {
        return `${previousValue}, ${currentValue}`;
      }
    },
  ) + " are north European countries.";

console.log(allCountries);

// Use some to check if some names' length greater than seven in names array

const isGreaterThanSeven: boolean = names.some((value: string) =>
  value.length > 7 ? true : false,
);

console.log(isGreaterThanSeven);

// Use every to check if all the countries contain the word land

const isAllCountriesContainWordOfLand: boolean = countries.every(
  (value: string) =>
    value.includes("land") || value.includes("Land") ? true : false,
);

console.log(isAllCountriesContainWordOfLand);

// Use find to find the first country containing only six letters in the countries array.

const firstCountryContainingOnlySixLetter: string | undefined = countries.find(
  (value: string) => (value.length == 7 ? true : false),
);

console.log(firstCountryContainingOnlySixLetter);

// Use findIndex to find the position of the first country containing only six letters in the countries array.

const firstCountryIndexContainingOnlySixLetter: number | undefined =
  countries.findIndex((value: string) => (value.length == 7 ? true : false));

console.log(firstCountryIndexContainingOnlySixLetter);

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

const IndexOfNorway: number = countries.findIndex((value: string) =>
  value == "Norway" ? true : false,
);

console.log(IndexOfNorway);

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

const IndexOfRussia: number = countries.findIndex((value: string) =>
  value == "Russia" ? true : false,
);

console.log(IndexOfRussia);
