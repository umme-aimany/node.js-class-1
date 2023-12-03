var express = require('express');
var app = express();
app.get('/', function (req, res) {
res.send("Welocme to GeeksforGeeks!");
});
console.log('backened is running on port 8000.')
app.listen(5000);