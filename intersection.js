function intersection(arr1,arr2){
    console.log("1111111");      
    console.log("11111112"+ arr1.length);    
  let result=[];
  //result.push(99);
    for (let i=0;i<arr1.length;i++ ){
        console.log("222222");        
  console.log("Arr1["+i+"] = "+ arr1[i]);      
    for (let j=0;j<arr2.length;j++){
     if ( arr1[i]==arr2[j] ){
        result.push(arr1[i]);

     }
    }


  }

  console.log(result);
  return result;
}

let arr1=[];
let arr2=[];
intersection([1,2,3],[1,4,5,6,2,3,7]);