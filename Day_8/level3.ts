// Exercise: Level 3

import { anotherUsers, products } from "./variables";
import { userIdGenerator } from "./functions";

/* Create an object literal called personAccount. 
It has firstName, lastName, incomes, expenses properties and 
it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
Incomes is a set of incomes and its description and expenses is a set of incomes and its description. 
This object will be created in variables.ts. */

// Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

function signUp(username: string, email: string, password: string): void {
  const userNames: string[] = [];
  anotherUsers.forEach((element, index) => {
    userNames[index] = element.username;
  });
  console.log(userNames);
};

signUp("asd","as","ass");
