function multiply(num1, num2) {
    return num1 * num2;
}
function getNumber(number) {
    let rlSync = require('readline-sync');
    let myNumber = rlSync.question(number);
    return myNumber;
}
let num1 = getNumber("enter the first number: ");
let num2 = getNumber("enter the second number: ");
console.log (` ${multiply(num1, num2)} `);
