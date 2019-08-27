const bubbleSort = nums => {
  let swapped;
  
   do {
    swapped = false;
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] > nums[i+1]) {
        const temp = nums[i]
        nums[i] = nums[i+1]
        nums[i+1] = temp
        swapped = true
      } 
    }
  } while(swapped);
}

var arr = [1, 0, 3, 5, 2]
console.log(bubbleSort(arr), 'array')