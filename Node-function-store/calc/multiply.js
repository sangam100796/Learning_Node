const express=require('express');
const router=express.Router();
const calcu=require('./calc_collector.js');
const obj_calc=new calcu();

router.get('/multiply',(req,res,next)=>{
    const value1=parseInt(req.query.value1);
    const value2=parseInt(req.query.value2);

    const ans=obj_calc.multiplication(value1,value2);
    res.status(200).json({result:ans});
    res.end();

});
module.exports=router;