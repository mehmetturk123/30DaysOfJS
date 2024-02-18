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
  if (
    usernames.includes(username.toLowerCase()) &&
    passwords.includes(password)
  ) {
    anotherUsers[usernames.indexOf(username.toLowerCase())].isLoggedIn = true;
    return "Logged in!";
  } else {
    return "Not Logged in !";
  }
}

// Create a function called rateProduct which rates the product.

function rateProduct(
  username: string,
  rate: number,
  productName: string
): string {
  const usernames: string[] = [];
  const productNames: string[] = [];
  anotherUsers.forEach((element, index) => {
    usernames[index] = element.username.toLowerCase();
  });
  products.forEach((element, index) => {
    productNames[index] = element.name.toLowerCase();
  });
  const usernameIndex: number = usernames.indexOf(username.toLowerCase());
  const productIndex: number = productNames.indexOf(productName.toLowerCase());
  if (
    usernames.includes(username.toLowerCase()) &&
    anotherUsers[usernameIndex].isLoggedIn == true &&
    productNames.includes(productName.toLowerCase())
  ) {
    anotherUsers[usernameIndex]._id;
    products[productIndex].ratings.push({
      userId: anotherUsers[usernameIndex]._id,
      rate: rate,
    });
    return `${products[productIndex].name} product rated ${rate} point by ${username}.`;
  } else {
    return "You are not logged in or username is not correct or product name is not correct!";
  }
}

// Create a function called averageRating which calculate the average rating of a product.

function averageRating(productName: string): string {
  const productNames: string[] = [];
  products.forEach((element, index) => {
    productNames[index] = element.name.toLowerCase();
  });
  const productIndex = productNames.indexOf(productName.toLowerCase());
  if (productNames.includes(productName.toLowerCase())) {
    let sumOfProductRates: number = 0;
    let totalNumberOfRates: number = 0;

    products[productIndex].ratings.forEach((element) => {
      sumOfProductRates += element.rate;
      totalNumberOfRates++;
    });

    const averageRate: number = sumOfProductRates / totalNumberOfRates;

    return `Average rating of ${productName} is ${averageRate}`;
  } else {
    return "Given input is not a product name!";
  }
}

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(username: string, productName: string): string {
  const usernames: string[] = [];
  const productNames: string[] = [];
  anotherUsers.forEach((element, index) => {
    usernames[index] = element.username.toLowerCase();
  });
  products.forEach((element, index) => {
    productNames[index] = element.name.toLowerCase();
  });
  const usernameIndex: number = usernames.indexOf(username.toLowerCase());
  const productIndex: number = productNames.indexOf(productName.toLowerCase());
  if (
    usernames.includes(username.toLowerCase()) &&
    anotherUsers[usernameIndex].isLoggedIn == true &&
    productNames.includes(productName.toLowerCase())
  ) {
    products[productIndex].likes.push(anotherUsers[usernameIndex]._id);
    return `${username} liked ${productName} product.`;
  }else {
    return "You are not logged in or username is not correct or product name is not correct!";
  }
}
