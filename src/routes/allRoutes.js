import express from "express"
import bookRoute from "./booksRoute.js"
import registerRoute from "./registerRoute.js"
import loginRoute from "./loginRoute.js"

const router = express.Router()

router.use("/books", bookRoute )
router.use("/register", registerRoute)
router.use("/login", loginRoute)

export default router