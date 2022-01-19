const http = require('http')


//using event emmiter API
const server=http.createServer()          //this is syncronous way :(

    //emit request event
    //subscribe to it /listen to it/ respond to it
server.on('request',(req,res)=>{            //request must be written exactly same as it is a method
    res.end('welcome');
})


server.listen(5000,()=>console.log('server is running on port 5000'));

