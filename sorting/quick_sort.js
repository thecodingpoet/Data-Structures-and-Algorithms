const quickSort = nums => {
  if (nums.length <= 1) {
    return nums
  }

  const pivot = nums[nums.length - 1]
  // A better alternative of getting the pivot is to pick the pivot(median) of the first, last and middle element
  const left = []
  const right = []

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}


var arr = [1, 0, 3, 5, 2]
console.log(arr, quickSort(arr), 'array')