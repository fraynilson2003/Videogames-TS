import "dotenv/config"
import express from "express"
import cors, { CorsOptions } from "cors"
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

// const corsOptions: CorsOptions = {
//   origin: [
//     'https://videogames-portafolio.vercel.app',
//   ]
// };
const whitelist = ["https://videogames-portafolio.vercel.app"];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin!) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  },
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

