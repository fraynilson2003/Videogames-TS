import React from 'react'
import { useSelector } from 'react-redux'

export default function Filter() {
  let genders = useSelector(state => state.allGenders)

  let tukis = [
    {filter: "rating", option: ["Accion", "Aventura", "Comedia", "Hot", "Nice"]},
    {filter: "gender", option: ["Accion", "Aventura", "Comedia", "Hot", "Nice"]},
    {filter: "order", option: ["Accion", "Aventura", "Comedia", "Hot", "Nice"]},
  ]


  return (
    <div className='flex flex-row mt-3 object-cover bg-oscuro w-auto h-[60px]  p-2 mx-3
      md:flex-col md:w-[280px]   md:h-[700px] xl:mr-2  rounded xl:mx-auto '>

      <div className='flex flex-row overflow-x-scroll filter justify-start items-center' >
        <input placeholder='search name' type="text" className='  flex md:hidden bg-gris text-blanco rounded px-2 mx-2 h-[30px] hover:text-oscuro hover:bg-blanco' />

        {/*Genders  */}
        <select 
          className="select-bordered 
          w-auto whitespace-nowrap px-2 mx-2 text-sm bg-gris h-[30px] rounded"
        >
          <option disabled selected>{"Genders"}</option>

          {genders.map((e, i)=>
            <option value={e.id} key={i+1}>{e.name}</option>
          )}
        </select>

        {/* OTros  */}
        {tukis?.length && tukis.map((filt, ind)=>
          <select 
            className="select-bordered 
            w-auto whitespace-nowrap px-2 mx-2 text-sm bg-gris h-[30px] rounded"
          >
            <option disabled selected>Who shot first?</option>

            {filt.option.map((e, i)=>
              <option value={e} key={i}>{e}</option>
            )}
          </select>
        )}

      </div>

    </div>
  )
}
