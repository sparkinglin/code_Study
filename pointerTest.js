function pointerTest(arr1,avg){
    let left=0;
    let right=arr1.length -1;
    let result=[];
    while (right>left){
        let temp_avg= (arr1[left]+arr1[right])/2 ;
        if(temp_avg>avg){
            right--;
        }
        else if(temp_avg<avg){
            left++;
        } 
        else if(temp_avg=avg){
         result.push([arr1[left],arr1[right]]);
          left++ ;
          right -- ;
        }
    }
     console.log(result);
     return result;
}


pointerTest([-11,0,1,2,3,9,14,17,21],1.5);
