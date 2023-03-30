import "dotenv/config"
import { urlencoded } from "body-parser";
import express from "express"
import cors from "cors"
import pinoHttp from 'pino-http';

import { router } from "./routes/index"

// crear app
const app = express()

//configurar midelware
let logger = pinoHttp();

//app.use(logger); // Usar el middleware pino-http
app.use(cors(
  
))
app.use(urlencoded())
app.use(express.json())


//webhook
app.use(router);




export {
  app
}

