function bubble_sort(nums) { //結果實作成選擇排序由左邊開始比
  console.log("ori = " + nums);

  for (let i = 0; i < nums.length; i++) {
    console.log("process ["+(i+1)+"]= " + nums);

   for (let j = nums.length - 1; j >= i; j--) {
     if (nums[i] > nums[j]) {
       let temp = nums[j];
       nums[j] = nums[i];
       nums[i] = temp;
     }
   }


   }  




  console.log("final = " + nums);
}
// bubble_sort([2, 4, 3, 1, 6, 5]);
bubble_sort([3, 1, 4, 2, 6, 5]);