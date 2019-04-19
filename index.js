const express = require('express');
const device = require('express-device');
const app = express();
// Middleware
app.use(device.capture());

app.get('/', (req, res) =>{
    console.log(req.headers);
    res.send('Hola ' +req.device.type );
});

app.listen(3000, ()=> console.log('Server running'));