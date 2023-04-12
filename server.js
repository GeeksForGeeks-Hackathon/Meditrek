const express=require('express')
const colors=require('colors')
const moragan=require('morgan')
const dotenv=require('dotenv')
const connectDB=require('./config/db')

//Config .env

dotenv.config()

//MongoDB Connection
connectDB();


//Rest Object

const app=express()

//MiddleWares

app.use(express.json())
app.use(moragan('dev'))


//Routes

// app.get('/',(req,res)=>{
//     res.status(200).send({
//         message:"server running",
//     });
// });

app.use('/api/v1/user',require('./routes/userRoutes'))

//Port

const port=process.env.PORT||8080


//Listening to Port

app.listen(port,()=>{
console.log(
    `Server is running in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`
    .bgCyan.white
    );
});
