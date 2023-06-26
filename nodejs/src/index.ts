import express from 'express'
import authRoutes from "./routes/authRoutes";
import myDataSource from "../app-data-source";

myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.log("Error during Data Source initialization:", err)
  })

const app = express()
app.use(express.json())

const PORT = 3000

app.use('/auth', authRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})