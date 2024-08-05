import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 8000;
const URI = process.env.MONGO_URI;

import bookRoute from "./routes/book-route.js";
import userRoute from "./routes/user-route.js";


//Mongodb connection
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB database");
} catch (error) {
  console.log("Error : ", error);
}

//Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT);
