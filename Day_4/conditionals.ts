/* Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' 
but if not 18 give another feedback stating to wait for the number of years he needs to turn 18. 

const userInput: string | null = window.prompt('Enter your age:');

if(userInput != null){
    const numberInput: number = parseInt(userInput);
    if(numberInput >= 18){
        window.alert('You are old enough to drive.');
    }else{
      window.alert(`You are left with ${18 - numberInput} years to drive.`);
    }
}*/

/* Compare the values of myAge and yourAge using if … else. 
Based on the comparison and log the result to console stating who is older (me or you). 
Use prompt(“Enter your age:”) to get the age as input.

const myAge: number = 19;
const userInput: string | null = window.prompt("Enter your age:");
let yourAge:number;

if(userInput != null){
    yourAge = parseInt(userInput);
    if(myAge > yourAge){
        console.log(`I am ${myAge - yourAge} years older than you.`);
    }else if(myAge == yourAge){
        console.log("We're the same age!");
    }else{
        console.log(`You are ${yourAge - myAge} years older than me.`);
    }

}*/

/* If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways: using else or ternary operator. 

let a: number = 3;
let b: number = 3;

if(a > b){
    console.log('a is greater than b')
}else if(a < b)
{
    console.log('a is less than b');
}
//This is going to work when a and b are same which is not correct!
console.log(`Ternary operator way: ${(a > b) ? 'a is greater than b' : 'a is less than b'}`);
*/

/* Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? 

const userInput: string | null = window.prompt('Enter a number:');

if(userInput != null)
{
    const userNumber: number = parseInt(userInput);
    
    if(userNumber % 2 == 0){
        console.log(`${userNumber.toString()} is an even number.`);
    }else{
        console.log(`${userNumber.toString()} is an odd number.`);
    }
}*/

/* Write a code which can give grades to students according to theirs scores:
90-100 -> A, 70-89 -> B, 60-69 -> C, 50-59 -> D, 0-49 -> F 

const userInput: string | null = window.prompt('Enter a grade:');

if(userInput != null)
{
    const grade: number = parseInt(userInput);

    if((grade >= 90) && (grade <= 100)) {
        console.log('Your grade is A');
    } else if((grade >= 70) && (grade <= 89)) {
        console.log('Your grade is B');
    } else if((grade >= 60) && (grade <= 69)){
        console.log('Your grade is C');
    } else if((grade >= 50) && (grade <= 59)){
        console.log('Your grade is D');
    } else if((grade >= 0) && (grade <= 49)){
        console.log('Your grade is F');
    }
}*/

/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn. December, January or February, the season is Winter.
March, April or May, the season is Spring. June, July or August, the season is Summer. 

const userInput: string | null = window.prompt('What month it is:');

if(userInput != null)
{
    switch(userInput.toLowerCase()) {
        case('september'): case('october'): case('november'):
            console.log('The season is Autumn.');
            break;
        case('december'): case('january'): case('february'):
            console.log('The season is Winter');
            break;
        case('march'): case('april'): case('may'):
            console.log('The season is Spring.');
            break;
        case('june'): case('july'): case('august'):
            console.log('The season is Summer');
            break;
        default:
            console.log('Your input is not a month!');
            break;
    }
}*/

/* Check if a day is weekend day or a working day. Your script will take day as an input.

const userInput: string | null = window.prompt('What is the day today:');

if(userInput != null)
{
    switch (userInput.toLowerCase()) {
        case('monday'): case('tuesday'): case('wednesday'): case('thursday'): case('friday'):
            window.alert(`${userInput.toLowerCase()} is a working day.`);
            break;
        case('saturday'): case('sunday'):
            window.alert(`${userInput.toLowerCase()} is a weekend.`);
            break;
        default:
            window.alert('Your input is not a day!');
            break;
    }
}*/

/* Write a program which tells the number of days in a month, now consider leap year. 

const userYear: string | null = window.prompt('Enter the year:');
const userMonth: string | null = window.prompt('Enter a month:');

if(userMonth != null && userYear != null)
{
    const userYearNumber: number = parseInt(userYear);
    let isLeapYear: boolean = false; 

    if(Number.isNaN(userYearNumber)){
        window.alert('Your first input is not a year!');
    }else
    {
        if(userYearNumber % 4 == 0){
            if(userYearNumber % 100 == 0){
                if(userYearNumber % 400 == 0){
                    isLeapYear = true;
                }else{
                    isLeapYear = false;
                }
            }else{
                isLeapYear = true;
            }
        }else{
            isLeapYear = false;
        }
    
        const userMonthArray: string[] = userMonth.toLowerCase().split('');
        userMonthArray[0] = userMonthArray[0].toUpperCase();
        const tempString: string = userMonthArray.join('');

        switch(userMonth.toLowerCase()){
            case('january'): case('march'): case('may'): case('july'): case('august'): case('october'): case('december'):
                window.alert(`${tempString} has 31 days.`);
                break;
            case('february'):
                window.alert(`February has ${isLeapYear ? '29' : '28'} days.`);
                break;
            case('april'): case('june'): case('september'): case('november'):
                window.alert(`${tempString} has 30 days.`);
                break;
            default:
                window.alert('Your second input is not a month!');
        }
    }

}*/