function bubble_sort2(nums) {
    console.log("ori = " + nums);
  
    for (let i = 0; i < nums.length; i++) {
      console.log("process ["+(i+1)+"]= " + nums);
  
     for (let j = nums.length-1; j >i; j--) {
       if (nums[j] < nums[j-1]) {
         let temp = nums[j];
         nums[j] = nums[j-1];
         nums[j-1] = temp;
       }
     }
  
  
     }  
  
  
  
  
    console.log("final = " + nums);
  }
  // bubble_sort([2, 4, 3, 1, 6, 5]);
  bubble_sort2([5,9,3,1,2,8,4,7,6]);