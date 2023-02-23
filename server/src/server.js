// we confing our server here (different from express app cofing)
const http = require('http');
//  express app just a middleware top of the built-in node http server that has own middwares and route
const app = require('./app');

// server administrator can specify which port it should run on as environmental variable
// || : if left side is false or undefined => right side is the main value;
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

server.listen(PORT , ()=> {
    console.log(`server  is running in ${PORT} PORT`)
})


