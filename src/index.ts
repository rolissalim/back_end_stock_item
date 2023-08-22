import { AppDataSource } from "@/database/data-source";
import dotenv from "dotenv";

import App from "./app";

dotenv.config();

AppDataSource.initialize()
  .then(async () => {
    App.start(process.env.APP_PORT);
  })
  .catch((err) => console.error(err));