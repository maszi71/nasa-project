// config express app here different from server config like http
const express = require('express');
const planetsRouter = require('./routes/planets/planets.router');

const app = express();
// incoming request will pass throught JSON middleware
app.use(express.json());

app.use(planetsRouter);

module.exports = app;