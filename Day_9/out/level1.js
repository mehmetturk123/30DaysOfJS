"use strict";
// Exercises: Level 1
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = require("./variables");
// Use forEach to console.log each country in the countries array.
variables_1.countriesOnlyName.forEach((value) => {
    console.log(value);
});
// Use forEach to console.log each name in the names array.
variables_1.names.forEach((element) => {
    console.log(element);
});
// Use forEach to console.log each number in the numbers array.
variables_1.numbers.forEach((value) => {
    console.log(value);
});
// Use map to create a new array by changing each country to uppercase in the countries array.
const upperCasedCountries = variables_1.countriesOnlyName.map((value) => {
    return value.toUpperCase();
});
console.log(upperCasedCountries);
// Use map to create an array of countries length from countries array.
const countryLengths = variables_1.countriesOnlyName.map((value) => {
    return value.length;
});
console.log(countryLengths);
// Use map to create a new array by changing each number to square in the numbers array.
const squaredNumbers = variables_1.numbers.map((value) => {
    return value ** 2;
});
console.log(squaredNumbers);
// Use map to change to each name to uppercase in the names array.
const upperCasedNames = variables_1.names.map((value) => {
    return value.toUpperCase();
});
console.log(upperCasedNames);
// Use map to map the products array to its corresponding prices.
const productPrices = variables_1.products.map((value) => {
    if (typeof value.price === "number") {
        return value.price;
    }
    else {
        return 0;
    }
});
console.log(productPrices);
// Use filter to filter out countries containing land.
const countriesContainingLand = variables_1.countriesOnlyName.filter((value) => {
    return value.includes("Land") || value.includes("land");
});
console.log(countriesContainingLand);
// Use filter to filter out countries having six character.
const countriesHavingSixCharacter = variables_1.countriesOnlyName.filter((value) => {
    return value.length == 6 ? true : false;
});
console.log(countriesHavingSixCharacter);
// Use filter to filter out countries containing six letters and more in the country array.
const countriesHavingMoreThanSixCharacter = variables_1.countriesOnlyName.filter((value) => {
    return value.length >= 6 ? true : false;
});
console.log(countriesHavingMoreThanSixCharacter);
// Use filter to filter out country start with 'E'.
const countriesStartWithE = variables_1.countriesOnlyName.filter((value) => {
    return value.startsWith("e") || value.startsWith("E") ? true : false;
});
console.log(countriesStartWithE);
// Use filter to filter out only prices with values.
const productsWithPrice = variables_1.products.filter((value) => {
    return typeof value.price === "number" ? true : false;
});
console.log(productsWithPrice);
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(array) {
    return array.filter(
    /* the return type of the callback function in filter is specified as value is string, which is a type predicate.
    This tells TypeScript that the function will return true if value is a string, */
    (value) => typeof value === "string");
}
const stringOrNumber = [
    "Personal",
    1,
    "Point",
    2,
    "Grocery",
    3,
];
console.log(getStringLists(stringOrNumber));
// Use reduce to sum all the numbers in the numbers array.
let sum = variables_1.numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(sum);
/* Use reduce to concatenate all the countries and
to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries/ */
let allCountries = variables_1.countriesOnlyName.reduce((previousValue, currentValue, currentIndex) => {
    if (currentIndex == variables_1.countriesOnlyName.length - 1) {
        return `${previousValue} and ${currentValue}`;
    }
    else {
        return `${previousValue}, ${currentValue}`;
    }
}) + " are north European countries.";
console.log(allCountries);
// Use some to check if some names' length greater than seven in names array
const isGreaterThanSeven = variables_1.names.some((value) => value.length > 7 ? true : false);
console.log(isGreaterThanSeven);
// Use every to check if all the countries contain the word land
const isAllCountriesContainWordOfLand = variables_1.countriesOnlyName.every((value) => value.includes("land") || value.includes("Land") ? true : false);
console.log(isAllCountriesContainWordOfLand);
// Use find to find the first country containing only six letters in the countries array.
const firstCountryContainingOnlySixLetter = variables_1.countriesOnlyName.find((value) => (value.length == 7 ? true : false));
console.log(firstCountryContainingOnlySixLetter);
// Use findIndex to find the position of the first country containing only six letters in the countries array.
const firstCountryIndexContainingOnlySixLetter = variables_1.countriesOnlyName.findIndex((value) => value.length == 7 ? true : false);
console.log(firstCountryIndexContainingOnlySixLetter);
// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const IndexOfNorway = variables_1.countriesOnlyName.findIndex((value) => value == "Norway" ? true : false);
console.log(IndexOfNorway);
// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const IndexOfRussia = variables_1.countriesOnlyName.findIndex((value) => value == "Russia" ? true : false);
console.log(IndexOfRussia);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV2ZWwxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGV2ZWwxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBcUI7O0FBRXJCLDJDQU1xQjtBQUVyQixrRUFBa0U7QUFFbEUsNkJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7SUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUMsQ0FBQztBQUVILDJEQUEyRDtBQUUzRCxpQkFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO0lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFFSCwrREFBK0Q7QUFFL0QsbUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtJQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDQUFDO0FBRUgsOEZBQThGO0FBRTlGLE1BQU0sbUJBQW1CLEdBQWEsNkJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7SUFDNUUsT0FBTyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDN0IsQ0FBQyxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFakMsdUVBQXVFO0FBRXZFLE1BQU0sY0FBYyxHQUFhLDZCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBQ3ZFLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUN0QixDQUFDLENBQUMsQ0FBQztBQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFNUIsd0ZBQXdGO0FBRXhGLE1BQU0sY0FBYyxHQUFhLG1CQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUU7SUFDN0QsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUU1QixrRUFBa0U7QUFFbEUsTUFBTSxlQUFlLEdBQWEsaUJBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtJQUM1RCxPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM3QixDQUFDLENBQUMsQ0FBQztBQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFN0IsaUVBQWlFO0FBRWpFLE1BQU0sYUFBYSxHQUFhLG9CQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBYyxFQUFFLEVBQUU7SUFDOUQsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDcEMsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRTNCLHNEQUFzRDtBQUV0RCxNQUFNLHVCQUF1QixHQUFhLDZCQUFpQixDQUFDLE1BQU0sQ0FDaEUsQ0FBQyxLQUFhLEVBQUUsRUFBRTtJQUNoQixPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQ0YsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUVyQywyREFBMkQ7QUFFM0QsTUFBTSwyQkFBMkIsR0FBYSw2QkFBaUIsQ0FBQyxNQUFNLENBQ3BFLENBQUMsS0FBYSxFQUFFLEVBQUU7SUFDaEIsT0FBTyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDMUMsQ0FBQyxDQUNGLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFFekMsMkZBQTJGO0FBRTNGLE1BQU0sbUNBQW1DLEdBQWEsNkJBQWlCLENBQUMsTUFBTSxDQUM1RSxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBQ2hCLE9BQU8sS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzFDLENBQUMsQ0FDRixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBRWpELG1EQUFtRDtBQUVuRCxNQUFNLG1CQUFtQixHQUFhLDZCQUFpQixDQUFDLE1BQU0sQ0FDNUQsQ0FBQyxLQUFhLEVBQUUsRUFBRTtJQUNoQixPQUFPLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDdkUsQ0FBQyxDQUNGLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFakMsb0RBQW9EO0FBRXBELE1BQU0saUJBQWlCLEdBQWMsb0JBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFjLEVBQUUsRUFBRTtJQUN0RSxPQUFPLE9BQU8sS0FBSyxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ3hELENBQUMsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRS9CLGlJQUFpSTtBQUVqSSxTQUFTLGNBQWMsQ0FBQyxLQUFZO0lBQ2xDLE9BQU8sS0FBSyxDQUFDLE1BQU07SUFDakI7cUZBQ2lGO0lBQ2pGLENBQUMsS0FBVSxFQUFtQixFQUFFLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUMzRCxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sY0FBYyxHQUF3QjtJQUMxQyxVQUFVO0lBQ1YsQ0FBQztJQUNELE9BQU87SUFDUCxDQUFDO0lBQ0QsU0FBUztJQUNULENBQUM7Q0FDRixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUU1QywwREFBMEQ7QUFFMUQsSUFBSSxHQUFHLEdBQVcsbUJBQU8sQ0FBQyxNQUFNLENBQzlCLENBQUMsYUFBcUIsRUFBRSxZQUFvQixFQUFFLEVBQUUsQ0FBQyxhQUFhLEdBQUcsWUFBWSxFQUM3RSxDQUFDLENBQ0YsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFakI7aUhBQ2lIO0FBRWpILElBQUksWUFBWSxHQUNkLDZCQUFpQixDQUFDLE1BQU0sQ0FDdEIsQ0FBQyxhQUFxQixFQUFFLFlBQW9CLEVBQUUsWUFBb0IsRUFBRSxFQUFFO0lBQ3BFLElBQUksWUFBWSxJQUFJLDZCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNqRCxPQUFPLEdBQUcsYUFBYSxRQUFRLFlBQVksRUFBRSxDQUFDO0lBQ2hELENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxHQUFHLGFBQWEsS0FBSyxZQUFZLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0FBQ0gsQ0FBQyxDQUNGLEdBQUcsZ0NBQWdDLENBQUM7QUFFdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUUxQiw0RUFBNEU7QUFFNUUsTUFBTSxrQkFBa0IsR0FBWSxpQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQy9ELEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FDaEMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUVoQyxnRUFBZ0U7QUFFaEUsTUFBTSwrQkFBK0IsR0FBWSw2QkFBaUIsQ0FBQyxLQUFLLENBQ3RFLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FDaEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FDbEUsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUU3Qyx5RkFBeUY7QUFFekYsTUFBTSxtQ0FBbUMsR0FDdkMsNkJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFFaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBRWpELDhHQUE4RztBQUU5RyxNQUFNLHdDQUF3QyxHQUM1Qyw2QkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUM1QyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQ2pDLENBQUM7QUFFSixPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7QUFFdEQsaUdBQWlHO0FBRWpHLE1BQU0sYUFBYSxHQUFXLDZCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQzFFLEtBQUssSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUNqQyxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUUzQixpR0FBaUc7QUFFakcsTUFBTSxhQUFhLEdBQVcsNkJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FDMUUsS0FBSyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQ2pDLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDIn0=