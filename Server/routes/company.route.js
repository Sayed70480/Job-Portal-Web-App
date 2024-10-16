import express from "express";
import { getCompanies, getCompanybyId, registercompany, updateCompany } from "../controllers/company.controller.js";
import { isAuthenticated } from "../middleware/isAuthenthicated.js";
import { upload } from "../middleware/multer.js";
const router = express.Router();

router.route("/register").post(isAuthenticated,registercompany)
router.route("/get").get(isAuthenticated,getCompanies)
router.route("/get/:id").get(isAuthenticated,getCompanybyId)
router.route("/update/:id").put(isAuthenticated,upload.single("file") ,updateCompany)

export default router