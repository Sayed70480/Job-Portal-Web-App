import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/isAuthenthicated.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();


router.route('/register').post(upload.single('file'),register)
router.route('/login').post(login)
router.route('/profile/update').post(isAuthenticated , upload.single('file') ,updateProfile)
router.route('/profile/logout').get(isAuthenticated ,logout)


export default router;