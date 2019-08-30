const binarySearch = (list, item) => {
  let min = 0
  let max = list.length - 1
  let guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2)
    if (list[guess] === item) {
      return guess
    } else if (list[guess] > item) {
      max = guess - 1
    } else {
      min = guess + 1
    }
  }

  return -1
}

console.log(binarySearch([1,2,3,4,5], 2))