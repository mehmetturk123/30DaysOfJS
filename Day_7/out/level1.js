"use strict";
//Exercises: Level 1
// cSpell:words Yagiz
/* Declare a function fullName and it print out your full name.

function fullName(): void {
    console.log('Mehmet Yagiz Turk');
} */
/* Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name. */
function fullName(firstName, lastName) {
    return (firstName + ' ' + lastName);
}
// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(x, y) {
    return (x + y);
}
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    return (length * width);
}
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
    return (2 * (length + width));
}
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    return (length * width * height);
}
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle.
const areaOfCircle = (radius) => (Math.PI * radius * radius);
// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radius) {
    return (2 * Math.PI * radius);
}
// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function densityCalculator(mass, volume) {
    return (mass / volume);
}
/* Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.
Write a function which calculates a speed of a moving object, speed. */
function speedCalculator(distanceTraveled, totalTime) {
    return (distanceTraveled / totalTime);
}
// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
/**
 * @param gravity If omitted, gravity assumed to be Earth's gravity.
 * @returns Weight of a substance
 */
function weightCalculator(mass, gravity = 9.807) {
    return (mass * gravity);
}
//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(oC) {
    return (oC * (9 / 5));
}
/* Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
Write a function which calculates bmi.
BMI is used to broadly define different weight groups in adults 20 years old or older.
Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */
/**
 * BMI is used to broadly define different weight groups in adults 20 years old or older.
 * Due to the precision issues with floating point, it's not going to work in the range boundaries.
 * @param weight Input weight as Kg.
 * @param height Input height as centimeter.
 */
function BMI(weight, height) {
    const cmToMeter = height / 100;
    const BMI = weight / (cmToMeter * cmToMeter);
    if (BMI < 18.5) {
        return 'Underweight';
    }
    else if (BMI >= 18.5 || BMI <= 24.9) {
        return 'Normal weight';
    }
    else if (BMI >= 25 || BMI <= 29.9) {
        return 'Overweight';
    }
    else {
        return 'Obese';
    }
}
//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
    switch (month.toLowerCase()) {
        case ('september'):
        case ('october'):
        case ('november'):
            return 'Autumn';
            break;
        case ('december'):
        case ('january'):
        case ('february'):
            return "Winter";
            break;
        case ('march'):
        case ('april'):
        case ('may'):
            return 'Spring';
            break;
        case ('june'):
        case ('july'):
        case ('august'):
            return 'Summer';
            break;
        default:
            return 'Your input not a month!';
            break;
    }
}
//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(x, y, z) {
    let tempMax = x;
    if (y < z) {
        if (tempMax < y) {
            tempMax = z; // x < y < z
        }
        else if (tempMax < z) {
            tempMax = z; // y < x < z
        }
        // y < z < x
    }
    else {
        if (tempMax < z) {
            tempMax = y; // x < z < y 
        }
        else if (tempMax < y) {
            tempMax = y; // z < x < y
        }
        // z < y < x
    }
    return tempMax;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV2ZWwxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGV2ZWwxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQkFBb0I7QUFDcEIscUJBQXFCO0FBRXJCOzs7O0lBSUk7QUFFSixzSEFBc0g7QUFFdEgsU0FBUyxRQUFRLENBQUMsU0FBaUIsRUFBRSxRQUFnQjtJQUNqRCxPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRUQsb0ZBQW9GO0FBRXBGLFNBQVMsVUFBVSxDQUFDLENBQVMsRUFBRSxDQUFTO0lBQ3BDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQUVELDZIQUE2SDtBQUU3SCxTQUFTLGVBQWUsQ0FBQyxNQUFjLEVBQUUsS0FBYTtJQUNsRCxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFFRCw4SUFBOEk7QUFFOUksU0FBUyxvQkFBb0IsQ0FBQyxNQUFjLEVBQUUsS0FBYTtJQUN2RCxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDbEMsQ0FBQztBQUVELG1KQUFtSjtBQUVuSixTQUFTLGlCQUFpQixDQUFDLE1BQWMsRUFBRSxLQUFhLEVBQUUsTUFBYztJQUNwRSxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRUQsK0dBQStHO0FBRS9HLE1BQU0sWUFBWSxHQUFHLENBQUMsTUFBYyxFQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBRTdFLDRIQUE0SDtBQUU1SCxTQUFTLGNBQWMsQ0FBQyxNQUFjO0lBQ2xDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FB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