import React from "react"
import { Box,Container,Typography,Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export const CarChoices=()=>{
    const state=useSelector(({data})=>(data))
    let trss=useNavigate()

    let array=[{button:"UNDER 5 lakh",price:5},{button:"UNDER 6 lakh",price:6},{button:"UNDER 7 lakh",price:7},{button:"UNDER 8 lakh",price:8},{button:"UNDER 10 lakh",price:10},
    {button:"UNDER 15 lakh",price:15},{button:"UNDER 20 lakh",price:20},{button:"UNDER 25 lakh",price:25},{button:"UNDER 30 lakh",price:30},{button:"LUXURY CAR"}]

   let clkme=(a)=>{
            
        // let ab=state.Brand.map((v,ind)=>{
        //     return v.Collection 
        // })
        // let xs=ab.filter((vl,as)=>{
        //     return vl.Price===a
        // })
        // console.log(ab)  
    trss(`/Choice?id=${a}`)
    }

return (<Container>
        <Box>
            <h3>Find The Cars Of Your Choice</h3>
        </Box>

        <Box sx={{backgroundColor:"#e1e1e175",border:"1px solid lightgray",textAlign:"center",padding:{xs:"10px",md:"10px 40px"},margin:{xs:"0px",md:"0px"}}}>
        <Box sx={{display:"flex",flexWrap:"wrap"}}>
            
            {array.map((val,ind)=>{
                return(<Box key={ind} sx={{width:{xs:"45%",sm:"16.66%",lg:"31%"},padding:{xs:"10px 5px",lg:"10px 5px"}}}>
                <Button variant="outlined" onClick={()=>clkme(val.price)} sx={{backgroundColor:"white",width:{xs:"100%",md:"80%"},fontSize:{xs:"10px",md:"12px"},padding:{xs:"0 5px"},borderRadius:"25px",height:{xs:"30px",md:"45px"},color:"gray",border:"1px solid lightgray"}}>{val.button}</Button>
            </Box>    )
            })}
            
        </Box>
        </Box>

    </Container>)
}