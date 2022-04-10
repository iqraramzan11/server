const express = require('express');
const app = express();
const port = 80;
const router = require('./router/route')
const path = require('path');
app.use(express.static('./static'))
app.use('/api', router)

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./static/index.html"))
})
app.get('/about', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./static/about.html"))
})
app.listen(port, ()=>{
    console.log(`User hit the server ${port}`);
})