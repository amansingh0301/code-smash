const express = require('express');
const app = express();

app.use('/',express.static('build'));

app.get('/health',(req,res) => {
    res.send('OK');
})

app.listen(8080,()=>{
    console.log('server-started');
})