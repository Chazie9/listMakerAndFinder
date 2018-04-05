const express = require('express');


let app = express();

app.use('/', express.static(__dirname + '/../client/dist'));

app.listen(3000, function() {
    console.log('your listening to port 3000');
});