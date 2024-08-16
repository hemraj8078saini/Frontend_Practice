let number=[1,2,6,3,4]
// console.log(number.map(num=>num*2))
                                           //sum of array
//     let sum=0;
//    number.map(function(num){
//     sum= num+sum
//     }
// );
// console.log(sum)
                            //max of array

console.log(number.reduce((acc,curr)=>{
    if(curr>acc){
        return curr
    }
else{
    return acc
}
}
)
)
