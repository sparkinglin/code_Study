function real_insertionSort(nums) {
    console.log("ori = " + nums);
  
    for (let i = 1; i < nums.length; i++) {
      console.log("process ["+(i+1)+"]= " + nums);
  
     

     for (let j = i; j >=0; j--) {
      console.log("process JJ ["+j+"]= " + nums);
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
  real_insertionSort([5,3,4,7,2,8,6,9,1]);