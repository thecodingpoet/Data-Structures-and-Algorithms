const insertionSort = nums => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if(nums[j] > nums[i]) {
        const item = nums.splice(i, 1)
        nums.splice(j, 0, item[0]);
      }
    }
  }
  return nums;
}

var arr = [1, 0, 3, 5, 2]
console.log(insertionSort(arr), 'array')