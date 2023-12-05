import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"

export const Comparison=()=>{
    
    const [arry,setArry]=useState([]) 
    const [arryss,setArryss]=useState("") 
    
    let state=useSelector(({data})=>data)
           
    const[pars]=useSearchParams()

useEffect(()=>{
    let fsCar=Number(pars.get("FirstCar"))
    let fsId=Number(pars.get("FirstId"))
    let sdCar=Number(pars.get("SecondCar"))
    let sdId=Number(pars.get("SecondId"))
   let sa=state.Brand.find((vl,ind)=>{
    return fsCar===vl.BrandId
   })
   let as= sa.Collection.filter((vl,insd)=>{
    return fsId===vl.No
   })
   setArry(as)

   let sad=state.Brand.find((vl,ind)=>{
    return sdCar===vl.BrandId
   })
   let asd= sad.Collection.filter((vl,insd)=>{
    return sdId===vl.No
   })
   setArryss(asd)
},[])
console.log(arry)

return(<>

               {arry.map((vl,ind)=>{
                return (<div key={ind}>
                     <img src={vl.CarImg} width="300px" />   
                </div>)
               })}
    </>)
}