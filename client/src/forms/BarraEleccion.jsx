import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'


export const BarraEleccion = (props) => {
  //estado para despliegue de opciones
  let [stateDespliegue, setStateDespliegue] = useState(false)
  let [verifyCheck, setVerifyCheck] = useState([])

  let genders = useSelector(state => state.allGenders)


  //redux estado para check
  let [formState, setFormState] = useState([])


  let actualizarDespliegue = ()=>{
    setStateDespliegue(!stateDespliegue)
  }

  //forms

  let handlePropierties = (eve)=>{
    try {
      const selectedOption = Number(eve.target.value);
      const prop = eve.target.name;
  
      console.log("Entra a handlePropierties");
  
      if (eve.target.checked) {
  
        setFormState(
          [...formState, selectedOption]
        )
  
      } else {
        setFormState(
          [...formState.filter(option => option != selectedOption)]
        )
      }
    } catch (error) {
      alert("ups, algo salio mal, intelo otra vez")
    }

  }

  useEffect(()=>{
    console.log(formState);

  }, [formState])

  return (

      <div className="w-full rounded  ">
        <label for="released" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genders</label>

        <div  onClick={actualizarDespliegue} className='flex items-center select-none cursor-pointer  px-3 text-sm font-semibold  bg-blanco h-[45px] min-h-[45px] rounded-lg border'>
          Select genders
        </div>


          <div className={stateDespliegue? `flex flex-col items-center py-2   min-h-[200px] h-auto w-full rounded-lg bg-oscuro/70 mt-2 text-blanco transition-all duration-100  
          max-h-[300px] scroll-my-0 overflow-hidden ` : `max-h-[0px] transition-all duration-100`}>

            <div className='w-full max-h-[280px] overflow-hidden  overflow-y-scroll gender'>
              
              {genders.length? (genders.map((opt, index)=>
                <label htmlFor={opt.name} key={index} className={stateDespliegue?"flex flex-row items-center cursor-pointer flex-1 h-full px-2  py-1 hover:bg-gris/40":"hidden" }  >
                

                  <input type="checkbox" className='cursor-pointer' 
                    id={opt.name} name={"genders"} value={opt.id}  
                    onChange={handlePropierties}/>

                  <label htmlFor={opt.name} className='ml-2 cursor-pointer' >{opt.name}</label>
                  
                </label>
              )):<></>}

            </div>


          </div>

      </div>        

  
  )
}  
