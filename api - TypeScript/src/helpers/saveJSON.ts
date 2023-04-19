import fs from 'fs';

export function guardarJSON(nombreArchivo: string, contenido: string) {
    fs.writeFile(nombreArchivo, contenido, function (err) {
      if (err) {
        console.log(err.message);
        throw new Error(err.message);
      }
      else {
        console.log(`Archivo ${nombreArchivo} guardado exitosamente.`);
        
        return (`Archivo ${nombreArchivo} guardado exitosamente.`);
      }
    });
}