var config = require('./src/config');
var app = require('./src/app');

const { port, host } = config;

app.listen(port, host);
