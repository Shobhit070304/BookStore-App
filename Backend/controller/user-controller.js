import userModel from "../models/user-model.js";
import bcryptjs from "bcryptjs";

export const SignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const ifUser = await userModel.findOne({ email: email });
    if (ifUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const createdUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error : ", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const ifUser = await userModel.findOne({ email: email });
    if (!ifUser) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcryptjs.compare(password, ifUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    return res.status(200).json({
      message: "Login nsuccessful",
      user: {
        id: ifUser._id,
        name: ifUser.name,
        email: ifUser.email,
      },
    });
  } catch (error) {
    console.log("Error : ", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
