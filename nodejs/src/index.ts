import express from 'express'
import authRoutes from "./routes/authRoutes";
import myDataSource from "../app-data-source";

const app = express()
const PORT = 3000

app.use(express.json());
app.use('/auth', authRoutes);

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.log("Error during Data Source initialization:", err)
  })

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})