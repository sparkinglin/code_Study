function palindrome_point(testStr){
    tempArr=testStr.split("");
    
    let left=0;
    let right=tempArr.length - 1;

    while (left <= right){
       if(tempArr[left]==tempArr[right]){
           left ++;
           right --;
       } else if (tempArr[left]=tempArr[right]){
           console.log("false");
           return false;
       }


    }
      console.log("true");
      return true;    
    

    
    }
    
    palindrome_point("AKGBUdBGKA");