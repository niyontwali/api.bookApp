import express from "express"
import loginController from "../controllers/loginController.js";


const router = express.Router()

// defined routes
router.post("/", loginController)


export default router