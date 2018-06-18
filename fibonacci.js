function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2)

}

console.log(fibonacci(1))
console.log(fibonacci(7))
console.log(fibonacci(10))

// Iterative solution
// 1,1,2,3,5,8,13
function iFib(number) {
  if (number === 0 || number === 1) return number;

  number1 = 1;
  number2 = 0;
  sequenceNumber = undefined;

  for (var i = 0; i < number; i++) {
    sequenceNumber = number1;
    number1 = number1+number2;
    number2 = sequenceNumber;
  }


  return number2;
}

console.log(iFib(7))
