function averagePair(arr1,avg){
let result=[];

   for (let i=0;i<arr1.length-1;i++){
       for( let j=i+1;j<arr1.length;j++){
         console.log(arr1[i],arr1[j]);
       if ((arr1[i]+arr1[j])/2==avg){
        result.push([arr1[i],arr1[j]]);

       }   

       }
       

   }

   console.log(result);
   return result;
}

averagePair([-11,0,1,2,3,9,14,17,21],1.5);