const express = require('express');

// Add body parser to deal with requests
const bodyParser = require('body-parser')
const path = require('path');
//Start express
const app = express();
//load static files
app.use(express.static(path.join(__dirname, 'build')));

// Test route
app.get('/ping', function (req, res) {
    return res.send('pong');
});

// Home route for express
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(process.env.PORT || 8080);
