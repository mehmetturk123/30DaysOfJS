"use strict";
// Exercise: Level 2
Object.defineProperty(exports, "__esModule", { value: true });
const variables_1 = require("./variables");
const countries_data_1 = require("./countries_data");
//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = variables_1.products
    .map((value) => {
    if (typeof value.price === "string") {
        return 0;
    }
    else {
        return value.price;
    }
})
    .reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
});
console.log(totalPrice);
// Find the sum of price of products using only reduce reduce(callback))
const onlyReduce = variables_1.products.reduce((previousValue, currentValue) => {
    if (typeof previousValue.price === "string") {
        previousValue.price = 0;
    }
    else if (typeof currentValue.price === "string") {
        currentValue.price = 0;
    }
    return {
        product: "Total Price",
        price: previousValue.price + currentValue.price,
    };
});
console.log(onlyReduce);
/* Declare a function called categorizeCountries which returns an array of countries which have some common pattern
(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).*/
/**
 * Returns an array of countries which have some common pattern
 * @param key (eg 'land', 'ia', 'island','stan')
 */
function categorizeCountries(key) {
    return countries_data_1.countries.filter((value) => {
        return value.name.includes(key);
    });
}
console.log(categorizeCountries("stan"));
//Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
/**
 * Returns a objects, which is the letter and the number of times the letter use to start with a name of a country.
 * @param letter
 */
function totalNumberOfLetter(letter) {
    const arr = countries_data_1.countries.filter((element) => {
        return element.name.startsWith(letter);
    });
    return { letter: letter, totalNumberOfLetter: arr.length };
}
//Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries() {
    return countries_data_1.countries.slice(0, 10);
}
//Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries() {
    return countries_data_1.countries.slice(-10, countries_data_1.countries.length);
}
//Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
function findMostCommonInitialLetter() {
    const initialLetters = [];
    const letters = [];
    countries_data_1.countries.forEach((element, index) => {
        if (!initialLetters.includes(element.name.charAt(0))) {
            initialLetters.push(element.name.charAt(0));
        }
    });
    initialLetters.forEach((element) => {
        letters.push(totalNumberOfLetter(element));
    });
    letters.sort((a, b) => {
        if (a.totalNumberOfLetter < b.totalNumberOfLetter)
            return -1;
        if (a.totalNumberOfLetter > b.totalNumberOfLetter)
            return 1;
        return 0;
    });
    return letters[letters.length - 1];
}
console.log(findMostCommonInitialLetter());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV2ZWwyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGV2ZWwyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQkFBb0I7O0FBRXBCLDJDQU1xQjtBQUNyQixxREFBc0Q7QUFFdEQsbUlBQW1JO0FBRW5JLE1BQU0sVUFBVSxHQUFXLG9CQUFRO0tBQ2hDLEdBQUcsQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO0lBQ3RCLElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztTQUFNLENBQUM7UUFDTixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQztBQUNILENBQUMsQ0FBQztLQUNELE1BQU0sQ0FBQyxDQUFDLGFBQXFCLEVBQUUsWUFBb0IsRUFBRSxFQUFFO0lBQ3RELE9BQU8sYUFBYSxHQUFHLFlBQVksQ0FBQztBQUN0QyxDQUFDLENBQUMsQ0FBQztBQUVMLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFeEIsd0VBQXdFO0FBRXhFLE1BQU0sVUFBVSxHQUFZLG9CQUFRLENBQUMsTUFBTSxDQUN6QyxDQUFDLGFBQXNCLEVBQUUsWUFBcUIsRUFBRSxFQUFFO0lBQ2hELElBQUksT0FBTyxhQUFhLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO1FBQzVDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7U0FBTSxJQUFJLE9BQU8sWUFBWSxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUNsRCxZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0QsT0FBTztRQUNMLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLEtBQUssRUFBRyxhQUFhLENBQUMsS0FBZ0IsR0FBSSxZQUFZLENBQUMsS0FBZ0I7S0FDeEUsQ0FBQztBQUNKLENBQUMsQ0FDRixDQUFDO0FB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