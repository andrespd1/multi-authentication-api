import express from "express";
import authRoutes from "./routes/authRoutes";
import myDataSource from "../app-data-source";
import userRoutes from "./routes/userRoutes";
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";

const app = express();
const PORT = 3000;

dotenv.config();

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

export const firebaseApp = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
});

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.log("Error during Data Source initialization:", err);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
