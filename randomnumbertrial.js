function rockPaperScissors(num) {

    const randomNo = Math.floor(Math.random() * 3) + 1;

    let rock = 1;
    let paper = 2;
    let scissors = 3;

    if (randomNo === 1) {
        console.log('Rock beats scissors')
    };
    if (randomNo === 2) {
        console.log('Scissors beats paper')
    };
    if (randomNo === 3) {
        console.log('Paper beats rock')
    }
    else (randomNo !== 1 && randomNo !== 2 && randomNo !== 3){
        throw new Error ('Number greater than 3');
}
return rockPaperScissors(2)

}

try {
    rockPaperScissors(3):
    rockPaperScissors(4):
    rockPaperScissors(0): 
}