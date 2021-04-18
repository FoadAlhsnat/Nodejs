import axios from 'axios'
import React,{useState,useEffect} from 'react'

export default function GetAll() {
  const [data,setData]=useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData=async()=>{
    const res=await axios.get('http://localhost:8000/bankapi/')
    console.log(res.data.data);
    setData(res.data.data.data)
  }
const RenderData=()=>{
  return data.map(user=>(
    <div key={user.passportId}>{user.passportId}</div>
  ))
}

  return (
    <div>
      <RenderData/>
    </div>
  )
}
