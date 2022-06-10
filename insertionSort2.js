function bubble_sort(nums) {  //實作選擇排序由右邊開始比
    console.log("ori = " + nums);
  
  
    for (let i=0;i<nums.length;i++){
      console.log(" loop ["+i+"] = " + nums);
      for (let j=i+1;j <= nums.length ;j++){
        if(nums[i] > nums[j]){
        let temp2 = nums[j]  ;
        nums[j] = nums[i];
        nums[i] = temp2;
        }
        console.log(" loop [X] = " + nums);
      }
  
    }
  
  
    console.log("final = " + nums);
  }
  bubble_sort([2, 4, 3, 1, 6, 5]);
  