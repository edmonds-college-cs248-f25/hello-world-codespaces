// CS 248 hello world server
const express = require("express");
const app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send('Hello World!');
})
app.get('/api', (req, res) => res.send('Hello from /api'));
app.listen(3000);
