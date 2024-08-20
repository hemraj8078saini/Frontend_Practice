let obj1={
    name:"hemraj",
    last:"saini",
    
   fullname:function(city){
    return `${this.name}${this.last}${city}`
   }
}
let obj2={
    name:"hemraj",
    last:"saini",
}


console.log(obj1.fullname(obj1));

//    this is call method
console.log(obj1.fullname.call(obj2,"kota"))

// apply method 
console.log(obj1.fullname.apply(obj2,["kota"]))
//bind method
const data=obj1.fullname.bind(obj2,["kota"])
console.log(data())


