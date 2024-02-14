//Exercises: Level 2 and 3

//This function comes from Day 5 Exercise Level 2 that i created.
function bubbleSort(arr: any[], startIndex: number = 0): void {
    let counter: number = 0;
    for (let index = startIndex; index < arr.length - 1; index++) {
        [arr[startIndex + counter], arr[startIndex + counter + 1]] = [arr[startIndex + counter + 1], arr[startIndex + counter]];
        counter++;
    }
    let temp: unknown = arr[startIndex + 1]
}

//Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a: number, b: number, c: number, x: number): number {
    //  by = -ax - c ==> y = -ax / b - c / b 
    return ((-a * x - c) / b);

}

//Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadratic(a: number, b: number, c: number): (number | string | number[]) {
    const discriminant: number = ((b * b) - (4 * a * c));
    if(discriminant > 0){
        // The quadratic function has two distinct real roots.
        const x1 = ((-b - Math.sqrt(discriminant)) / (2 * a));
        const x2 = ((-b + Math.sqrt(discriminant)) / (2 * a));
        return [x2, x1];
    }else if(discriminant == 0){
        // The quadratic function has one repeated real root.
        const x1 = ((-b + Math.sqrt(discriminant)) / (2 * a));
        return x1;
    }else{
        return "The quadratic function has no real roots.";
    }
}


// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(arr: any[]): void {
    arr.forEach(element => {
        console.log(element);
    });
}

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime(): void {
    const date: Date = new Date();
    console.log(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
}

// Declare a function name swapValues. This function swaps value of x to y.

/** This function swaps value of x to y. Update your variables manually!
 * @returns [swappedX, swappedY]
 */
function swapValues(x: number, y: number) : number[] {
    return [y , x];
}

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray(arr: any[]): any[] {
    const reverseArr: any[] = [];
    for(let i = 0, bound = arr.length; i < bound; i++){
        reverseArr[i] = arr.pop();
    }
    return reverseArr;
}

//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedArray.

function capitalizeArray(arr: any[]): any[] {
    const capitalizedArray: any[] = [];
    let counter : number = 0;
    arr.forEach(element => {
        capitalizedArray[counter++] = (element as string).toUpperCase();
    });
    return capitalizedArray;
}

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item.

/** It takes an item parameter and it returns an array after adding the item.
 * @param arr If omitted, function creates a new array and push the item in it.
 */

function addItem(item: any, arr?: any[]): any[] {
    if(!arr){
        const newArr: any[] = [];
        newArr.push(item);
        return newArr;
    }else{
        arr.push(item);
        return arr;
    }
}

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item.

/** It takes an index parameter and it returns an array after removing an item.
 * @param index The zero-based index of the desired code unit. A negative index will count back from the last item.
 * @param arr Array you want to remove item.
 */

function removeItem(index: number, arr: any[]): (any[] | string) {
    if(index > arr.length){
        return "Index is not usable for given array!";
    }else if (index >= 0) {
        bubbleSort(arr, index);
        arr.pop();
        return arr;
    }else if ((arr.length + index) < 0){
        return "Index is not usable for given array!";
    }else{
        const positiveIndex: number = arr.length + index;
        bubbleSort(arr, positiveIndex);
        arr.pop();
        return arr;
    }
}

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

/** It takes a number parameter and it adds all the numbers in that range.
 * @param element It must be a positive integer.
 */

function sumOfNumbers(element: number): number {
    return (element * (element + 1)) / 2;
}

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

/** It takes a number parameter and it adds all the even numbers in that - range.
 * @param element It must be a positive integer.
 */

function sumOfEven(element: number): number {
    if(element % 2 == 0){
        const n: number = element / 2;
        return (n * (n + 1));
    }else{
        const evenElement = element - 1;
        const n: number = evenElement / 2;
        return (n * (n + 1));
    }
}

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

/** It takes a number parameter and it adds all the odd numbers in that - range.
 * @param element It must be a positive integer.
 */

function sumOfOdds(element: number): number {
    return (sumOfNumbers(element) - sumOfEven(element));
}

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(element: number): void {
    if(element % 2 == 0){
        console.log(`The number of odds are ${element / 2}.`);
        console.log(`The number of evens are ${(element / 2) + 1}`);
    }
}

// Write a function which takes any number of arguments and return the sum of the arguments.

function sumOfAnyArguments(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

//Declare a function name randomHexNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

/**This function created by Copilot(Microsoft's AI) and it makes sense to me :-)
 * 
 * It generates a random hexadecimal number
 * @returns The function return the hexadecimal number.
 */

function randomHexNumberGenerator(): number {
    return Math.floor(Math.random() * 0xFFFFFF);
  }

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

/** This function created by Copilot(Microsoft's AI). I tried another way and it was very complicated(didn't worked) so i decided to use AI code :-)
 * 
 * It generates given input character id.
 * @length The number of characters.
 * @returns Returns the id.
 */

function userIdGenerator(length: number): string {
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

function userIdGeneratedByUser(): void {
    const firstInput: (string | null) = window.prompt("Enter the number of characters:");
    const secondInput: (string | null) = window.prompt("Enter the number of ids:");

    if(firstInput != null && secondInput != null){
        const length: number = parseInt(firstInput);
        const functionRepeatNumber: number = parseInt(secondInput);

        for(let i = 0; i < functionRepeatNumber; i++){
            console.log(userIdGenerator(length));
        }
    }else{
        console.log("Enter an input please!");
    }

}

// Write a function name rgbColorGenerator and it generates rgb colors.

function rgbColorGenerator(): number[] {
    return [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
}

// Write a function arrayOfHexColors which return any number of hexadecimal colors in an array.

function arrayOfHexColors(length: number): (string[] | string) {
    const hexColors: string[] = [];
    if(length == 1){
        return convertRgbToHex(rgbColorGenerator());
    }else
    {
        for(let i = 0; i < length; i++){
            const rgbArray: number[] = rgbColorGenerator();
            hexColors.push(convertRgbToHex(rgbArray));
        }
        return hexColors;
    }
}

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.

function arrayOfRgbColors(length: number): (number[][] | number[]) {
    const arrOfRgbColors: number[][] = [];
    if(length == 1){
        return rgbColorGenerator();
    }else
    {
        for(let i = 0; i < length; i++){
            let rgbColor: number[] = rgbColorGenerator();
            arrOfRgbColors[i] = rgbColor;
        }
        return arrOfRgbColors;
    }
}

// Write a function convertHexToRgb which converts hex color to rgb and it returns an rgb color

function convertHexToRgb(hexColor: string): number[] {
    const red: string = hexColor.slice(1,3);
    const green: string = hexColor.slice(3,5);
    const blue: string =  hexColor.slice(5,7);
    return [parseInt(red, 16), parseInt(green, 16), parseInt(blue, 16)];
}

// Write a function convertRgbToHex which converts rgb to hex color and it returns an hex color.

function convertRgbToHex(rgbColor: number[]): string {
    let hexColor: string = "#";

    for(let j = 0; j < 3; j++){
        let rgbString: string = rgbColor[j].toString(16);
        //If red, green or blue color number less than 16, it means single digit and i need to represent single digit with zero at the start.
        if(rgbString.length == 1){
            const singleDigit: string = "0" + rgbString;
            hexColor = hexColor + singleDigit;
        }else{
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

function generateColors(mode: string, length: number): (string[] | number[][] | string | number[]) {
    if(mode == "hex"){
        return arrayOfHexColors(length);
    }else if(mode == "rgb"){
        return arrayOfRgbColors(length);
    }else{
        return "This mode does not exist";
    }
}

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array.

/** I tried somethings but NGL, it does not feel right. It's too hard for me to shuffle an array! 
 */

function shuffleArray(arr: any[]): any[] {
    const tempArr: any[] = [];
    const random: number =  Math.floor(Math.random() * arr.length);
    const x: number = arr.length - random;
    let counter: number = 0;
    for(let i = 0; i < random; i++){
        tempArr[counter++] = arr.pop();
    }
    for(let j = 0; j < x; j++){
        tempArr[counter++] = arr.shift();
    }
    return tempArr;
}

//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number.

function factorial(input: number): number {
    let factorial: number = 1;
    if(input == 0 || input == 1){
        return factorial;
    }else
    {
        for(let i = 1; i <= input; i++){
        factorial = factorial * i;
        }
        return factorial;
    }
}


