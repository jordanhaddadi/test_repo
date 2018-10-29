'use strict';

function rockPaperScissors (num){
  if (num < 0 || num > 3){
    throw new Error('Pick a better number');
  }
  const randomNo = Math.floor(Math.random() * 3) + 1;
  //console.log(randomNo);
  if(randomNo === 1){
    console.log('computer plays rock');
  } else if (randomNo === 2){
    console.log('computer plays paper');
  } else if (randomNo === 3){
    console.log('computer plays scissors');
  }
  if(num === 1){
    console.log('player plays rock');
  } else if (num === 2){
    console.log('player plays paper');
  } else if (num === 3){
    console.log('player plays scissors');
  }

  if (num === 1 && randomNo === 3){
    console.log('player wins');
  } else if (num === 3 && randomNo === 1){
    console.log('computer wins');
  } else if (num > randomNo){
    console.log('player wins');
  } else if (num === randomNo) {
    console.log('tie');
  } else {
    console.log('computer wins');
  }
}

try {
  rockPaperScissors(3);
  rockPaperScissors(4);
} catch(e) {
  console.error(e.message);
}

//console.log(rockPaperScissors(3));