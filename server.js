// requiring the package that been installed
const express= require('express');
const dotenv= require('dotenv').config();
//creating the express app 
const app = express();
//creating the server
const port=process.env.PORT_NUMBER || 4006;
app.listen(port, ()=>{  
    console.log(`The Server is listening on http:\\localhost:${port}`);
});


