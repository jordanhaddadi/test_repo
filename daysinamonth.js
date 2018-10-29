'use strict';

function monthDays(month, leapYear) {
    let result = '';
    switch (month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            result = `${month} has 31 days`;
            break;
        case 'September':
        case 'April':
        case 'June':
        case 'November':
            result = `${month} has 30 days`;
            break;
        case 'February':
        if (leapYear) {
            result = `${month} has 29 days`;      
        }
        else {result = `${month} has 28 days`;}
            break;
    }
    return result;

    // switch (leapYear) {
    //     case 'February':
    //         result = `${month} has 29 days`;
    //         break;
    //     case 'February':
    //         result = `${month} has 28 days`;
    //         break;
    //         return result;
    // }
}

console.log(monthDays('March', true));