'use strict';


function codeCracker (string) {
  let stringArray = string.split(' ');
  console.log(stringArray);
  let resultString = '';
  for (let i = 0; i < stringArray.length; i++){
    if (stringArray[i][0] === 'a') {
      resultString += stringArray[i][1];
    } else if (stringArray[i][0] === 'b') {
      resultString += stringArray[i][2];
    } else if (stringArray[i][0] === 'c'){
      resultString += stringArray[i][3];
    } else if (stringArray[i][0] === 'd'){
      resultString += stringArray[i][4];
    } else {resultString += ' ';}
  }
  return resultString;
}

console.log(codeCracker('apple'));
console.log(codeCracker('craft block argon meter bells brown croon droop'));