import express from "express";
import cookieParser  from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv";
import connectDB from "./config/mongoose-connection.js"
import userRoute from "./routes/user.route.js"



const app= express();
const PORT = process.env.PORT || 3000;
dotenv.config({})


app.get("/" , (req, res)=>{
res.send("home")
})


//middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser())
const corsOptions = {
    origin : "http//localhost:5173",
    credentials : true
}

app.use(cors(corsOptions));


// All Api's

app.use('/api/v1/user',userRoute);


app.listen(PORT , (req ,res)=>{
  connectDB()
console.log(`Server are running at port ${PORT}`);
})