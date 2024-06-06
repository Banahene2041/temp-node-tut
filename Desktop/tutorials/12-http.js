const http = require("http")

const server = http.createServer((req,res)=> {
    if (req.url === "/"){
        res.end("Welcome to our home page")
    }  
    if (req.url === "/about"){
        res.end("this is our about page")
    }
    res.end(`
    <h1>oops!</h1>
    <p>it seems the page you navigated to is not available or correct</p>   
    <a href="/">Back Home</a>
    `)
})

server.listen(4000)