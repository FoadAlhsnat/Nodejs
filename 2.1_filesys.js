const fs = require('fs');

// fs.write('foad.txt','hi im foad',(err)=>{
// console.log('done');
// })

// fs.copyFile('foad.txt', 'source.txt', (err) => {
//   if (err) throw err;
//   console.log('source.txt was copied to destination.txt');
// });


// fs.rename('F:\\fullsatck\\Nodejs\\source.txt','F:\\fullsatck\\Nodejs\\copy.txt',()=>console.log('ok'))




 async function files() {
  let arr = []
return new Promise ((res,rej)=>{
  fs.readdir("./d", (err, data) => {
    if(err) rej(err) 
    res(data) 
  })
})
  // let arr2 = fs.readdirSync('./')
 // return arr2
}




console.log(files()); 
//console.log(files());
//files().then(res=>console.log(res)).catch(err=>console.log(err)) 

