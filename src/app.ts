import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./database/config";
import routes from "./routes";
dotenv.config();
const app: express.Application = express();

dbConnection();
app.use(express.json());
//CORS
app.use(cors());

app.use("/api", routes);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
