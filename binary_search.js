function binary_search(nums,n) {  //
    console.log("ori = " + nums);
    let min=0
    let max = nums.length -1   
  
    while (min<=max){
        let i=0;
        i++;
        let middle=Math.floor((min+max)/2);
        if(n>nums[middle]){
            min=middle+1;
                  } 
        else if(n<nums[middle]){
            max=middle-1;
          
        } 
        else if (n=nums[middle]){
          
            console.log("find number "+n+ " at position +" + middle+ ", find "+i+" times");
            return middle;
        }

    }
    console.log("Can't find number"); 
       return -1    
  
  
    console.log("final = " + nums);
  }
  let Test_array = [1,2,3,4,8,15,18,28,37,49,51,63,73,87,92,135];
  console.log(binary_search (Test_array,100));
  
