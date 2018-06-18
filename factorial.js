function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1)
}

console.log(factorial(5))

// Iterative solution

function iFactorial(num) {
  let acc = 1;
  for (let i = num; i > 0; i--) {
    acc *= i;
  }
  return acc;
}

console.log(iFactorial(5))
