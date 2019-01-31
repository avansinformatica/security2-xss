const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;

// parse the data from the url
app.use(bodyParser.urlencoded({extended: false}));

// on this endpoint we receive your secret password
app.post('/', function(req, res) {
    console.log(req.body.key);
});

// provide malicious.js (note that the hacker themselves is not very security minded!)
app.use('/', express.static(__dirname));

app.listen(port, function() {console.log(`Eve listening on port ${port}`)})
