import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

function Userview() {
    const para=useParams()
  console.log(para)
  const[userdata,setuser]=useState({})
  useEffect(()=>{
     loaduser()
  },[])
  let loaduser=async()=>{
     try{
     
      let user=    await axios.get(`https://640d98e71a18a5db837a6f46.mockapi.io/users/${para.id}`)
        setuser(user.data)
     }catch(error){

     }
  }
 return(
     <>
     <h1>{userdata.name}</h1>
     <h1>{userdata.position}</h1>
     <h1>{userdata.office}</h1>
     <h1>{userdata.age}</h1>
     <h1>{userdata.startdate}</h1>
     <h1>{userdata.salary}</h1>
     </>

 )
}

export default Userview