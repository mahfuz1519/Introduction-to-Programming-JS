let rlsync = require('readline-sync');
let number = rlsync.question('enter a positive number ');

function factorial(number) {    
     let result = 1;
     for (let value =1; value<=number; value++) {
         result *=value;
     } 


    console.log( result );
}

factorial(number);
