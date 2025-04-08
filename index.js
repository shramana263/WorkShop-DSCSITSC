const fs = require("fs");
const http=require("http");
const path = require('path');

const server= http.createServer((req,res) => {
    const pathname = req.url;
    console.log(pathname)
    if(pathname=="/"){

        res.writeHead(200);
        res.end("hello from server")
    }else if(pathname==="/product"){
        res.writeHead(200);
        res.end("hello from product page")
    }
    else if(pathname==="/api"){
        res.writeHead(200);
        res.end("hello from API")
    }
    
    else{
        res.writeHead(404 ,{
            "Content-type":"text/html"
        });
        res.end("<h1>Page not found</h1>");
    }
})

const PORT=8000

server.listen(PORT,()=>{
    console.log("listening to incoming request on PORT: 8000")
    console.log(`http://localhost:${PORT}`)
})

//----------------------------------------------------------------------------------------------------------------------
//using file system
// const textIn=fs.readFileSync("./data/text-in.txt", 'utf-8');
// const time_ = new  Date()

// fs.writeFileSync('./data/text-out.txt',`This is a new line\n${textIn}\nCreated On: ${time_.toLocaleDateString()}`);

// console.log(textIn);