function getName (prompt) {
    let rlSync = require('readline-sync');
    let name = rlSync.question(prompt);
    return name;
}

let firstName = getName("enter your first name ");
let lastName = getName("enter your last name ");
console.log(`hi ${firstName} ${lastName} !!`);
