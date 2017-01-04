'use strict';

import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const PORT = 3000;

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/users', (req, res) => {
    res.json([
       {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"},
       {"id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tammy@gmail.com"},
       {"id": 3, "firstName": "Tina", "lastName": "Parker", "email": "tina@gmail.com"},
       {"id": 4, "firstName": "Erlich", "lastName": "Lincoln", "email": "erlich@gmail.com"},
       {"id": 5, "firstName": "John", "lastName": "Robber", "email": "john@gmail.com"}
    ]);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(PORT, (err) => {
    if (err) throw err;
});
