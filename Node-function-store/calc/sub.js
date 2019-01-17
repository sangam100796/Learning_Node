'use strict';

const express=require('express');
const router=express.Router();

const calculation = require('./calc_collector.js');
const obj_calc = new calculation();

router.get('/sub', (req,res,next)=>{
    //console.log(req.params.id);
    const value1 = parseInt(req.query.value1);
    const value2 = parseInt(req.query.value2);
   

const ans=obj_calc.subtraction(value1,value2);
console.log(ans);
res.status(200).json({result:ans});
res.end(); 

    
});

module.exports=router;