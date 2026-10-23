
// const http = require('http');

// import http from 'http'

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end("Welcome to Node.js server");
// });

// server.listen(2000, () => {
//     console.log('Server running at http://localhost:2000');
// });


import http from 'http'

const data = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end("this is my node.js")
})

data.listen(3000,()=>{
    console.log('Server running at http://localhost:3000')
});