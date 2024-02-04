//I consciously passed some exercises.

/* Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

const base: string | null = window.prompt('Enter base:');
const height: string | null = window.prompt('Enter height:');

if(base != null && height != null){
    window.alert(`The area of the triangle is ${ 0.5 * parseInt(base) * parseInt(height)}`);   
} */

/* Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c) 

const sideA: string | null = window.prompt('Enter side a:');
const sideB: string | null = window.prompt('Enter side b:');
const sideC: string | null = window.prompt('Enter side c:');

if(sideA != null && sideB != null && sideC != null){
    window.alert(`The perimeter of the triangle is ${parseInt(sideA) + parseInt(sideB) + parseInt(sideC)}`)
}*/

/*Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

const lengthOfRectangle: string | null = window.prompt("Enter length:");
const widthOfRectangle: string | null = window.prompt('Enter width:');

if(lengthOfRectangle != null && widthOfRectangle != null){
    window.alert(`The perimeter of the rectangle is ${2 * (parseInt(lengthOfRectangle) + parseInt(widthOfRectangle))}`);
}*/ 

/* Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14 

const radius: string | null = window.prompt('Enter radius:');
const customPi: number = 3.14;

if(radius != null){
    window.alert(`The area of circle is ${customPi * Math.pow(parseFloat(radius), 2)} and circumference of a circle is ${2 * customPi * parseFloat(radius)}`);
}*/

/* Calculate the slope, x-intercept and y-intercept of y = 2x -2 

const x1: number = 3
const x2: number = 2;
const y1: number = 2 * x1 - 2;
const y2: number = 2 * x2 - 2;
const slope: number = (y2-y1) / (x2-x1);
// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10) 
const a1: number = 2;
const b1: number = 2;
const a2: number = 6;
const b2: number = 10;
const m = (b2-b1) / (a2-a1);
// Compare the slope of above two questions.
console.log(m === slope);
*/

/* Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0. 

const x: number = -3;
const y: number = (x*x) + 6*x + 9;
console.log(y);
*/

/* Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person? 

const workHours: string | null = window.prompt('Enter hours:');
const ratePerHour: string | null = window.prompt('Enter rate per hour:');

if(workHours != null && ratePerHour != null){
    window.alert(`Your weekly earning is ${parseInt(workHours) * parseInt(ratePerHour)}`);
}*/

/* If the length of your name is greater than 7 say, your name is long else say your name is short. 
// cSpell:words Yagy
const yourName: string | null = window.prompt("Enter your name:");

if(yourName != null){
    window.alert(`Your name is ${(yourName.length < 7) ? 'short' : 'long'}`);
}
*/


