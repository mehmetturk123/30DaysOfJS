// Exercise: Level 1
export{};

//Declare an empty array;
const emptyArray: any[] = new Array() ;

//Declare an array with more than 5 number of elements
const moreThan5Elements: number[] = [1,2,3,4,5,6,7,8];

//Find the length of your array
console.log(moreThan5Elements.length);

//Get the first item, the middle item and the last item of the array
console.log(`First item:${moreThan5Elements.at(0)}, middle item:${moreThan5Elements.at(Math.floor((moreThan5Elements.length - 1) / 2))}, last item:${moreThan5Elements.at(moreThan5Elements.length - 1)}`);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes: [number,string,boolean,object,object,number] = [15,'Hello',true,{skill:"yes"},{action:true},23];
console.log(mixedDataTypes.length);

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies: string[] = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];

//Print the array using console.log()
console.log(itCompanies);

//Print the number of companies in the array
console.log(itCompanies.length);

//Print the first company, middle and last company
console.log(`First item:${itCompanies.at(0)}, middle item:${itCompanies.at(Math.floor((moreThan5Elements.length - 1) / 2))}, last item:${itCompanies.at(itCompanies.length - 1)}`);

//Print out each company
console.log(itCompanies.toString());

//Change each company name to uppercase one by one and print them out
console.log(itCompanies.map(str => str.toUpperCase()).toString());

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${itCompanies.slice(0,-1)} and ${itCompanies.at(itCompanies.length - 1)} are big IT companies.`);

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const companyName: string = 'Apple';
if(itCompanies.includes(companyName)){
    console.log(itCompanies.at(itCompanies.indexOf(companyName)))
}else{
    console.log("Company is not found.");
}

//Filter out companies which have more than one 'o' without the filter method
const firstIndex: number = itCompanies.findIndex(str => findCharacter(str,'o'));
const lastIndex: number = itCompanies.findLastIndex(str => findCharacter(str,'o'));
const wantedArray: string[] = itCompanies.slice(firstIndex,lastIndex + 1);

console.log(wantedArray.toString());

function findCharacter(value: string, key: string) : boolean {
    const re: RegExp = new RegExp(key, 'g');
    const regArray: RegExpMatchArray | null = value.match(re);
    return(regArray?.length == 2) ? true : false;
}

//Sort the array using sort() method
const numberArray: number[] = [0,8,15,7,16,25,36,59,98];
console.log(numberArray.sort((a, b) => a - b).toString());

//Reverse the array using reverse() method
console.log(numberArray.reverse().toString());

//Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3).toString());

//Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3).toString());

//Slice out the middle IT company or companies from the array
function middleIndexCalculator(length:number): number | number[] {
    if((length - 1) % 2 == 0)
    {
        return ((length - 1) / 2);
    }else{
        return [Math.floor((length - 1) / 2),Math.ceil((length - 1) / 2)];
    }
}

const middleIndex: number | number[] = middleIndexCalculator(itCompanies.length);

if(typeof(middleIndex) === 'number'){
    console.log(itCompanies.slice(middleIndex, middleIndex + 1).toString());
}else{
    console.log(itCompanies.slice(middleIndex[0],middleIndex[1] + 1).toString());
}

//Remove the first IT company from the array
const itCompaniesForShifting: string[] = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
itCompaniesForShifting.shift()
console.log(itCompaniesForShifting.toString());

//Remove the middle IT company or companies from the array
const tempItCompanies: string[] = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];

const middleIndexForRemove: number | number[] = middleIndexCalculator(tempItCompanies.length);

if(typeof(middleIndexForRemove) === 'number'){
    bubbleSort(tempItCompanies,middleIndexForRemove);
    tempItCompanies.pop();
    console.log(tempItCompanies.toString());
}else{
    bubbleSort(tempItCompanies,middleIndexForRemove[0]);
    tempItCompanies.pop();
    const middleIndex01: number | number[] = middleIndexCalculator(tempItCompanies.length);
    if(typeof(middleIndex01) === 'number'){
        bubbleSort(tempItCompanies,middleIndex01);
        tempItCompanies.pop();
        console.log(tempItCompanies.toString());
    }
}

function bubbleSort(arr: any[], startIndex: number = 0) {
    let counter: number = 0;
    for (let index = startIndex; index < arr.length - 1; index++) {
        [arr[startIndex + counter], arr[startIndex + counter + 1]] = [arr[startIndex + counter + 1], arr[startIndex + counter]];
        counter++;
    }
    let temp: unknown = arr[startIndex + 1]
}

//Remove the last IT company from the array
const tempItCompanies01: string[] = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];
tempItCompanies01.pop();
console.log(tempItCompanies01.toString());

//Remove all IT companies
const tempItCompanies02: string[] = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon'];

while (tempItCompanies02.length != 0) {
    tempItCompanies02.pop();
}

console.log(tempItCompanies02);