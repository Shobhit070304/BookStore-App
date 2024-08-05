import express from "express";
const router = express.Router();

import { Login, SignUp } from "../controller/user-controller.js";

router.post("/signup", SignUp);
router.post("/login", Login);

export default router;
