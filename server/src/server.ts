import express from 'express'
import { authRoutes } from "./routes";
require('dotenv').config()

const app = express();

app.use('/',express.static('build'));

app.use('/auth', authRoutes);

app.get('/health',(rea,res) => {
    console.log('received');
    res.send('ok');
})

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`server-started ${port}`);
})