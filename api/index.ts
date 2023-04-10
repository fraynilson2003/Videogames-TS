import "dotenv/config"

import { app } from "./src/App";
import { conn } from "./src/connection/db"

const { PORT } = process.env;


//force:true - elimina todas la bases de datos, y las vuelve a crear en base a los modelos
//alter:true - actualiza las tablas de BASE DE DATOS en base a los modelos

//conn.sync({force: true}).then(() => {
conn.sync().then(() => {

    app.listen(PORT, () => {
      //conn.drop();    //ESTO ES PARA ELIMINAR TODAS LAS TABLAS
      console.log("************* BIEN ****************");
      console.log(`UUU listening at ${PORT}`); // eslint-disable-line no-console
    });
    })
    .catch((err) => {
    console.log("*********************  ERROR ****************************");
    console.log(err.message);
    });
