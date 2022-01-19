//stream are used to read sequentally
//writable =>write sequentally
//readable =>read sequentally
//dublex => read and write seqentally
//transform => data can be modified while reading or writing
//just like events many built in module in nodes extends STREAMS interface
//streams extends emmiter class

const {writFileSync, writeFileSync} = require('fs')
for(let i =0; i<=1000;i++){
    writeFileSync('./content/big.text',`created using STREAM readFile ${i}\n`,{ flag:'a' })
}

const {createReadStream} =require('fs');
const stream = createReadStream('./content/big.text',{highWaterMark:90000,encoding:'utf8'});  //highWaterMark manages the size of buffer

stream.on('data',(lol)=>{
    console.log(lol);
    console.log(lol.length, 'bytes of data');
})

stream.on('error',(err)=>{console.log(err)});


