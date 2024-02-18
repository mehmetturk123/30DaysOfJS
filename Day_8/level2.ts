// Exercises: Level 2

//cSpell:words MERN yagy

import { users } from "./variables";

// Find the person who has highest number of skills in the users object.

let max: number = 0;
let maxIndex: string = "";

for (const key in users) {
  if (max < users[key].skills.length) {
    max = users[key].skills.length;
    maxIndex = key;
  }
}

console.log(`The person who has the highest number of skills is ${maxIndex}`);

// Count logged in users, count users having greater than equal to 50 points from the following object.

let counterOfLoggedInUsers: number = 0;
let counterOfBiggerPointsUsers: number = 0;

for (const key in users) {
  if (users[key].isLoggedIn == true) {
    counterOfLoggedInUsers++;
  }
  if (users[key].points >= 50) {
    counterOfBiggerPointsUsers++;
  }
}

console.log(counterOfLoggedInUsers);
console.log(counterOfBiggerPointsUsers);

//Find people who are MERN stack developer from the users object.

for (const key in users) {
  if (
    users[key].skills.includes("MongoDB") &&
    users[key].skills.includes("Express") &&
    users[key].skills.includes("React") &&
    users[key].skills.includes("Node")
  ) {
    console.log(`${key} is MERN stack developer!`);
  }
}

//Set your name in the users object without modifying the original users object.

const copyUsers = Object.assign({}, users);

copyUsers.Yagy = {
  email: "yagy@yagy.com",
  skills: ["CPP", "Javascript", "Typescript"],
  age: 20,
  isLoggedIn: false,
  points: 30,
};

console.log(copyUsers);

// Get all keys or properties of users object

console.log(Object.keys(copyUsers));

// Get all the values of users object.

console.log(Object.values(copyUsers));

// Use the countries object to print a country name, capital, populations and languages.

const countries: {
  name: string;
  capital: string;
  populations: number;
  languages: string | string[];
} = {
  name: "Turkey",
  capital: "Ankara",
  populations: 80000000,
  languages: ["Turkish", "English"],
};

console.log(countries);
