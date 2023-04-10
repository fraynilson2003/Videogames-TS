import "dotenv/config"
import { urlencoded } from "body-parser";
import express from "express"
import cors from "cors"
import pinoHttp from 'pino-http';
import fileupload from "express-fileupload"
import { router } from "./routes/index"
import morgan from "morgan";

// crear app
const app = express()

//configurar midelware
let logger = pinoHttp();

//app.use(logger); // Usar el middleware pino-http
app.use(cors(
  
))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan("dev"))
app.use(fileupload({
  useTempFiles: true,
  tempFileDir: "./uploads"
}))

//webhook
app.use(router);




export {
  app
}

