// config express app here different from server config like http
const express = require('express');
const cors = require('cors');
const planetsRouter = require('./routes/planets/planets.router');

const app = express();
// incoming request will pass throught JSON middleware
app.use(express.json());
// enable cors for all incoming requests
// app.use(cors());

// enablle for only our origin
//Access-Control-Allow-Origin: http://localhost:3000
app.use(cors({
    origin : "http://localhost:3000"
}))
app.use(planetsRouter);

module.exports = app;