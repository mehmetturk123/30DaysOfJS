/*
Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable (this is unnecessary because of using typescript)
Declare four variables without assigning values
Declare four variables with assigned values
Declare variables to store your first name, last name, marital status, country and age in multiple lines
Declare variables to store your first name, last name, marital status, country and age in a single line
Declare two variables myAge and yourAge and assign them initial values and log to the browser console.
*/

let num_ex_wo_assign: number;
let string_ex_wo_assign: string;
let boolean_ex_wo_assign: boolean;
let null_ex_wo_assign: null;

let num_ex_w_assign: number = 15;
let string_ex_w_assign: string = "Hello World";
let boolean_ex_w_assign = true;
let null_ex_w_assign = null;

let firstName: string = "Mehmet";
let lastName: string = "Turk";
let maritalStatus: string = "Single";
let country:string = "Turkey";
let age: number = 19;

//..._s is abbreviation of ..._singleLine
let firstName_s: string = "Mehmet", lastName_s: string = "Turk", maritalStatus_s: string = "Single", country_s:string = "Turkey" , age_s:number = 19; 

let myAge: number = 19;
let yourAge: number = 25;

console.log("My age is " + myAge + " and your age is " + yourAge);






