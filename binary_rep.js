function binaryRep(n) {
  if (!n) return ''
  return binaryRep(Math.floor(n / 2)) + Math.floor(n % 2).toString()
}

console.log(binaryRep(7))
console.log(binaryRep(11))
console.log(binaryRep(20))
console.log(binaryRep(32))
console.log(binaryRep(15))
