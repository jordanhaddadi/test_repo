'use strict';

function getYearOfBirth(age) {
  if (age < 0){
    throw new Error('Age cannot be negative');
  }
  return 2018 - age;
}

function createGreeting(name, age) {
  const yearOfBirth = 2018 - age;

  if (!name || !age) {
      throw new Error ('Arguments not valid');
  }

  if (typeof name !== "string" || typeof age !== "number") {
      throw new TypeError();
  }

  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yearOfBirth}`;


}

try {
  const greeting1 = createGreeting('jordan', 27);
} catch(e) {console.error(e.message)};

const greeting1 = createGreeting('jordan', 27);
console.log(greeting1);