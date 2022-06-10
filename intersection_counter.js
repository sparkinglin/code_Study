function intersection_counter(arr1,arr2){
    console.log(arr1.length);
    let result=[];
    for (let i=0;i<arr1.length;i++){

        for (j=0;j<arr2.length;j++){
         console.log(arr1[i],arr2[j]);   
         if(arr1[i]==arr2[j]){
             result.push(arr1[i]);
         }

        }

    }

    console.log(result);
    return result;
}



intersection_counter([1,2,3],[1,2,3,4]);