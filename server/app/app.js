'use strict';

const app = require('express')();
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const indexPath = path.join(__dirname, '../..', 'index.html');

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(require('../statics/statics.js'));

app.get('/', function (req, res, next) {
    res.sendFile(indexPath);
});
