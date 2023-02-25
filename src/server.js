import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import bodyParser from "body-parser";
import morgan from "morgan"
import mongoose from "mongoose"

import routes from "./routes/allRoutes.js"

mongoose.set('strictQuery', false);

// configure dotenv
dotenv.config()

// create an app instance
const app = express()

// use app instance
app.use(cors());
app.use(bodyParser.json())

// morgan for logs
if (process.env.NODE_ENV === "development") {
  app.use(morgan())
};

// define port and host
const host = process.env.HOST;
const port = process.env.PORT

// connection instance
const con = () => mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// use all routes
app.use("/api/v1", routes)

// listening to your server instance
const startServer = () => app.listen(port)

// Promise to await for both con and startServer instance
Promise.all([con(), startServer()])
  .then(() => {
    console.log("MongoDB connected....")
    console.log(`Server listening at port ${port}`)
  })
  .catch((err) => {
    console.log(err)
  })
