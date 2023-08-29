//@disc create new department 
//@routes POST /api/departments/
//@access Public
const createDepartments =(req,res)=>{
    res.status(200).json({message: 'New departments'});
}
//@disc get all departments 
//@routes GET /api/departments
//@access Public
const getDepartments =(req,res)=>{
    res.status(200).json({message: 'Get all departments'});
}

//@disc get department by id 
//@routes GET /api/departments/:id
//@access Public
const getDepartmentsByID =(req,res)=>{
    res.status(200).json({message: 'Get Department by id'});
}

//@disc Edit department by id 
//@routes PUT /api/departments/:id
//@access Public
const editDepartmentsByID =(req,res)=>{
    res.status(200).json({message:'Update department by id'});
};

//@disc delete department by id
//@routes DELETE /api/departments/:id
//@access Public
const deleteDepartmentsByID =(req,res)=>{
    res.status(200).json({message:'Delete department by id'});
};

module.exports = {createDepartments,
                  getDepartments,
                  getDepartmentsByID,
                  editDepartmentsByID,
                  deleteDepartmentsByID}