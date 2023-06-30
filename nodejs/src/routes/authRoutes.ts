import express from "express";
import AuthController from "../controllers/AuthController";
import UserDTO from "../models/dtos/UserDTO";

const router = express.Router();
const authController = new AuthController();

router.post("/register", async (req, res) => {
  const { user, password } = req.body;
  const response: UserDTO | string = await authController.registerUser(
    user,
    password
  );
  if (response instanceof UserDTO) {
    res.status(201).json({
      statusCode: 201,
      message: "Register successfully",
      data: response,
    });
  } else {
    res.status(400).json({ statusCode: 400, message: response });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const response: UserDTO | string = await authController.loginUser(
    email,
    password
  );
  if (response instanceof UserDTO) {
    res
      .status(200)
      .json({ statusCode: 200, message: "Login successfully", data: response });
  } else {
    res.status(400).json({ statusCode: 400, message: response });
  }
});

router.post("/changePassword", async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;
  const response: boolean | string = await authController.changePassword(
    email,
    oldPassword,
    newPassword
  );
  if (typeof response === "boolean") {
    res.status(201).json({
      statusCode: 201,
      message: "Password has been changed successfully",
    });
  } else {
    res.status(400).json({ statusCode: 400, message: response });
  }
});

export default router;
