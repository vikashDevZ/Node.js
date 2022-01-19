//sending file to server using read stream

let http=require('http')
let fs=require('fs')

http.createServer(function(req,res){
    const fileStream = fs.createReadStream('./content/big.text','utf8')
    fileStream.on('open',()=>{
        fileStream.pipe(res)        // the method used to take a readable stream and connect it to a writeable stream
    })
    fileStream.removeAllListeners('error',(err)=>console.log(err));
})
.listen(5000)

//to send the data in the form of chunked using stream reader