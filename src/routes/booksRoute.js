import express from "express"
import booksController from "../controllers/booksController.js";
import verifyIsAdmin from "../middleware/verifyIsAdmin.js";


const router = express.Router()

// defined routes
router.post("/", verifyIsAdmin, booksController.createBook)
router.get("/", booksController.getBooks)
router.get("/:id", booksController.getBook)
router.put("/:id", verifyIsAdmin, booksController.updateBook)
router.delete("/:id", verifyIsAdmin, booksController.deleteBook)


export default router