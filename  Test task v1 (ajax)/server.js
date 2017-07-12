const express = require('express');
const app = express();
const server = require('http').createServer(app);

const path = require('path');

process.env.PORT = process.env.PORT || 4000;

app.use('/static', express.static('static'));

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, 'index.html'));
});

server.listen(process.env.PORT, function() {
    console.log('server listening on port: %s', process.env.PORT);
});