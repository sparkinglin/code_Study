function slidingWindow(arr1,size){
let max= 0;

console.log(arr1.length);
console.log(size);

for (let i=0;i<=arr1.length-size;i++){
    console.log(i);
    let sum=0;
  for (let j=i;j<i+size;j++){
    //for (let j=i;j<j+1;j++){
   // console.log("j loop"+arr1[j]);
    sum= sum+arr1[j];
  }
  if (sum> max){max=sum;}
}
console.log("MAX value = "+max);
return max;
 
}


slidingWindow([2,7,3,5,1,6,-11,-5],3);