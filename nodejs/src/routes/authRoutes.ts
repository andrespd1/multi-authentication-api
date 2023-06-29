import express from "express";
import AuthController from "../controllers/AuthController";

const router = express.Router();
const authController = new AuthController();

router.post('/register', async (req, res) => {
  const {user, password} = req.body
  const response = await authController.registerUser(user, password);
  if (response) {
    res.status(201).json(response)
  }
});

export default router;