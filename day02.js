const fs = require('node:fs');

// PART 1 TEST DATA
/* const inputData = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green` */

// INPUT DATA
const inputData = fs.readFileSync('./day02-input.txt', 'utf8');

// PARSE DATA INTO ARRAY CONTAINING AN ARRAY FOR EACH LINE
let dataArray = inputData.split("\n");
for (let l in dataArray) {
   dataArray.splice(l, 1, dataArray[l].replaceAll("Game","").replaceAll(":",",").replaceAll(";",",").replaceAll(" ","").split(",") );
}
// console.log(dataArray,"\n");

// PART 1 SOLUTION
function partOne(dataArr) {
   let testCubes = {red: 12, green: 13, blue: 14};
   let sum = 0;
   for (let line of dataArr) {
      let possible = true;
      // console.log(color, testCubes[color]);
      for (color in testCubes) {
         for (let item of line) {
            if (item.includes(color)) {
               // console.log(`${item} has ${color}`);
               // console.log( Number(item.replace(color,"")) );
               if (Number(item.replace(color,"")) > testCubes[color] ) {
                  possible = false;
                  break;
               }
            }
            if (!possible) { break; }
         }
         if (!possible) { break; }
      }
      if (possible) { sum += Number(line[0]); }
      // console.log(`sum is ${sum}`);
   }
   return sum;
}

console.log(partOne(dataArray));