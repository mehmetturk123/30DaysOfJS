"use strict";
//Exercises: Level 2 and 3
//This function comes from Day 5 Exercise Level 2 that i created.
function bubbleSort(arr, startIndex = 0) {
    let counter = 0;
    for (let index = startIndex; index < arr.length - 1; index++) {
        [arr[startIndex + counter], arr[startIndex + counter + 1]] = [arr[startIndex + counter + 1], arr[startIndex + counter]];
        counter++;
    }
    let temp = arr[startIndex + 1];
}
//Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c, x) {
    //  by = -ax - c ==> y = -ax / b - c / b 
    return ((-a * x - c) / b);
}
//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadratic(a, b, c) {
    const discriminant = ((b * b) - (4 * a * c));
    if (discriminant > 0) {
        // The quadratic function has two distinct real roots.
        const x1 = ((-b - Math.sqrt(discriminant)) / (2 * a));
        const x2 = ((-b + Math.sqrt(discriminant)) / (2 * a));
        return [x2, x1];
    }
    else if (discriminant == 0) {
        // The quadratic function has one repeated real root.
        const x1 = ((-b + Math.sqrt(discriminant)) / (2 * a));
        return x1;
    }
    else {
        return "The quadratic function has no real roots.";
    }
}
// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}
// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    const date = new Date();
    console.log(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
}
// Declare a function name swapValues. This function swaps value of x to y.
/** This function swaps value of x to y. Update your variables manually!
 * @returns [swappedX, swappedY]
 */
function swapValues(x, y) {
    return [y, x];
}
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
    const reverseArr = [];
    for (let i = 0, bound = arr.length; i < bound; i++) {
        reverseArr[i] = arr.pop();
    }
    return reverseArr;
}
//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedArray.
function capitalizeArray(arr) {
    const capitalizedArray = [];
    let counter = 0;
    arr.forEach(element => {
        capitalizedArray[counter++] = element.toUpperCase();
    });
    return capitalizedArray;
}
// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item.
/** It takes an item parameter and it returns an array after adding the item.
 * @param arr If omitted, function creates a new array and push the item in it.
 */
function addItem(item, arr) {
    if (!arr) {
        const newArr = [];
        newArr.push(item);
        return newArr;
    }
    else {
        arr.push(item);
        return arr;
    }
}
// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item.
/** It takes an index parameter and it returns an array after removing an item.
 * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
 * @param arr Array you want to remove item.
 */
function removeItem(index, arr) {
    if (index > arr.length) {
        return "Index is not usable for given array!";
    }
    else if (index >= 0) {
        bubbleSort(arr, index);
        arr.pop();
        return arr;
    }
    else if ((arr.length + index) < 0) {
        return "Index is not usable for given array!";
    }
    else {
        const positiveIndex = arr.length + index;
        bubbleSort(arr, positiveIndex);
        arr.pop();
        return arr;
    }
}
// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
/** It takes a number parameter and it adds all the numbers in that range.
 * @param element It must be a positive integer.
 */
function sumOfNumbers(element) {
    return (element * (element + 1)) / 2;
}
// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
/** It takes a number parameter and it adds all the even numbers in that - range.
 * @param element It must be a positive integer.
 */
function sumOfEven(element) {
    if (element % 2 == 0) {
        const n = element / 2;
        return (n * (n + 1));
    }
    else {
        const evenElement = element - 1;
        const n = evenElement / 2;
        return (n * (n + 1));
    }
}
// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
/** It takes a number parameter and it adds all the odd numbers in that - range.
 * @param element It must be a positive integer.
 */
