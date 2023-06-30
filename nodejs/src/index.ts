import express from "express";
import authRoutes from "./routes/authRoutes";
import myDataSource from "../app-data-source";
import userRoutes from "./routes/userRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/user", userRoutes);

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
