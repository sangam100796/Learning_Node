'use strict';

const express=require('express');
const router=express.Router();
const calculation=require('./calc_collector.js');
const obj_calc=new calculation();

router.get('/divide',(req,res,next)=>{
   
    const value1 = parseInt(req.query.value1);
    const value2 = parseInt(req.query.value2);
    // if(typeof(value1)!=='number'& typeof(value2)!=='number' & value2 ==0)
    // {
        
    //     res.json({result:'error'});
    //     res.end();
    // }
    // if(isNaN(value1) || isNaN(value2)|| value2==0)
    // {
    //     res.status(400).json({result:'error'});
    //      res.end();
    // }

    // else
    // {
    //     const ans = value1/value2;
    //     res.json({result:ans});
    //     res.end();
    // }
    const ans=obj_calc.division(value1,value2);
    //console.log(ans);
    res.status(200).json({result:ans});
    res.end(); 
   
});
module.exports = router;