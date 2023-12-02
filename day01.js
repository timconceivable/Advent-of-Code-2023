const fs = require('node:fs');

// PART 1 TEST DATA
/* const inputData = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet` */

// PART 2 TEST DATA
/* const inputData = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen` */

/* const inputData = `34292
tfive7krmfjptnrcjxfmpfzz6frtknvcvfive
vmmdpzfourcxcctv9jjzrhttjmg2bvhhqxxsmz4
1234567898765432123` */

// INPUT DATA
const inputData = fs.readFileSync('./day01-input.txt', 'utf8');
const dataArray = inputData.split("\n");

// PART 1 SOLUTION
function partOne(arr) {
   let sum = 0;
   for (let line of arr) {
      let value = "";
      for (let loop = 0; loop < 2; loop++) {
         // console.log(line);
         for (let char of line) {
            if (!isNaN(char)) {
               value += char;
               break;
            }
         }
         line = line.split("").reverse().join("");
      }
      // console.log(value);
      sum += Number(value);
   }
   return sum;
}

// PART 2 SOLUTION
function partTwo(arr) {
   let nums = [1,2,3,4,5,6,7,8,9,"one","two","three","four","five","six","seven","eight","nine"];
   let sum = 0;
   for (let line of arr) {
      // console.log(line);
      let value = "";
      let index = line.length;
      let digit = 0;
      while (value.length < 2) {
         for (let num of nums) {
            if (line.includes(num)) {
               if ((value.length) < 1) {
                  if (line.indexOf(num) < index) {
                     index = line.indexOf(num);
                     digit = num;
                  } 
               } else {
                  if (line.lastIndexOf(num) > index) {
                     index = line.lastIndexOf(num);
                     digit = num;
                  }
               }
            }
         }
         if (isNaN(digit)) {
            if (digit == "one") { digit = 1; }
            if (digit == "two") { digit = 2; }
            if (digit == "three") { digit = 3; }
            if (digit == "four") { digit = 4; }
            if (digit == "five") { digit = 5; }
            if (digit == "six") { digit = 6; }
            if (digit == "seven") { digit = 7; }
            if (digit == "eight") { digit = 8; }
            if (digit == "nine") { digit = 9; }
         }
         // console.log(digit);
         value += digit; 
      }
      sum += Number(value);
   }
   return sum;
}

console.log(`part 1: ${partOne(dataArray)}`);
console.log(`part 2: ${partTwo(dataArray)}`);