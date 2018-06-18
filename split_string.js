function splitString(str, sep) {
  if (!str.includes(sep) || str.length === 1) return [str]
  if (sep === '') return [str[0], ...splitString(str.slice(1), sep)]
  let elem = ''
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i).startsWith(sep)) {
      return !elem.length
        ? [...splitString(str.slice(i + sep.length), sep)]
        : [elem, ...splitString(str.slice(i + sep.length), sep)]
    }
    elem += str[i]
  }
}

console.log(splitString('hello', 'l'))
console.log(splitString('hello my name is hiram', ' '))
console.log(splitString('even space', ''))
console.log(splitString('even space', 'sp'))
