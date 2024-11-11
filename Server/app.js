import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongoose-connection.js";
import userRoute from "./routes/user.route.js";
import compnayRoute from "./routes/company.route.js";
import jobsRoute from "./routes/jobs.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";
const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config({});
const _dirname = path.resolve();
app.get("/",function(req,res){
  res.json("hello")
});
//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cookieParser());
const corsOptions = {
  origin: "https://job-portal-web-app-nu.vercel.app/",
  credentials: true,
};

app.use(cors(corsOptions));

// All Api's

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", compnayRoute);
app.use("/api/v1/jobs", jobsRoute);
app.use("/api/v1/application", applicationRoute);


app.use(express.static(path.join(_dirname,"/Clients/dist")))
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(_dirname , "Clients" , "dist" , "index.html"))
})
app.listen(PORT, (req, res) => {
  connectDB();
  console.log(`Server are running at port ${PORT}`);
});
