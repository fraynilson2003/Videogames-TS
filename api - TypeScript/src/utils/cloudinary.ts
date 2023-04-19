import { v2 as cloudinary } from "cloudinary"
import dotenv from 'dotenv';
dotenv.config();
const {
  CLOUD_NAME,
  API_KEY_CLOUD,
  API_SECRETET_CLOUD
} = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,   
  api_key: API_KEY_CLOUD,
  api_secret: API_SECRETET_CLOUD,
});

export let uploadImg = async(filePath :string)=>{
  return await cloudinary.uploader.upload(filePath, {
    folder: "videogames-portafolio"
  })
  
}