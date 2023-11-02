const asyncHandler=require('express-async-handler');
const dataBase = require('../db/config');
//@disc create new department Main department 
//@routes POST /api/departments/parent
//@access Public
const createParentDepartments = asyncHandler(async (req,res)=>{
    //deconstructing the data

    const {department_id,name, description, ceo_id } = req.body;
    const new_ParentDepartment=`insert into Departments(department_id,name, description, ceo_id) VALUES('${department_id.department_id}','${name.name},${description.description}','${ceo_id.ceo_id}')`;
    await dataBase.query(new_ParentDepartment,(error,results)=>{
        if (!error) {
            res.send('The Parent Department Is Created Successfully');
        }
        else {
            console.log(error.message);
        }
        dataBase.end;
    });
    

    res.status(200).json({message: new_ParentDepartment});

});

//@disc create new department sub department 
//@routes POST /api/departments/child
//@access Public
const createChildDepartments = asyncHandler(async (req,res)=>{
    //deconstructing the data

    const { name, description, parent_department_id, ceo_id } = req.body;
    const new_department= await dataBase.query('INSERT INTO Departments(name, description, parent_department_id, ceo_id) VALUES($1, $2, $3, $4) RETURNING *',
    [name, description, parent_department_id, ceo_id],(error, results)=>{
       if(error){
        throw error
            }
        response.status(201).send(`New Department added with ID: ${results.rows[0].id}`)

    });
    

    res.status(200).json({message: new_department});

});

//@disc get all departments 
//@routes GET /api/departments
//@access Public
const getDepartments = asyncHandler(async(req,res)=>{
   const getAllDep= await dataBase.query("SELECT * FROM Departments");
    try {
        res.status(200).json(getAllDep);
    } catch (error) {
        console.log(error.message);
    }
    dataBase.end;
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

module.exports = {createParentDepartments,
                  createChildDepartments,
                  getDepartments,
                  getDepartmentsByID,
                  editDepartmentsByID,
                  deleteDepartmentsByID}