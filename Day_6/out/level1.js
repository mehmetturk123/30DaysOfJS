"use strict";
//Exercise: Level 1
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomNumber = void 0;
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
function randomNumber(min, max) { return (Math.floor(Math.random() * (max - min + 1)) + min); }
exports.randomNumber = randomNumber;
;
const randomNumbers = [];
randomNumbers.fill(0);
for (let i = 0; i < 5; i++) {
    randomNumbers[i] = randomNumber(0, 100);
}
console.log(randomNumbers.toSorted((a, b) => a - b).toString());
//Develop a small script which generate array of 5 random numbers and the numbers must be unique
const uniqueRandomNumbers = [];
uniqueRandomNumbers.fill(0);
for (let i = 0; i < 5; i++) {
    let tempRandomNumber = randomNumber(0, 100);
    while (uniqueRandomNumbers.includes(tempRandomNumber)) {
        tempRandomNumber = randomNumber(0, 100);
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
let random = randomNumber(33, 90);
//Filling arrays with unique numbers and characters.
for (let i = 0; i < bound; i++) {
    while (randomCharacterIndices.includes(random)) {
        random = randomNumber(33, 90);
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
            let tempRandomNumber = randomNumber(33, 90);
            while (randomCharacterIndices.includes(tempRandomNumber)) {
                tempRandomNumber = randomNumber(33, 90);
            }
            randomCharacterIndices[index] = tempRandomNumber;
            randomCharacters[index] = String.fromCharCode(tempRandomNumber);
            randomCharacters[index] = randomCharacters[index].replaceAll(regex, ' ');
        }
    } while (randomCharacters[index] == ' ');
});
console.log(randomCharacters.toString().replaceAll(/,/g, ''));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGV2ZWwxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGV2ZWwxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQkFBbUI7OztBQUtuQjs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUVIOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBR0gsaUVBQWlFO0FBRWpFLCtEQUErRDtBQUMvRCxTQUFnQixZQUFZLENBQUMsR0FBVyxFQUFFLEdBQVcsSUFBVyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQTVILG9DQUE0SDtBQUFBLENBQUM7QUFFN0gsTUFBTSxhQUFhLEdBQWEsRUFBRSxDQUFDO0FBQ25DLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFdEIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO0lBQ3ZCLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUUvRCxnR0FBZ0c7QUFFaEcsTUFBTSxtQkFBbUIsR0FBYSxFQUFFLENBQUM7QUFDekMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRTVCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztJQUN2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