function monthDays(string, leapYear) {

switch(string) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
    result = `${string} has 31 days`;
        break;
    case 'September':
    case 'April':
    case 'June':
    case 'November':
    result = `${string} has 30 days`;
        break;
}
return result;

switch(leapYear) {
    case 'February':
    result = `${string} has 29 days`;
        break;
    case 'February':
    result = `${string} has 28 days`;
        break;    
        return result;
}
}

console.log(monthDays('February', true));