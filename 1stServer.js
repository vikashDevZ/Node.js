const http = require('http')

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
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


server.listen(5001);



