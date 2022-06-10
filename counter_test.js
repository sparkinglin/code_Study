function counter_test(arr1,arr2){
let result=[];
let arr3= arr1.concat(arr2);
let counter={};

//counter[arr3[1]]=1;  ==> {A:1}



for (let i=0;i<arr3.length;i++    ){
  if(!counter[arr3[i]]){
      counter[arr3[i]]=1;
  }else {
    counter[arr3[i]]++;
  }

}
  //console.log(counter );
  for(let property in counter){
      if(counter[property]>=2  ){
          result.push(property);
      }
  }
   console.log(result);
   return result; 
}

counter_test([1,2,3],[1,4,5,6,2,3,7]);
