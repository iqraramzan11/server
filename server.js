const http = require('http');
// require('dotenv').config()
const port = 80;
const server = http.createServer((req, res)=>{
    res.end('Hello World')
})
server.listen(port, ()=>{
    console.log(`Server is up and runnning on port ${port}`);
})