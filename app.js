const express = require ('express');

const app = express();

app.use('/', (req, res, next)=>{
    res.send('its up and running')
});

app.listen(3000, console.log('started'));