var config = require('./src/config');
var app = require('./src/app');

const { PORT, HOST } = config;

app.listen(PORT, HOST);
