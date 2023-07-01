import "dotenv/config"
import { urlencoded } from "body-parser";
import express from "express"
import cors, { CorsOptions } from "cors"
import pinoHttp from 'pino-http';
import fileupload from "express-fileupload"
import { router } from "./routes/index"
import morgan from "morgan";
import { eventListenComplete } from './services/stripe';

// crear app
const app = express()



//webhook
let router2 = express.Router()
router2.post("/stripe/webhook", express.raw({ type: 'application/json' }), eventListenComplete)
app.use('/', router2);

const corsOptions: CorsOptions = {
  origin: [
    'https://videogames-portafolio.vercel.app',
  ]
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan("dev"))
app.use(fileupload({
  useTempFiles: true,
  tempFileDir: "./uploads"
}))




//routes
app.use(router);




export {
  app
}

