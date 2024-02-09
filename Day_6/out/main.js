"use strict";
//Exercise: Level 1
Object.defineProperty(exports, "__esModule", { value: true });
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
/** Generate a random number between 0 and bound inclusively */
function randomNumber(bound) { return (Math.floor(Math.random() * (bound + 1))); }
;
const randomNumbers = [];
randomNumbers.fill(0);
for (let i = 0; i < 5; i++) {
    randomNumbers[i] = randomNumber(100);
}
console.log(randomNumbers.toSorted((a, b) => a - b).toString());
//Develop a small script which generate array of 5 random numbers and the numbers must be unique
const uniqueRandomNumbers = [];
uniqueRandomNumbers.fill(0);
for (let i = 0; i < 5; i++) {
    let tempRandomNumber = randomNumber(100);
    while (uniqueRandomNumbers.includes(tempRandomNumber)) {
        tempRandomNumber = randomNumber(100);
    }
    uniqueRandomNumbers[i] = tempRandomNumber;
}
console.log(uniqueRandomNumbers.toSorted((a, b) => a - b).toString());
//Develop a small script which generate any number of characters random id
//It's only contains uppercase letters and digits.
//How many characters you want?
const bound = 6;
const randomCharacterIndices = [];
randomCharacterIndices.fill(0);
const randomCharacters = [];
let min = 33;
let max = 90;
let random = Math.floor(Math.random() * (max - min + 1)) + min;
//Filling arrays with unique numbers and characters.
for (let i = 0; i < bound; i++) {
    while (randomCharacterIndices.includes(random)) {
        random = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    randomCharacterIndices[i] = random;
    randomCharacters[i] = String.fromCharCode(randomCharacterIndices[i]);
}
//Checking and replacing of any non alphanumerical and non digit characters.
randomCharacters.forEach((value, index) => {
    do {
        const regex = /[^a-zA-Z0-9]/g;
        randomCharacters[index] = value.replaceAll(regex, ' ');
        if (randomCharacters[index] == ' ') {
            let tempRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            while (randomCharacterIndices.includes(tempRandomNumber)) {
                tempRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            }
            randomCharacterIndices[index] = tempRandomNumber;
            randomCharacters[index] = String.fromCharCode(tempRandomNumber);
            randomCharacters[index] = randomCharacters[index].replaceAll(regex, ' ');
        }
    } while (randomCharacters[index] == ' ');
});
console.log(randomCharacters.toString().replaceAll(/,/g, ''));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1CQUFtQjs7QUFLbkI7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFFSDs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUdILGlFQUFpRTtBQUVqRSwrREFBK0Q7QUFDL0QsU0FBUyxZQUFZLENBQUMsS0FBYSxJQUFXLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQUEsQ0FBQztBQUVqRyxNQUFNLGFBQWEsR0FBYSxFQUFFLENBQUM7QUFDbkMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUV0QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7SUFDdkIsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFFL0QsZ0dBQWdHO0FBRWhHLE1BQU0sbUJBQW1CLEdBQWEsRUFBRSxDQUFDO0FBQ3pDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUU1QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7SUFDdkIsSUFBSSxnQkFBZ0IsR0FBVyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakQsT0FBTSxtQkFB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