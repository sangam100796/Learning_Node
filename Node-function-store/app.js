const express = require('express');
const app = express();

const morgan=require('morgan');
const addRoutes=require('./calc/add');
const subRoutes=require('./calc/sub');
const divideRoutes=require('./calc/divide');
const multiplyRoutes=require('./calc/multiply');

app.use(morgan('dev'));
// app.use((req,res,next)=>{
//     const error=new Error('Not Found');
//     res.status=404;
//     next(error);
// });
// app.use((error,req,res,next)=>{
//     res.status(error.status||500);
//     res.json({error:error.message});
// });
app.use('/calc', addRoutes);
app.use('/calc', subRoutes);
app.use('/calc', divideRoutes);
app.use('/calc', multiplyRoutes);

module.exports=app;
