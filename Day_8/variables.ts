//cSpell:disable

interface User {
  email: string;
  skills: string[];
  age: number;
  isLoggedIn: boolean;
  points: number;
}

export const users: { [key: string]: User } = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

/* Create an object literal called personAccount. 
  It has firstName, lastName, incomes, expenses properties and 
  it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
  Incomes is a set of incomes and its description and expenses is a set of incomes and its description. 
  */

export const personAccount: { [key: string]: any } = {
  firstName: "Yagy",
  lastName: "Turk",
  incomes: {
    food: 150,
    clothes: 500,
    beverages: 300,
  },
  expenses: {
    rent: 100,
    food: 100,
  },
  totalIncome: function (): number {
    let sum: number = 0;
    const arr: number[] = Object.values(this.incomes);
    for (let index = 0; index < arr.length; index++) {
      const element: number = arr[index];
      sum = sum + element;
    }
    return sum;
  },
  totalExpense: function (): number {
    let sum: number = 0;
    const arr: number[] = Object.values(this.expenses);
    for (let i: number = 0; i < arr.length; i++) {
      const element: number = arr[i];
      sum = sum + element;
    }
    return sum;
  },
  accountBalance: function (): number {
    return this.totalIncome() - this.totalExpense();
  },
  accountInfo: function (): string {
    return `${this.firstName} ${this.lastName}'s total income is ${this.totalIncome()}, total expense is ${this.totalExpense()} and account balance is ${this.accountBalance()}.`;
  },
  addIncome: function (key: string, value: number): void {
    this.incomes[`${key}`] = value;
  },
  addExpense: function (key: string, value: number): void {
    this.expenses[`${key}`] = value;
  },
};

export interface Person {
  _id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  isLoggedIn: boolean;
}

export const anotherUsers: Person[] = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  ratings: { userId: string; rate: number }[];
  likes: string[];
}

export const products: Product[] = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
