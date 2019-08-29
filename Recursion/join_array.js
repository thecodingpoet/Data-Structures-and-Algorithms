const join = (list, character) => {
  if (list.length < 2) {
    return list[0] + character
  }

  return list.shift() + character + join(list, character)
}

const result = join(['H', 'e', 'l', 'l', 'o'], ' ')
console.log(result)
