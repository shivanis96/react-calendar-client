const express = require('express');
// Add body parser to deal with requests
const bodyParser = require('body-parser')
const path = require('path');
const signup = require('./routes/signup')

//Start express
const app = express();
//load static files
app.use(bodyParser.json());

app.use('api/signup',signup);

app.use(express.static(path.join(__dirname, 'build')));



// Home route for express
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(process.env.PORT || 8080);
