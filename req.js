const axios =require('axios');
const request =require('request')

const fechdata=async (callback)=>{
  const data=await axios.get('https://dog.ceo/api/breeds/image/random')
  callback(data.data)
}

const fetchdatareq=(callback)=>{
  const url='https://dog.ceo/api/breeds/image/random';
  request({url:url,json:true},(err,res)=>{
    callback(res.body)
  })
}

fetchdatareq((data)=>console.log(data.message))
//fechdata((data)=>console.log(data))