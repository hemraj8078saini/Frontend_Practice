                        //  method=  1

// let arr=[1,2,3,4,5]
// console.log(arr.reverse())
                         

                           //method=2
// let arr1=[1,2,3,4,5]
// let rev=[]
// for(let i=arr1.length-1;i>=0;i--)
// {
//     rev.push(arr1[i])
// }
// console.log(rev);
    
let arr=[1,2,3,4,5]
let rev=[];
let i=arr.length-1
while( i>=0)
{
  rev.push(arr[i])
  i--;

}
console.log(rev);

let arr2=[
  {name:'dhoni',city:'mumbai'},
  {name:virat,city:mumbai},
  {name:rohit,city:jaipur}
  
]
console.log(arr2.map(num=>num))