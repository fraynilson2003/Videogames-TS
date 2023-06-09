import dotenv from 'dotenv';
import { Buffer } from 'buffer';
dotenv.config();
const {
  ENDPOINT_SECRET,
  FRONT_BASE_URL,
  STRIPE_SECRET_KEY
} = process.env;
//const stripe = require("stripe")(process.env.stripe);

import Stripe from "stripe";
import { StripeWebhookRequest } from '../interfaces/Stripe';
import { Request, Response } from "express"
import User from '../models/User';
const config: Stripe.StripeConfig = {
  apiVersion: '2022-11-15',
  typescript: true,
}

const stripe = new Stripe(String(STRIPE_SECRET_KEY), config)



//la sesion es la instancia de pago
export async function createSession(priceId: string, idProductDB: string, userId: string) {
  // se crea una sesion por cada llamada a la funcion
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: [
        "card", //el metodo por defecto pago con tarjeta se pueden añadir otros
      ],
      line_items: [
        {
          price: priceId, //se requiere un priceId para la compra que esta linkeado con su producto
          quantity: 1, //siempre la cantidad es 1 porque solo compran 1 servicio
        },
      ],
      metadata: {
        name: `${idProductDB}/${userId}`,
      },

      mode: "payment", // tipo de pago, como no es recurrente es payment

      success_url: `${FRONT_BASE_URL}/profile/purchased?sucess=true`, // si el pago es exitoso se redirige aqui
      cancel_url: `${FRONT_BASE_URL}/profile/purchased?sucess=false`, // si el pago es cancelado o fallo redirige aqui
    })

    return session; // en sesion viene la url que da stripe para el formulario y se pueda realizar el pago
  } catch (error) {
    let {message}: any = error
    throw new Error(message) ;
  }

}

/********** LISTEN PAGAR ********** */
interface EventHook extends Stripe.Event {
  data: {
    object: {
      metadata: any
    }
  }
} 

export async function eventListenComplete(req: Request, res: Response) {

  const sig = String(req.headers['stripe-signature'])

  try {
    let event: Stripe.Event = stripe.webhooks.constructEvent(req.body, sig, String(ENDPOINT_SECRET));


    switch (event.type) {
      case 'payment_intent.succeeded':
        // Realizamos acciones específicas para cuando se recibe un evento de pago exitoso
        break;
      case 'checkout.session.completed':
        let completed = event.data.object;
        console.log("************************************");
        console.log("Pago exitoso");

        let {metadata}: any = completed 
        let data = metadata.name

        let [productId, userId] = String(data).split("/")

        let user = await User.findByPk(Number(userId))
        let result = await user?.addPurchased(Number(productId))

        console.log(result);
        return res.status(204).json(completed)

        
        break;
      // Agrega más casos según los tipos de eventos que quieras manejar
      default:
        console.log(`Evento de webhook no manejado: ${event.type}`);
        return res.status(405)

    }
    return res.status(204).json({
      message: "niceeee"
    })

  } catch (error) {
    let {message}: any = error
    return res.status(405).json({
      error: message
    })
  }

};



export async function createProduct(name: string) {
  console.log("*********************************");
  console.log("entra a CREATE PRODUC STRIPE");
  
  
  try {
    const newProduct = await stripe.products.create({
      name: name,
      type: 'good',
      description: 'Videogame',
    });

    return newProduct; //nos retorna el objeto completo donde viene el Id del producto para despues añadir precios
  } catch (error) {
    let {message}: any = error
    throw new Error(message) ;
  }
}

export async function updateImgProduct(productId: string, imageUrl: string) {
  console.log("******************************");
  console.log("ENTRA A PUT IMG");
  try {

    let res = await stripe.products.update(productId, {
      images: [imageUrl],
    });

    return res; //nos retorna el objeto completo donde viene el Id del producto para despues añadir precios
  } catch (error) {
    let {message}: any = error
    throw new Error(message) ;
  }
}

//'prod_NO4AgC06G5lhXh' un ID ejemplo que yo cree para hacer pruebas

export async function createPrice(newPrice: number, Product: Stripe.Product) {
  // creas el precio para ese servicio de ese usuario
  try {
    const Price = await stripe.prices.create({
      unit_amount: newPrice * 100, //el precio de producto
      currency: "usd", // el tipo de moneda a 3 letras en este caso lo deje en dolares
      product: Product.id, // recibimos el Id del producto al cual le asignaremos un nuevo precio
    });

    return Price;
  } catch (error) {
    let {message}: any = error
    throw new Error(message);
  }
}

export async function getProductById(idProduct: string) {
  // obtenemos la informacion de un productoServicio
try {
  const Product = await stripe.products.retrieve(idProduct);
  
  return Product; //aqui podemos ver los ID de los precios relacionados con ese producto

} catch (error) {
  let {message}: any = error
  throw new Error(message);
}


}

export async function deleteProduct(idProduct: string) {
  //si algun usuario por alguna razon quiere borrar sus datos de los pagos
  //aqui se borraria su nombre de usuario asociado a ese producto
  const deleted = await stripe.products.del(idProduct);

  return deleted;
}




