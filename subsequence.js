function subsequence(str1,str2){
let Arr1=str1.split("");
let Arr2=str2.split("");

let left1=0;
let left2=0;

while( left2<Arr2.length){
    console.log("No "+ left1 + Arr1[left1],Arr2[left2]);

    if(Arr1[left1]==Arr2[left2]){
        left1++;
   
        
    }
    if(left1==Arr1.length){
        console.log("true");
        return true;
    }
    left2++;
    
}
console.log("false");
return false;

}

subsequence("hello","heyllo");
//  str1= hello
//  str2= heyllo