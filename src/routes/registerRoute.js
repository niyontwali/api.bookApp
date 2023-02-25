import express from "express"
import registerController from "../controllers/registerController.js";


const router = express.Router()

// defined routes
router.post("/", registerController)


export default router