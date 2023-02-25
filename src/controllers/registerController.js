import User from "../models/User.js";
import bcrypt from "bcrypt";

const registerController = async (req, res) => {
  const { email, password, isAdmin } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword, isAdmin });
    res.status(201).json({
      message: "New User successfully created",
      data: newUser
    });
  } catch (error) {
    console.log(error.code);
    if (error.code === 11000) {
      return res.status(403).json({
        message: "Email already exists"
      })
    }
    res.status(500).json({
      message: error.message
    });
  }
};

export default registerController;