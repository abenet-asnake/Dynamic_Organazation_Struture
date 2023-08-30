// requiring the package that been installed
const express= require('express');
const client = require('./db/config');
const dotenv= require('dotenv').config();
const routes= require('./routes/departmentRoutes');
client.connect();
//creating the express app 
const app = express();
const port=process.env.PORT_NUMBER || 4006;

app.use(express.json());
app.use('/api/',routes);


app.listen(port, ()=>{  
    console.log(`The Server is listening on localhost:${port}`);
});


