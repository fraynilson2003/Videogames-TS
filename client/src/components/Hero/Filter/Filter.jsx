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

        {tukis?.length && tukis.map((filt, ind)=>
        <div className='flex flex-col mx-1'>
          <p className='flex justify-start pl-1 py-0 my-0'>
            {"as"}
          </p>

          <select 
            className="select-bordered 
            w-auto whitespace-nowrap px-2 text-sm bg-gris h-[30px] rounded"
          >

            {filt.option.map((e, i)=>
              <option key={i}>{e}</option>
            )}
          </select>

        </div>


        )}
      </div>

    </div>
  )
}
