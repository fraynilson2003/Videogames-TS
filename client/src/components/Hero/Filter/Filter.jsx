import React from 'react'

export default function Filter() {
  let tukis = [
    {filter: "name", option: ["Accion", "Aventura", "Comedia", "Hot", "Nice"]},
    {filter: "rating", option: ["Accion", "Aventura", "Comedia", "Hot", "Nice"]},
    {filter: "gender", option: ["Accion", "Aventura", "Comedia", "Hot", "Nice"]},
    {filter: "order", option: ["Accion", "Aventura", "Comedia", "Hot", "Nice"]},
    {filter: "gender", option: ["Accion", "Aventura", "Comedia", "Hot", "Nice"]},
    {filter: "gender", option: ["Accion", "Aventura", "Comedia", "Hot", "Nice"]},
  ]


  return (
    <div className='pad-vid mt-3 p-2 object-cover bg-oscuro flex flex-row w-[100%] h-[60px]
      md:flex-col md:w-[150px]   md:h-[700px]  rounded '>

      <div className='flex flex-row overflow-x-scroll filter justify-start items-center' >
        <input placeholder='search name' type="text" className='bg-gris text-blanco rounded px-2 mx-2 h-[30px] hover:text-oscuro hover:bg-blanco' />

        {tukis?.length && tukis.map((filt, ind)=>
          <select 
            className="select-bordered 
            w-auto whitespace-nowrap px-2 mx-2 text-sm bg-gris h-[30px] rounded"
          >
            <option disabled selected>Who shot first?</option>
            {filt.option.map((e, i)=>
              <option key={i}>{e}</option>
            )}
          </select>
        )}

      </div>

    </div>
  )
}
