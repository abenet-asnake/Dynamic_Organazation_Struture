const express=require('express');
const routes=express.routes();

routes.post('/departments',(req,res)=>{
    res.status(200).json({message: 'New departments'});
});

routes.get('/departments/',(req,res)=>{
    res.status(200).json({message: 'Get all departments'});
}); 

routes.get('/departments/:id',(req,res)=>{
    res.status(200).json({message: 'Get Department by id'});
});

routes.put('/departments/:id',(req,res)=>{
    res.status(200).json({message:'Update department by id'});
});

routes.delete('/departments/:id',(req,res)=>{
    res.status(200).json({message:'Delete department by id'});
});
module.exports=routes;