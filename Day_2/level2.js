"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpString = 'help';
const quote = 'There is no exercise better for the heart than reaching down and lifting people up.';
console.log(`The quote '${quote}' by John Holmes teaches us to ${helpString} one another.`);
const stringExample = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(`${stringExample}`);
console.log(`Check if typeof '10' is exactly equal to 10. If not make it exactly equal., Typeof:${typeof '10'} is not number! True version is ${typeof (Number('10'))}`);
console.log(`Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10., parseFloat('9.8'):${parseFloat('9.8')} is not equal to 10, fixed version:${Math.ceil(parseFloat('9.8'))}`);
const str0 = 'python', str1 = 'jargon';
console.log(`Check if 'on' is found in both '${str0}' and '${str1}', Result for '${str0}':${str0.includes('on')} and Result for '${str1}':${str1.includes('on')}`);
const str3 = 'I hope this course is not full of jargon.';
console.log(`'${str3}' Check if jargon is in the sentence, Result:${str3.includes('jargon')}`);
console.log(`Generate a random number between 0 and 100 inclusively, Result:${Math.floor((Math.random() * (100 + 1)))}`);
console.log(`Generate a random number between 50 and 100 inclusively, Result:${(Math.floor((Math.random() * (50 + 1)))) + 50}`);
console.log(`Generate a random number between 0 and 255 inclusively, Result:${Math.floor((Math.random() * (255 + 1)))}`);
const str4 = 'JavaScript';
console.log(`Access the '${str4}' string characters using a random number, Result:${str4.charAt(Math.floor(Math.random() * (str4.length + 1)))}`);
/** Generate a random number between 0 and bound inclusively */
function randomNumber(bound) { return (Math.floor(Math.random() * (bound + 1))); }
;
console.log(`${randomNumber(128)} ${randomNumber(128)} ${randomNumber(128)} ${randomNumber(128)} ${randomNumber(128)}\n\
${randomNumber(128)} ${randomNumber(128)} ${randomNumber(128)} ${randomNumber(128)} ${randomNumber(128)}\n\
${randomNumber(128)} ${randomNumber(128)} ${randomNumber(128)} ${randomNumber(128)} ${randomNumber(128)}\n\
${randomNumber(128)} ${randomNumber(128)} ${randomNumber(128)} ${randomNumber(128)} ${randomNumber(128)}\n\
${randomNumber(128)} ${randomNumber(128)} ${randomNumber(128)} ${randomNumber(128)} ${randomNumber(128)}`);
const str5 = 'You cannot end a sentence with because because because is a conjunction';
console.log(`${str5.replace(/because /g, '')}`);
