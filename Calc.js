const yarg =require('yargs')


yarg.command({
  command:'add',
   describe:'add 2 numbers',
  handler:function(){
    console.log( yarg.argv._[1]+ yarg.argv._[2]);
  }
})


yarg.command({
  command:'sub',
  handler:function(){
    console.log( yarg.argv._[1]- yarg.argv._[2]);
  }
})

yarg.command({
  command:'mult',
  handler:function(){
    console.log( yarg.argv._[1]* yarg.argv._[2]);
  }
})

yarg.command({
  command:'pow',
  handler:function(){
    console.log( yarg.argv._[1]* yarg.argv._[1]);
  }
})






yarg.parse()