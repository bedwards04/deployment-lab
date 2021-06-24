const express = require('express');
const app = express();

const path = require('path');

app.use(express.static('deployment'))

app.get('/', function(req, res) {
    
    res.sendFile( path.join(__dirname, '../index.html') );
});

const port = process.env.PORT || 4050;
app.listen(port, () => {console.log(`Server running on ${port}`)});