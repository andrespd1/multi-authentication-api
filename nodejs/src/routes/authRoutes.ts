import express from "express";
import AuthController from "../controllers/AuthController";

const router = express.Router();
const authController = new AuthController();

export default router;