const http=require('http');
const app=require('./app.js');
const port=process.env.port=5050||3000;

const server=http.createServer(app);
server.listen(port);

