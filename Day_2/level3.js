"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const str0 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(`Count the number of word love in this '${str0}',Result:${str0.match(/love/gi)?.length}`);
/* cspell: disable-next-line */
const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence.replaceAll('%', '').replaceAll('\$', '').replaceAll('@', '').replaceAll('#', '').replaceAll(';', '').replaceAll('!', '').replaceAll('&', ''));
const str6 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const arr = str6.match(/\d+/g);
let annualIncome = 0;
if (arr !== null) {
    annualIncome = ((Number(arr[0]) + Number(arr.at(arr.length - 1))) * 12) + Number(arr.at(arr.length - 2));
}
console.log(`Calculate the total annual income of the person by extracting the numbers from the following text. '${str6}', Result:${annualIncome.toLocaleString()}`);
