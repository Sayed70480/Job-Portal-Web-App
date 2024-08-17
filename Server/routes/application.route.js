import express from "express";
import { isAuthenticated } from "../middleware/isAuthenthicated.js";
import { applyjob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";
const router = express.Router();


router.route("/apply/:id").get(isAuthenticated,applyjob );
router.route("/get").get(isAuthenticated,getAppliedJobs );
router.route("/:id/applied").get(isAuthenticated,getApplicants );
router.route("/status/:id/update").post(isAuthenticated,updateStatus );




export default router