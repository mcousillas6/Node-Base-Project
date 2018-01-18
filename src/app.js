var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var routers = require('./routers');

var app = express();

app.use(morgan('common'));
app.use(bodyParser.json());

app.use('/reports', routers.ReportRouter);
app.use('/users', routers.UserRouter);

app.get('/', (req, res) => {
  res.send('index');
});

module.exports = app;
