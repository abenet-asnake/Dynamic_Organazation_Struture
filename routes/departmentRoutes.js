const express=require('express');
const routes= express.Router();
const { createParentDepartments, 
        createChildDepartments,
        getDepartments, 
        getDepartmentsByID,
        editDepartmentsByID,
        deleteDepartmentsByID} = require('../controller/departmentController');

routes.post('/parent',createParentDepartments);
routes.post('/child',createChildDepartments);
routes.get('/',getDepartments); 
routes.get('/:id',getDepartmentsByID);
routes.put('/:id',editDepartmentsByID);
routes.delete('/:id',deleteDepartmentsByID);
module.exports=routes;