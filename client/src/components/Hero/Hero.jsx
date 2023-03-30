import React from 'react'
import portada from "../assets/png-clipart-shuriken-ninja-ninjutsu-ninja-star-game-cdr.png"

export default function Hero() {
  let tukis = [1,2,3,4,5,6]

  return (
    <div className="flex flex-col md:flex-row h-screen w-[100%] pad-x text-blanco">
      <div className='pad-vid mt-3 p-2 object-cover bg-oscuro flex flex-row w-[100%] h-[60px]
      
      md:flex-col md:w-[150px]   md:h-[700px]  rounded '>
        <div className='flex flex-row overflow-x-scroll filter justify-start items-center' >
          {tukis?.length && tukis.map((filt, ind)=>

            <select 
              className="select-bordered 
              w-auto whitespace-nowrap px-2 text-sm bg-gris mx-1 h-[30px] rounded">
              <option disabled selected>Who shot first?</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            // <div 
            //   key={ind}
            //   className='w-auto whitespace-nowrap px-2 text-sm bg-gris mx-1 h-[30px] rounded fon'>
              
            //     {`genero ${ind+1}`}
            // </div>
          )}
        </div>

        <div>

        </div>
      </div>

      <div className='flex-1 bg-oscuro h-[700px] w-[250px] mar-vid rounded'>
        Videogames
      </div>
    </div>
  )
}
