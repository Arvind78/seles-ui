import React, { useEffect, useState } from 'react'
import axios from "axios"

// TodaySalesRevenue
const TodaySalesRevenue = () => {
  const [revenue,setRevenue]=useState("");
  useEffect(()=>{
   axios("http://localhost:8080/api/products/revenue").then((data)=>{
    setRevenue(data.data.todaySalesRevenue)
  }).catch((err) => {
    throw err;
   })
  },[])
  return (
    <div style={{textAlign:"center",margin:"10px 0px"}}>
      <h4>Total Sales Revenue {revenue} </h4>
    </div>
  )
}

export default TodaySalesRevenue;