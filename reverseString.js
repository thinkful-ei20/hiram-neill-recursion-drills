function reverseString(str) {
  if (str.length === 1) {
    return str;
  }

  return reverseString(str.slice(1)) + str[0]

}

console.log(reverseString('Hello'))

// Iterative solution

function iReverseString(str) {
  let accumulator = '';
  while (str !== '') {
    accumulator = str[0] + accumulator;
    str = str.slice(1);
  }
  return accumulator
}
console.log(iReverseString('Howdy'))
