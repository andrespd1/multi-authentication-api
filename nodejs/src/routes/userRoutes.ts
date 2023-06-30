import express from "express";
import UserController from "../controllers/UserController";
import UserDTO from "../models/dtos/UserDTO";

const router = express.Router();
const userController = new UserController();

router.put("", async (req, res) => {
  const { email, password, user } = req.body;
  const response: UserDTO | string = await userController.updateUserProfile(
    email,
    password,
    user
  );
  if (response instanceof UserDTO) {
    res.status(200).json({
      statusCode: 200,
      message: "The user profile has been updated correctly",
      data: response,
    });
  } else {
    res.status(400).json({ statusCode: 400, message: response });
  }
});
export default router;
