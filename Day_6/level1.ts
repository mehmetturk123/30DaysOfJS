//Exercise: Level 1

//cSpell:words mern
import { countries, webTechs, mernStack } from "./variables";

/* Write a loop that makes the following pattern using console.log():
    #
    ##
    ###
    ####
    #####
    ######
    #######

const row: number = 7;
for (let index = 0; index < row; index++) {
    let pattern: string = '';
    for(let j = 0; j <= index; j++ ){
        pattern += '#';
    }
    console.log(pattern);
}*/

/*Use loop to print the following pattern:
    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100


for(let i = 0; i < 11; i++){
    console.log(`${i} x ${i} = ${i * i}`);
}*/


//Develop a small script which generate array of 5 random numbers

/** Generate a random number between min and max inclusively */
export function randomNumber(min: number, max: number): number {return (Math.floor(Math.random() * (max - min + 1)) + min) };

const randomNumbers: number[] = [];
randomNumbers.fill(0);

for(let i = 0; i < 5; i++){
    randomNumbers[i] = randomNumber(0, 100); 
}

console.log(randomNumbers.toSorted((a,b) => a - b).toString());

//Develop a small script which generate array of 5 random numbers and the numbers must be unique

const uniqueRandomNumbers: number[] = [];
uniqueRandomNumbers.fill(0);

for(let i = 0; i < 5; i++){    
    let tempRandomNumber: number = randomNumber(0, 100);
    while(uniqueRandomNumbers.includes(tempRandomNumber)) {
        tempRandomNumber = randomNumber(0, 100);
    }
    uniqueRandomNumbers[i] = tempRandomNumber;
}

console.log(uniqueRandomNumbers.toSorted((a,b) => a - b).toString());

//Develop a small script which generate any number of characters random id
//It's only contains uppercase letters and digits.

//How many characters you want?
const bound: number = 6;

const randomCharacterIndices: number[] = [];
randomCharacterIndices.fill(0);
const randomCharacters: string[] = [];

let random = randomNumber(33,90);

//Filling arrays with unique numbers and characters.
for(let i = 0; i < bound; i++){    
    
    while(randomCharacterIndices.includes(random)) {
        random = randomNumber(33,90);
    }

    randomCharacterIndices[i] = random;
    randomCharacters[i] = String.fromCharCode(randomCharacterIndices[i]);
}

//Checking and replacing of any non alphanumerical and non digit characters.
randomCharacters.forEach((value: string, index: number) => {
    do {
            const regex: RegExp = /[^a-zA-Z0-9]/g;
            randomCharacters[index] = value.replaceAll(regex,' ');
            if(randomCharacters[index] == ' '){
                let tempRandomNumber: number = randomNumber(33,90);
    
                while(randomCharacterIndices.includes(tempRandomNumber)){
                    tempRandomNumber = randomNumber(33,90);
                }

                randomCharacterIndices[index] = tempRandomNumber;
                randomCharacters[index] = String.fromCharCode(tempRandomNumber);
                randomCharacters[index] = randomCharacters[index].replaceAll(regex,' ');
            }
    } while (randomCharacters[index] == ' ');
});

console.log(randomCharacters.toString().replaceAll(/,/g,''));

