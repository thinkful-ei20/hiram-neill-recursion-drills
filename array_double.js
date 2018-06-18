function doubleArray(arr) {
  if (!arr.length) return []
  return [arr[0] * 2, ...doubleArray(arr.slice(1))]
}

function doubleArrayIter(arr) {
  return arr.map(val => val * 2)
}

// [1, 2, 3]
// [2, 4, 6]

console.log(doubleArray([1, 2, 3]))
console.log(doubleArrayIter([5, 10, 20]))
