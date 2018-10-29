'use strict';

function jediName (firstName, lastName){
  return lastName.slice(0, 3) + firstName.slice(0, 2);
}

console.log(jediName('ethan', 'frigon'));

function beyond(num) {
 
  if (num === Infinity) {
    return('And beyond');
  }

  if (num % 2 === 0) {
    return('To inifinity');
  }

  if (num %2 !== 0) {
    return('To negative infinity');
  }

  if (num === 0) {
    return('Staying home')
  }

}

console.log(beyond(Infinity)); 