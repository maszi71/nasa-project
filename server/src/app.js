// config express app here different from server config like http
const express = require('express');

const app = express();
// incoming request will pass throught JSON middleware
app.use(express.json());

module.exports = app;