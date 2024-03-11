const express = require('express');
require('dotenv').config()
const app = express();

app.use('/',express.static('build'));

app.get('/user', async (req,res) => {
    const data = await fetch(`${process.env.jsonurl}`)
      .then(response => response.json())
      res.send(data);
})

app.get('/health',(req,res) => {
      res.send('OK');
})

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`server-started ${port}`);
})