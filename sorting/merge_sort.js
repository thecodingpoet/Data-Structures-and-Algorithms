const mergeSort = nums => {
  if (nums.length < 2) {
    return nums
  }

  const midpoint = Math.floor(nums.length / 2)
  const left = nums.slice(0, midpoint)
  const right = nums.slice(midpoint, nums.length)
  
  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  const results = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }

  return results.concat(left, right)
}

var arr = [1, 0, 3, 5, 2]
console.log(arr, mergeSort(arr), 'array')
