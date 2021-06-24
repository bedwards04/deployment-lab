const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));
app.use("/index", express.static(path.join(__dirname, '/public/index.css')));
app.use("/Brendan", express.static(path.join(__dirname, '/public/Brendan')))

app.get('/', function(req, res) {
    
    res.sendFile( path.join(__dirname, '../index.html') );
});

const port = process.env.PORT || 4050;
app.listen(port, () => {console.log(`Server running on ${port}`)});