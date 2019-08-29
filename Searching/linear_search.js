const linearSearch = (list, item) => {
  let index = -1
  list.forEach((listItem, i) => {
    if (listItem === item) {
      index = i
    }
  })
  return index
}

console.log(linearSearch([4,9,5,3,19, 31, 74, 2], 19)) // Returns index of the item in the array
console.log(linearSearch([4,9,5,3,19, 31, 74, 2], 45)) // Returns -1 as item is not in the array