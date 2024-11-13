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
const __dirname = path.resolve();
console.log('Server is running');
//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: [
    "https://job-portal-web-app-two.vercel.app", // Allow Vercel frontend
    "http://localhost:3000", // Allow local development
  ],
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true, // Allow sending cookies with requests
  allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers (if needed)
};

// Apply the CORS middleware globally to all routes
app.use(cors(corsOptions));

// All Api's

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", compnayRoute);
app.use("/api/v1/jobs", jobsRoute);
app.use("/api/v1/application", applicationRoute);


app.use(express.static(path.join(__dirname, "Clients", "dist")));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "Clients", "dist", "index.html"));
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
app.listen(PORT, (req, res) => {
  connectDB();
  console.log(`Server are running at port ${PORT}`);
});
