const express=require('express');
const routes= express.Router();
const { createDepartments, 
        getDepartments, 
        getDepartmentsByID,
        editDepartmentsByID,
        deleteDepartmentsByID} = require('../controller/departmentController');

routes.post('/departments',createDepartments);

routes.get('/departments',getDepartments); 

routes.get('/departments/:id',getDepartmentsByID);

routes.put('/departments/:id',editDepartmentsByID);

routes.delete('/departments/:id',deleteDepartmentsByID);
module.exports=routes;