import express from "express";
import dotenv from "dotenv";
import cors, { CorsOptions } from "cors";
import dbConnection from "./database/config";
import routes from "./routes";
dotenv.config();

const app: express.Application = express();
const urlList = ["http://localhost:5173"];
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (origin && urlList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

dbConnection();
//CORS
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", routes);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
