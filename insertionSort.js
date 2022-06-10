function insertionSort(nums) {
  console.log("ori = " + nums);

  for (let i = 1; i < nums.length; i++) {
    console.log(" loop_1 ["+i+"] = " + nums);
    let key = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j+1] = key;
  }
  console.log("final = " + nums);
}
insertionSort([2, 4, 3, 1, 6, 5]);

