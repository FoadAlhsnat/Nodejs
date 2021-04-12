const fs=require('fs');

const dataBuffer= fs.readFileSync('./Foad.json')
const data=JSON.parse(dataBuffer.toString())
data.name='foad'
data.age=21

const str=JSON.stringify(data)
fs.writeFileSync('./Foad.json',str)