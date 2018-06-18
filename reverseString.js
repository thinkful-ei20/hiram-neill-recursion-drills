function reverseString(str) {
  if (str.length === 1) {
    return str;
  }
  console.log(str); 
  return reverseString(str.slice(1)) + str[0]

}

console.log(reverseString('Hello'))
