import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { order } from "../../constants/order"
import { cleanVideogames, setConfigFilter } from '../../../redux/actions/filters'
import { getAllVideogames } from '../../../redux/actions/actions'

export default function Filter({isLoadingVideogame, setIsLoadingVideogame}) {
  let genders = useSelector(state => state.allGenders)
  let configFilter = useSelector((state)=>state.configFilterVideogames)

  let dispatch = useDispatch()

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
    if (event.key === "Enter") {
      let value = event.target.value


      let newFilter = {
        ...configFilter,
        ["name"]: value
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
  }

  return (
    <div className='flex flex-row mt-3 object-cover bg-oscuro w-auto h-[60px]  p-2 mx-3
      md:flex-col md:w-[240px]   md:h-[700px] xl:mr-2  rounded xl:mx-auto '>

      <div className='flex flex-row overflow-x-scroll filter justify-start items-center 
      md:flex-col' >

        <div className='md:w-[90%] md:mx-auto'>
          <input onKeyDown={handleNameFilter} placeholder='search name' type="text" className='  flex md:hidden bg-gris text-blanco rounded px-2 mx-2 h-[30px] hover:text-oscuro hover:bg-blanco ' />
        </div>


        {/*Genders  */}
        <select 
          className="w-auto min-w-[140px] px-2 mx-2 text-sm bg-gris h-[30px] rounded 
          md:my-2 md:w-[90%] md:h-auto md:py-2  md:mx-auto md:bg-trans md:hover:bg-gris"
          onChange={handleFilter}
        >
          <option disabled selected className=' bg-gris text-blanco '>{"Genders"}</option>

          {genders.map((e, i)=>
            <option 
              className='md:text-oscuro bg-gris'
              key={i+1}
              name={"gender"}
              value={e.id}>
                {e.name}
            </option>
          )}
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
