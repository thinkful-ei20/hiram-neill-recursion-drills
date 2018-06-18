function doubleArray(arr) {
  if (!arr.length) return []
  return [arr[0] * 2, ...doubleArray(arr.slice(1))]
}

// [1, 2, 3]
// [2, 4, 6]

console.log(doubleArray([1, 2, 3]))
console.log(doubleArray([5, 10, 20]))
