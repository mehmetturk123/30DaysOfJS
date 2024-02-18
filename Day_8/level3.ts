// Exercise: Level 3

import { anotherUsers, products, Person } from "./variables";
import { getDateTime, userIdGenerator } from "../Day_7/functions";

/* Create an object literal called personAccount. 
It has firstName, lastName, incomes, expenses properties and 
it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
Incomes is a set of incomes and its description and expenses is a set of incomes and its description. 
This object will be created in variables.ts. */

// Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

function signUp(username: string, email: string, password: string): string {
  const usernames: string[] = [];
  anotherUsers.forEach((element, index) => {
    usernames[index] = element.username.toLowerCase();
  });
  if (usernames.includes(username.toLowerCase())) {
    return "You have already an account!";
  } else {
    const date: Date = new Date();
    date;
    const newPerson: Person = {
      _id: userIdGenerator(6),
      username: username,
      email: email,
      password: password,
      createdAt: getDateTime(),
      isLoggedIn: false,
    };
    anotherUsers.push(newPerson);
    return "Account Created!";
  }
}

// Create a function called signIn which allows user to sign in to the application.

//It is not a optimized function. 
function signIn(username: string, password: string): string {
  const usernames: string[] = [];
  const passwords: string[] = [];
  anotherUsers.forEach((element, index) => {
    usernames[index] = element.username.toLowerCase();
    passwords[index] = element.password;
  });
  if(usernames.includes(username.toLowerCase()) && passwords.includes(password)){
    anotherUsers[usernames.indexOf(username.toLowerCase())].isLoggedIn = true;
    return "Logged in!";
  } else{
    return "Not Logged in !";
  }
}
