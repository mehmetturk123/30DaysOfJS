// Exercise: Level 1 
export{};
const challenge: string ='30 Days Of JavaScript';
console.log(challenge);
console.log(`Length of the given string:${challenge.length}`);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0,3));
console.log(challenge.slice(3,challenge.length));
console.log(challenge.includes('Script'));
/*! console.log(challenge.split()); can not useable on typescript! */
console.log(challenge.split(' '));
const companyNames: string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companyNames.split(','));
console.log(challenge.replace("JavaScript",'Python'));
console.log(`Character at index 15 in '${challenge}' string is ${challenge.charAt(15)}`);
console.log(`Character code of J in '${challenge}' string on base of 10 is ${challenge.charCodeAt(challenge.search('J'))}`);
console.log(`The position of the first occurrence of 'a' in '${challenge}' is ${challenge.indexOf('a')}`);
console.log(`The position of the last occurrence of 'a' in '${challenge}' is ${challenge.lastIndexOf('a')}`);
const stringExample: string ='You cannot end a sentence with because because because is a conjunction';
console.log(`The position of the first occurrence of the word 'because; in the following sentence:\
'${stringExample}' is ${stringExample.indexOf('because')}`);
console.log(`The position of the last occurrence of the word 'because' in the following sentence:\
'${stringExample}' is ${stringExample.lastIndexOf('because')}`);
console.log(`Use search() to find the position of the first occurrence of the word because in the following sentence:\
'${stringExample}' , Result:${stringExample.search('because')}`);
const challengeWithSpaces: string ='   30 Days Of JavaScript   ';
console.log(`Use trim() to remove any trailing whitespace at the beginning and the end of a the '${challengeWithSpaces}'! ,\
Result:${challengeWithSpaces.trim()}!`);
console.log(`Use startsWith() method with the string '${challenge}' and make the result true, Result:${challenge.startsWith('30')}`);
console.log(`Use endsWith() method with the string '${challenge}' and make the result true, Result:${challenge.endsWith('JavaScript')}`);
console.log(`Use match() method to find all the a's in '${challenge}', Result:${challenge.match(/a/gi)}`);
const str0: string = '30 Days of';
const str1: string = 'JavaScript';
console.log(`Use concat() and merge '${str0}' and '${str1}' to a single string, Result:${str0.concat(' ',str1)}`);
console.log(`Use repeat() method to print '${challenge}' 2 times, Result:${challenge.repeat(2)}`);






