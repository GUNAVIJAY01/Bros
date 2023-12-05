import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"

export const Choice=()=>{

    const[AB,setAb]=useState([])
    
    
    
    let state=useSelector(({data})=>data)
    
    let [paara]=useSearchParams()
    let ads=paara.get("id")
    useEffect(()=>{

    let ab=state.Brand.map((v,i)=>{
        return v.Collection
    })
   let as= ab.flat().filter((vl,ind)=>{
    return Math.round(vl.Price)<=ads
   })

   setAb(as)
    
},[])
return (<>
        {AB.map((vl,ind)=>{
            return (<div key={ind}>
                    <img src={vl.CarImg} width="300px"/>
                    <h3>{vl.Price} Lakh</h3>
            </div>)
        })
        }


    </>)
}