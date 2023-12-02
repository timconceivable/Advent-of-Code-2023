const fs = require('node:fs');

// PART 1 TEST DATA
/* let inputData = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet` */

// PART 2 TEST DATA
/* let inputData = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen` */

// INPUT DATA
const inputData = fs.readFileSync('./day01-input.txt', 'utf8');
const dataArray = inputData.split("\n");

let sum = 0;
for (line in dataArray) {
   let lineStr = dataArray[line]
   let value = "";
   for (let loop = 0; loop < 2; loop++) {
      // console.log(lineStr);
      for (i in lineStr) {
         let char = lineStr.charAt(i);
         if (!isNaN(char)) {
            value += char;
            break;
         }
      }
      lineStr = dataArray[line].split("").reverse().join("");
      if (value.length === 2) { 
         break;
      }
   }
   // console.log(value);
   sum += Number(value);
}
console.log(sum);