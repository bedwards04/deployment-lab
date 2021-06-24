const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    
    res.sendFile( path.join(__dirname, '../index.html') );
});

const port = process.env.PORT || 4050;
app.listen(port, () => {console.log(`Server running on ${port}`)});