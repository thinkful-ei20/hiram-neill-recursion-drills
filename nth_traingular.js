function nthTriangular(n) {
  if (n === 1) return 1
  return n + nthTriangular(n - 1)
}

console.log(nthTriangular(5))

function nthTriangularIter(n) {
  let acc = 0
  for (let i = 1; i <= n; i++) {
    acc += i
  }
  return acc
}

console.log(nthTriangularIter(5))
