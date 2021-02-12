let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray=[]
function findIntegers(parameter) {
  for (let index=0; index< parameter.length; index+=1) {
    if(Number.isInteger(parameter[index])=== true ) {
      newArray.push(parameter[index]);

    }
    
  }
  console.log(newArray);
}
let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]
 
