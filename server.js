import express from 'express'
// Add body parser to deal with requests
import bodyParser from 'body-parser'
import path from'path';
import signup from './routes/signup'

//Start express
const app = express();
//load static files
app.use(bodyParser.json());
app.use(signup);

app.use(express.static(path.join(__dirname, 'build')));



// Home route for express
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(process.env.PORT || 8080);
