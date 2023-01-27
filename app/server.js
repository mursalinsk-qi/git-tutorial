const express=require('express');
const connectDatabase=require('./database/index');
const app=express();
const PORT=process.env.PORT || 5000;
require('dotenv').config({path:'app/.env'})
const {registerUser}=require('../app/controllers/auth/signupController');
const {loginUser}=require('../app/controllers/auth/loginController');
connectDatabase();
app.use(express.json())
app.post('/api/register',registerUser);
app.post('/api/login',loginUser);
app.listen(PORT,()=>console.log(`server running on Port : ${PORT}`))
console.log("CHANGING")