let rlSync = require('readline-sync');
let age = parseInt(rlSync.question("enter your age: "));
console.log(`you are ${age} years old`);
for (let time =10; time<=40; time += 10) {
  console.log(`In ${time} years, you will be ${age+time} years old`);

}
