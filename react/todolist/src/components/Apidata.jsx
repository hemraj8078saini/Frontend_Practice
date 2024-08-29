import { useEffect, useState } from "react"

const Apidata=()=>{
   const[data,setdata]=useState([])
                        //   method 1
//    const api=()=> fetch("https://fakestoreapi.com/products")
//     .then((res)=>res.json())
//     .then((datas)=>{setdata(datas) ;console.log(data);
//     })
//     .catch((error)=>console.log(error)
//     )      
                                //   method 2
    let api= async()=> {
     try {
        let res= await fetch("https://fakestoreapi.com/products")
        let datas=await res.json();
        setdata(datas)
        console.log(datas)
    } catch (error) {
         console.log(error);
         
    }
    finally{
        console.log("your program is compleate")
    }
    }
    console.log("hello")
    useEffect(()=>{

        api()
    },[])
    return(
        <div className="grid grid-cols-3 gap-1 ">
        { data.map((item)=>{
            return(
                <div className="border-2 rounded-lg" key={item.id}>
                <img className="w-[300px] h-[300px] mx-auto" src={item.image}></img>
                <h1>{item.title.length > 20 ? `${item.title.slice(0, 10)}...` : item.title}</h1>
                <h2>{item.price}</h2>
                
                <h2>{item.rating.count}</h2>
                
                </div>
            )
        })}
        </div>
    )
}
export default Apidata;