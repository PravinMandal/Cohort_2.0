const express = require('express');
const app = express();

app.get('/data', (req, res)=> {
    const dummy = [
        {
            username : 'pravin',
            city : 'pune',
            age : 21
        }
    ]
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173').json({data : dummy});
})

app.listen(8000, ()=> {
    console.log('server is running');
})