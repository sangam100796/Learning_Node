'use strict';

const express=require('express');
const router=express.Router();

const calculation = require('./calc_collector.js');
const obj_calc = new calculation();

router.get('/add', (req,res,next)=>{
    //console.log(req.params.id);
    const value1 = parseInt(req.query.value1);
    const value2 = parseInt(req.query.value2);
   
//    if(isNaN(value1) || isNaN(value2))
//     {
       
//         res.status(400).json({
//             Error:'Check Your Input'  
//         });
//         res.end();
//     }
//     else 
//     {
//         const ans = value1 + value2;
//         res.status(200).json({result:ans});
//         res.end(); 
//     }

const ans=obj_calc.addition(value1,value2);
console.log(ans);
res.status(200).json({result:ans});
res.end(); 

    
});
// router.post('/mul',(req,res,next)=>{
//     const value1=req.params.value1;
//     const value2=req.params.value2;
//     const ans=value1+value2;
//     res.status(200).json("Your Addition result is: "+ans);
//     res.end();
// });
module.exports=router;
