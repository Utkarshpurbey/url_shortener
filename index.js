const express = require('express');
const config = require('./configuration');

const app = express();

config.establishConnection('mongodb://127.0.0.1:27017/').catch((e)=>{
    console.log('Error in establishing connection',e);
})

app.listen(config.PORT,(err)=>{
    if(err){
        console.log('Error in starting the server',e);
    }
    console.log(`Server stated on PORT ${config.PORT}`)
})