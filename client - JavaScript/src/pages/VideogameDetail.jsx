import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cleanVideogameId, getAllVideogameById } from '../redux/actions/actions';
import { useParams } from 'react-router-dom';
import { DetailLoading, DetailPLoading } from '../components/VideogameDetail/DetailLoading';
import { NavLink } from "react-router-dom";
import Home from './Home';

export default function VideogameDetail() {
  const [isLoading, setIsLoading] = useState(true);

  let dispacth = useDispatch()

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  //variable de la url
  let {idVideogame} = useParams()


  let detailVid = useSelector(state=>state.videogameId)

  useEffect(()=>{
    dispacth(cleanVideogameId())
    getAllVideogameById(idVideogame).then(res=>{
      dispacth(res)
    }).catch(err=>{
      alert(err.message)
    })
    window.scrollTo(0, 0);

  }, [])

    let classImg = `mt-5 h-[200px] min-h-[200px] max-w-[350px] min-w-[350px] overflow-hidden rounded-sm
    md:max-w-[280px] md:min-w-[280px]`
    let classImgNone = "hidden"


  return (
    <>
    <div className="hidden">
      <Home/>
    </div>
    <div  className='flex flex-col flex-wrap container min-h-[100vh] mx-auto  bg-oscuro md:mx-auto'>
      <div className='flex  justify-start w-full  mt-2 px-5' >
        <NavLink to={`/home`} className='mt-4 w-[65px] text-center px-2 py-1 bg-amarillo/90 text-oscuro font-bold text-base font-primary rounded-sm cursor-pointer
        hover:bg-amarillo '>
          Home
        </NavLink>
      </div>

      <div className='flex flex-col mx-auto px-5 w-full min-h-full  h-auto pb-10 min-w-ful items-center 
      md:flex-row-reverse md:items-start md:pt-10'>
        <div className='min-w-full h-[200px] min-h-[200px] max-h-[300px] mb-4
        md:min-w-[550px] md:min-h-[350px] md:max-w-[550px] md:max-h-[350px] md:mx-5 '>
        {/* IMG */}
          {isLoading? (
            <DetailLoading/>
          ):<></>}

          <div className={isLoading? classImgNone : `mt-5 w-full h-[200px] min-h-[200px] max-h-[300px] max-w-[350px] min-w-full overflow-hidden rounded-sm
     md:min-w-[550px] md:min-h-[350px] md:max-w-[550px] md:max-h-[350px] items-start`}>
            <img 
            className="object-cover h-full w-full min-w-full min-h-full"  
            src={detailVid.background_image}
            onLoad={handleImageLoad}/>
          </div>
        </div>

        <div className='w-full md:mx-5'>
          {isLoading? (
            <DetailPLoading/>
          ):(
          <div className='flex flex-col mt-5 items-start text-blanco   md:mt-0  '>
            <h1 className='font-primary text-center mx-auto text-2xl md:text-4xl  md:mb-7'>{detailVid.name}</h1>
            <p className='mt-3 text-justify font-primary text-xl   md:mb-7'>{detailVid.description}</p>

            <div className='mt-3 h-auto w-full'>
              <h2 className='text-start text-xl md:text-2xl   md:mb-3 '>Genders</h2>

              <div className='flex flex-col  w-full min-w-full
              md:flex-row md:flex-wrap md:justify-center  '>
                {detailVid.Genders?.length? (detailVid.Genders.map((g)=>
                  <div className=' relative my-5 rounded-lg overflow-hidden w-[100%]  h-[120px]  group
                  md:w-[170px] md:h-[120px] md:w-min-[170px] md:h-min-[120px]  md:w-max-[170px] md:h-max-[120px] md:mx-3 md:my-3 md:rounded-lg 
                  '>
                    
                    <img className='flex justify-center items-center absolute object-cover w-full h-full 
                    group-hover:scale-125 transition-all duration-400 md:rounded-lg  
                    md:w-full md:h-full  brightness-100 hover:brightness-50'
                      src={g.image_background} alt={g.name} />

                    <h2 className='absolute w-full text-blanco  text-center top-[70%] font-semibold 
                    text-shadow-sm p-2 backdrop-blur-[1px] bg-gris/20  
                    md:text-blanco/80 group-hover:text-blanco'>{g.name}</h2>
                  </div>
                )):<></>}
              </div>

            </div>
          </div>
          )}
        </div>



      </div>

    </div>

    </>

  )
}
