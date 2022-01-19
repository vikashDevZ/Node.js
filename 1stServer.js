const http = require('http')

const server=http.createServer((req,res)=>{             //this is syncronous way :(
    if(req.url=='/'){
        console.log('hello')
        res.end('welcome to the home page')
        return
    }
    if(req.url=='/about'){
        res.end('here is our about info')
        return
    }
    res.end(`
        <h1>oops something wrong from our side</h1>
        <p>cant find the page you are looking for</p>
        <a href="/">back home</a>
        `)
})


server.listen(5000,()=>console.log('server is running on port 5000'));
