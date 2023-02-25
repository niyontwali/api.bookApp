import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  }, 
  description: {
    type: String,
    required: true,
  }, 
  author: {
    type: String,
    required: true,
  }, 
  imageUrl: {
    type: String,
    required: true,
  }, 
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Book = mongoose.model("Book", bookSchema);

export default Book