function sumOfOdds(element) {
    return (sumOfNumbers(element) - sumOfEven(element));
}
// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(element) {
    if (element % 2 == 0) {
        console.log(`The number of odds are ${element / 2}.`);
        console.log(`The number of evens are ${(element / 2) + 1}`);
    }
}
// Write a function which takes any number of arguments and return the sum of the arguments.
function sumOfAnyArguments(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
//Declare a function name randomHexNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
/**This function created by Copilot(Microsoft's AI) and it makes sense to me :-)
 *
 * It generates a random hexadecimal number
 * @returns The function return the hexadecimal number.
 */
function randomHexNumberGenerator() {
    return Math.floor(Math.random() * 0xFFFFFF);
}
// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
/** This function created by Copilot(Microsoft's AI). I tried another way and it was very complicated(didn't worked) so i decided to use AI code :-)
 *
 * It generates given input character id.
 * @length The number of characters.
 * @returns Returns the id.
 */
function userIdGenerator(length) {
    let id = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        id = id + characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
}
/* Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt().
One of the input is the number of characters and the second input is the number of ids which are supposed to be generated. */
/** It takes two inputs using prompt():
 *
 * One of the input is the number of characters,
 *
 * The second input is the number of ids which are supposed to be generated.
 */
function userIdGeneratedByUser() {
    const firstInput = window.prompt("Enter the number of characters:");
    const secondInput = window.prompt("Enter the number of ids:");
    if (firstInput != null && secondInput != null) {
        const length = parseInt(firstInput);
        const functionRepeatNumber = parseInt(secondInput);
        for (let i = 0; i < functionRepeatNumber; i++) {
            console.log(userIdGenerator(length));
        }
    }
    else {
        console.log("Enter an input please!");
    }
}
// Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
    return [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
}
// Write a function arrayOfHexColors which return any number of hexadecimal colors in an array.
function arrayOfHexColors(length) {
    const hexColors = [];
    if (length == 1) {
        return convertRgbToHex(rgbColorGenerator());
    }
    else {
        for (let i = 0; i < length; i++) {
            const rgbArray = rgbColorGenerator();
            hexColors.push(convertRgbToHex(rgbArray));
        }
        return hexColors;
    }
}
// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(length) {
    const arrOfRgbColors = [];
    if (length == 1) {
        return rgbColorGenerator();
    }
    else {
        for (let i = 0; i < length; i++) {
            let rgbColor = rgbColorGenerator();
            arrOfRgbColors[i] = rgbColor;
        }
        return arrOfRgbColors;
    }
}
// Write a function convertHexToRgb which converts hex color to rgb and it returns an rgb color
function convertHexToRgb(hexColor) {
    const red = hexColor.slice(1, 3);
    const green = hexColor.slice(3, 5);
    const blue = hexColor.slice(5, 7);
    return [parseInt(red, 16), parseInt(green, 16), parseInt(blue, 16)];
}
// Write a function convertRgbToHex which converts rgb to hex color and it returns an hex color.
function convertRgbToHex(rgbColor) {
    let hexColor = "#";
    for (let j = 0; j < 3; j++) {
        let rgbString = rgbColor[j].toString(16);
        //If red, green or blue color number less than 16, it means single digit and i need to represent single digit with zero at the start.
        if (rgbString.length == 1) {
            const singleDigit = "0" + rgbString;
            hexColor = hexColor + singleDigit;
        }
        else {
            hexColor = hexColor + rgbString;
        }
    }
    return hexColor;
}
//Write a function generateColors which can generate any number of hex or rgb colors.
/**
 * Generate any number of hex or rgb colors
 * @param mode "hex" or "rgb" mode. These are strings so please input as string.
 * @param length How many colors you want!
 */
function generateColors(mode, length) {
    if (mode == "hex") {
        return arrayOfHexColors(length);
    }
    else if (mode == "rgb") {
        return arrayOfRgbColors(length);
    }
    else {
        return "This mode does not exist";
    }
}
// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array.
/** I tried somethings but NGL, it does not feel right. It's too hard for me to shuffle an array!
 */
function shuffleArray(arr) {
    const tempArr = [];
    const random = Math.floor(Math.random() * arr.length);
    const x = arr.length - random;
    let counter = 0;
    for (let i = 0; i < random; i++) {
        tempArr[counter++] = arr.pop();
    }
    for (let j = 0; j < x; j++) {
        tempArr[counter++] = arr.shift();
    }
    return tempArr;
}
//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number.
function factorial(input) {
    let factorial = 1;
    if (input == 0 || input == 1) {
        return factorial;
    }
    else {
        for (let i = 1; i <= input; i++) {
            factorial = factorial * i;
        }
        return factorial;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQkFBMEI7QUFFMUIsaUVBQWlFO0FBQ2pFLFNBQVMsVUFBVSxDQUFDLEdBQVUsRUFBRSxhQUFxQixDQUFDO0lBQ2xELElBQUksT0FBTyxHQUFXLENBQUMsQ0FBQztJQUN4QixLQUFLLElBQUksS0FBSyxHQUFHLFVBQVUsRUFBRSxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUMzRCxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLFVBQVUsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN4SCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDRCxJQUFJLElBQUksR0FBWSxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQzNDLENBQUM7QUFFRCw0SUFBNEk7QUFFNUksU0FBUyxnQkFBZ0IsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO0lBQ2hFLHlDQUF5QztJQUN6QyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFOUIsQ0FBQztBQUVELDhKQUE4SjtBQUU5SixTQUFTLGNBQWMsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7SUFDbkQsTUFBTSxZQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFD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