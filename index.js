const express = require('express');
const device = require('express-device');
const app = express();
const d = require('device');
const a = d();
// Middleware
app.use(device.capture());

app.get('/', (req, res) =>{
    res.send('Hola ' +'' );
});

Object.keys(a['parser']).forEach(e => {
    console.log(e, ' -> ',a[e]);
});

app.listen(3000, ()=> console.log('Server running'));