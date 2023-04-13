import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { order } from "../../constants/order"
import { cleanVideogames, setConfigFilter } from '../../../redux/actions/filters'
import { getAllVideogames } from '../../../redux/actions/actions'
import { NavLink } from 'react-router-dom'

export default function Filter({isLoadingVideogame, setIsLoadingVideogame}) {
  let genders = useSelector(state => state.allGenders)
  let configFilter = useSelector((state)=>state.configFilterVideogames)

  let dispatch = useDispatch()

  //estado para input name
  let [inputName, setInputName] = useState(configFilter?.name)

  let tukis = [
    {filter: "rating", option: ["Accion", "Aventura", "Comedia", "Hot", "Nice"]},
    {filter: "gender", option: ["Accion", "Aventura", "Comedia", "Hot", "Nice"]},
    {filter: "order", option: ["Accion", "Aventura", "Comedia", "Hot", "Nice"]},
  ]

  let orderS = [order.asc, order.desc]

  const handleFilter = (event)=>{
    let value = event.target.value
    let property = event.target.options[event.target.selectedIndex].getAttribute('name')

    let newFilter = {
      ...configFilter,
      [property]: value
    }

    dispatch(cleanVideogames())
    dispatch(setConfigFilter(newFilter))

    //responses
    setIsLoadingVideogame(true)
    let res = getAllVideogames(newFilter).then((res)=>{
      dispatch(res)
      setIsLoadingVideogame(false )
    }).catch(err=>{
      alert(err)
    })
  }

  const handleNameFilter = (event)=>{
    event.preventDefault()

    let newFilter = {
      ...configFilter,
      ["name"]: inputName
    }

    dispatch(setConfigFilter(newFilter))
    dispatch(cleanVideogames())

    //responses
    setIsLoadingVideogame(true)
    let res = getAllVideogames(newFilter).then((res)=>{
      dispatch(res)
      setIsLoadingVideogame(false )
    }).catch(err=>{
      alert(err)
    })
 
  }

  const handleChangeName = (event)=>{
    let value = event.target.value
    setInputName(value)
  }

  return (
    <div className='flex flex-row mt-2 object-cover bg-fondo w-full h-[60px]  p-3  px-3 shadow-custom 
      md:flex-col md:w-[240px] md:p-0 md:m-3 md:mr-2 md:shadow-none md:rounded-md md:mt-3 md:h-[400px]   xl:rounded xl:mx-auto'>

    <NavLink to={"/create"} className='hidden w-full mt-4 mb-4  md:block'>
      <div className='bg-verde/60 text-blanco border-2 w-[170px] py-2 px-3 mx-auto rounded-lg cursor-pointer hover:bg-verde'>
        <p className=' text-center text-lg font-bold'>New videogame</p>
      </div>
    </NavLink>



      <div className='flex flex-row overflow-x-scroll filter justify-start items-center 
      md:flex-col' >

        <form onSubmit={handleNameFilter} className='md:w-[90%] md:mx-auto'>
            <input 
              className='flex md:hidden w-[140px] h-[30px] bg-gris text-blanco rounded px-2 mx-2 hover:text-oscuro hover:bg-blanco ' 
              placeholder='search name' 
              type="text"
              onChange={handleChangeName}
              value={inputName}/>
        </form>


        {/*Genders  */}
        <select 
          className="w-auto min-w-[140px] px-2 mx-2 text-sm bg-gris h-[30px] rounded 
          md:my-2 md:w-[90%] md:h-auto md:py-2  md:mx-auto md:bg-trans md:hover:bg-gris"
          onChange={handleFilter}
        >
          <option disabled selected className=' bg-gris text-blanco '>{"Genders"}</option>
          <option className='md:text-oscuro bg-gris'name={"gender"}value={"0"}>
            {`All`}
          </option>
          {genders.length? (genders.map((e, i)=>
            <option 
              className='md:text-oscuro bg-gris '
              key={i+1}
              name={"gender"}
              value={e.id}>
                {e.name}
            </option>)):<></>
          }
        </select>

        {/* Name Order */}
          <select 
            className="w-auto min-w-[140px] px-2 mx-2 text-sm bg-gris h-[30px] rounded 
            md:my-2 md:w-[90%] md:h-auto md:py-2 md:mx-auto md:bg-trans md:hover:bg-gris"
            onChange={handleFilter}
          >
            <option disabled selected className='bg-gris text-blanco '>Name</option>

            {orderS.length && orderS.map((e, i)=>
              <option 
                className='md:text-oscuro bg-gris '
                key={i}
                value={e} 
                name={"orderABC"}>
                  {e}
              </option>
            )}
          </select>

          {/* Rating*/}
          {/* <select 
            className="w-auto min-w-[140px] px-2 mx-2 text-sm bg-gris h-[30px] rounded 
            md:my-2 md:w-[90%] md:h-auto md:py-2 md:mx-auto md:bg-trans md:hover:bg-gris"
            onChange={handleFilter}
          >
            <option disabled selected className='bg-gris text-blanco '>Rating</option>

            {orderS.length && orderS.map((e, i)=>
              <option 
                className='md:text-oscuro bg-gris '
                key={i}
                value={e} 
                name={"rating"}>
                  {e}
              </option>
            )}
          </select>  */}
       

      </div>

    </div>
  )
}
