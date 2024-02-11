//Exercises: Level 1
// cSpell:words Yagiz

/* Declare a function fullName and it print out your full name.

function fullName(): void {
    console.log('Mehmet Yagiz Turk');
} */

/* Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name. */

function fullName(firstName: string, lastName: string): string {
    return (firstName + ' ' + lastName);
}

// Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(x: number, y: number): number {
    return (x + y);
}

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length: number, width: number): number {
    return (length * width);
}

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length: number, width: number): number {
    return (2 * (length + width));
}

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length: number, width: number, height: number): number {
    return (length * width * height);
}

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle.

const areaOfCircle = (radius: number): number => (Math.PI * radius * radius);

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(radius: number): number {
    return (2 * Math.PI * radius);
}

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function densityCalculator(mass: number, volume: number): number {
    return (mass / volume);
}

/* Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. 
Write a function which calculates a speed of a moving object, speed. */

function speedCalculator(distanceTraveled: number, totalTime: number): number {
    return (distanceTraveled / totalTime);
}

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
/**
 * @param gravity If omitted, gravity assumed to be Earth's gravity.
 * @returns Weight of a substance
 */
function weightCalculator(mass: number, gravity: number = 9.807): number {
    return (mass * gravity); 
}

//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(oC: number): number { 
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

function BMI(weight: number, height: number): string {
    const cmToMeter = height / 100;
    const BMI = weight / (cmToMeter * cmToMeter);

    if(BMI < 18.5){
        return 'Underweight';
    }else if(BMI >= 18.5 || BMI <= 24.9){
        return 'Normal weight';
    }else if(BMI >= 25 || BMI <= 29.9){
        return 'Overweight';
    }else{
        return 'Obese';
    }
}

//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month: string): string{

    switch(month.toLowerCase()) {
        case('september'): case('october'): case('november'):
            return 'Autumn';
            break;
        case('december'): case('january'): case('february'):
            return "Winter";
            break;
        case('march'): case('april'): case('may'):
            return 'Spring';
            break;
        case('june'): case('july'): case('august'):
            return 'Summer';
            break;
        default:
            return 'Your input not a month!';
            break;
    }

}

//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(x: number, y: number, z: number): number{
    let tempMax: number = x;

    if(y < z){
        if(tempMax < y){
            tempMax = z; // x < y < z
        }else if(tempMax < z){
            tempMax = z; // y < x < z
        }
        // y < z < x
    }else{
        if(tempMax < z){
            tempMax = y; // x < z < y 
        }else if(tempMax < y){
            tempMax = y; // z < x < y
        }
        // z < y < x
    }

    return tempMax;
}

