const express = require('express');
const app = express();

app.use('/',express.static('build'));

app.get('/health',(req,res) => {
    res.send('OK');
})

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log('server-started');
})