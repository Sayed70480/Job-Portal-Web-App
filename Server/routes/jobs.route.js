import express from "express";
import { isAuthenticated } from "../middleware/isAuthenthicated.js";
import { getAllJobs, getJobById, postJob, getadminJobs } from "../controllers/job.controller.js";
const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/get/:id").get(isAuthenticated, getJobById);
router.route("/getadminjobs").get(isAuthenticated, getadminJobs);


export default router