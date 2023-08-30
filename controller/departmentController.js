const asyncHandler=require('express-async-handler');
const dataBase = require('../db/config');
//@disc create new department 
//@routes POST /api/departments/
//@access Public
const createDepartments = asyncHandler(async (req,res)=>{
    res.status(200).json({message: 'New departments'});
});
//@disc get all departments 
//@routes GET /api/departments
//@access Public
const getDepartments = asyncHandler(async(req,res)=>{
    res.status(200).json({message: 'Get all departments'});
});

//@disc get department by id 
//@routes GET /api/departments/:id
//@access Public
const getDepartmentsByID = asyncHandler(async(req,res)=>{
    res.status(200).json({message: `Get Department by ${req.params.id}`});
});

//@disc Edit department by id 
//@routes PUT /api/departments/:id
//@access Public
const editDepartmentsByID = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Update department by ${req.params.id}`});
});

//@disc delete department by id
//@routes DELETE /api/departments/:id
//@access Public
const deleteDepartmentsByID = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Delete department by ${req.params.id}`});
});

module.exports = {createDepartments,
                  getDepartments,
                  getDepartmentsByID,
                  editDepartmentsByID,
                  deleteDepartmentsByID}