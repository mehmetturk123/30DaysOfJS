"use strict";
// Exercises: Level 1
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = require("./variables");
// Use forEach to console.log each country in the countries array.
variables_1.countries.forEach((value) => {
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
const upperCasedCountries = variables_1.countries.map((value) => {
    return value.toUpperCase();
});
console.log(upperCasedCountries);
// Use map to create an array of countries length from countries array.
const countryLengths = variables_1.countries.map((value) => {
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
const countriesContainingLand = variables_1.countries.filter((value) => {
    return value.includes("Land") || value.includes("land");
});
console.log(countriesContainingLand);
// Use filter to filter out countries having six character.
const countriesHavingSixCharacter = variables_1.countries.filter((value) => {
    return value.length == 6 ? true : false;
});
console.log(countriesHavingSixCharacter);
// Use filter to filter out countries containing six letters and more in the country array.
const countriesHavingMoreThanSixCharacter = variables_1.countries.filter((value) => {
    return value.length >= 6 ? true : false;
});
console.log(countriesHavingMoreThanSixCharacter);
// Use filter to filter out country start with 'E'.
const countriesStartWithE = variables_1.countries.filter((value) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV2ZWwxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGV2ZWwxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBcUI7O0FBRXJCLDJDQUEyRTtBQUUzRSxrRUFBa0U7QUFFbEUscUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDQUFDO0FBRUgsMkRBQTJEO0FBRTNELGlCQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7SUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUMsQ0FBQztBQUVILCtEQUErRDtBQUUvRCxtQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckIsQ0FBQyxDQUFDLENBQUM7QUFFSCw4RkFBOEY7QUFFOUYsTUFBTSxtQkFBbUIsR0FBYSxxQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBQ3BFLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzdCLENBQUMsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRWpDLHVFQUF1RTtBQUV2RSxNQUFNLGNBQWMsR0FBYSxxQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBQy9ELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUN0QixDQUFDLENBQUMsQ0FBQztBQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFNUIsd0ZBQXdGO0FBRXhGLE1BQU0sY0FBYyxHQUFhLG1CQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBYSxFQUFF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