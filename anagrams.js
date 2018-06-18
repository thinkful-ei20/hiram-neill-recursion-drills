function anagrams(word) {
  if (word.length <= 1) return [word]
  if (word.length === 2)
    return [
      word,
      word
        .split('')
        .reverse()
        .join('')
    ]
  let words = []
  for (let i = 0; i < word.length; i++) {
    const perms = anagrams(word.slice(0, i) + word.slice(i + 1)).map(
      item => word[i] + item
    )
    words = [...words, ...perms]
  }
  return words
}

console.log(anagrams('east'))
console.log(anagrams('ast'))
console.log(anagrams('as'))

/**
 * east
 *
 * e -> anagrams(ast).map(item => e + item) -> a -> anagrams(st).map(item => a + item) -> [st, ts]
 * e -> anagrams(ast).map(item => e + item) -> a -> [st, ts].map(item => a + item)
 * e -> anagrams(ast).map(item => e + item) -> [ast, ats]
 * e -> [ast, ats].map(item => e + item)
 * [east, eats]
 *
 * a -> ...
 */

// return [
//   ...anagrams(word[word.length - 1] + word.slice(1, word.length - 1)).map(
//     item => word[0] + item
//   ),
//   ...anagrams(word.slice(1).slice(1) + word[0]).map(
//     item => word.slice(1)[0] + item
//   ),
//   ...anagrams(word.slice(0, word.length - 1)).map(
//     item => word[word.length - 1] + item
//   )
// ]
