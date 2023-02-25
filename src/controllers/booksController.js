import Book from '../models/Book.js';
import failureMsg from '../utils/failureMsg.js';
import serverError from '../utils/serverError.js';
import successMsg from '../utils/successMsg.js';

class booksController {
  // create book
  static async createBook(req, res) {
    const { name, description, author, imageUrl } = req.body;
    try {
      const newBook = await Book.create({ name, description, author, imageUrl });
      const status = 201;
      const msg = "Book created successfully";
      const data = newBook;
      successMsg(res, status, msg, data);
    } catch (error) {
      const errorMsg = error.message;
      serverError(res, errorMsg);
    }
  }

  // get books
  static async getBooks(req, res) {
    try {
      const books = await Book.find();
      const status = 200;
      const msg = "All books";
      const data = books;
      successMsg(res, status, msg, data);
    } catch (error) {
      const errorMsg = error.message;
      serverError(res, errorMsg);
    }
  }

  // get one book
  static async getBook(req, res) {
    const { id } = req.params;
    try {
      const book = await Book.findOne({ _id: id });
      console.log(book)
      if (!book) {
       res.status(404).json({
        message: `Book with id ${id} was not found `
       })
      } else {
        const status = 200;
        const msg = `Book with id: ${id} successfully fetched`;
        const data = book;
        successMsg(res, status, msg, data);
      }
    } catch (error) {
      console.log(error)
      const errorMsg = error.message;
      serverError(res, errorMsg);
    }
  }

  // update book
  static async updateBook(req, res) {
    const {description, imageUrl} = req.body
    const { id } = req.params;
    const _id = id
    try {
      const bookUpdated = await Book.findByIdAndUpdate(_id, {description, imageUrl}, {new: true})
      res.status(200).json({
        data: bookUpdated
      })
    } catch (error) {
      const errorMsg = error.message;
      serverError(res, errorMsg);
    }
  }

  // delete

  // update book
  static async deleteBook(req, res) {
    const { id } = req.params;
    const _id = id
    try {
      await Book.findByIdAndDelete(_id)
      res.status(200).json({
        mesage: "Successfully deleted"
      })
    } catch (error) {
      const errorMsg = error.message;
      serverError(res, errorMsg);
    }
  }
}

export default booksController;