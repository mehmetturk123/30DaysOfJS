// Exercises: Level 1

//Create an empty object called dog
const dog: { [key: string]: any } = {};

//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof.
dog.name = "Pale";
dog.legs = 4;
dog.color = "white";
dog.age = 7;
dog.bark = function (): string {
  return "woof woof";
};

// Get name, legs, color, age and bark value from the dog object.
/*
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());
*/
