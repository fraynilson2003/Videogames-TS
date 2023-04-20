import React, { Suspense, lazy, useEffect, useState } from "react";
import LoadingCard from "./LoadingCard";
import { NavLink } from "react-router-dom";
import { ReactComponent  as Favorite } from "../../../../assets/favorite_FILL1_wght400_GRAD0_opsz40.svg"
import { ReactComponent  as Favorite0 } from "../../../../assets/favorite_FILL0_wght400_GRAD0_opsz40.svg"
import { addFavoriteVideogame, deleteFavoriteVideogame, putReduxFavorite } from "../../../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { getSessionUrl } from "../../../../redux/actions/stripe";

export default function CardVideogames({ props, active, favorites,  idUser}) {
  let dispatch = useDispatch()
  let [favoriteBoolean, setFavoriteBoolean] = useState(active)

  function abrirVentana(ruta) {
    const width = 650;
    const height = 650;
    // eslint-disable-next-line no-restricted-globals
    const left = window.screenLeft + (window.outerWidth - width) / 2;
    // eslint-disable-next-line no-restricted-globals
    const top = window.screenTop + (window.outerHeight - height) / 2;

    // Verificar si ya hay una ventana hija abierta
    if (!window.childWindow || window.childWindow.closed) {
      window.childWindow = window.open(
        ruta,
        "_blank",
        `width=${width},height=${height},left=${left},top=${top}`
      );
    } else {
      // Si ya hay una ventana hija abierta, enfocarla y cambiar su ubicación
      window.childWindow.focus();
      window.childWindow.moveTo(left, top);
    }
  }

  const createSessionStripe = ()=>{
    getSessionUrl(idUser, props.id)
    .then(res=>{
      abrirVentana(res)    
    }).catch(err=>{
      alert(err)
    })
  }  

  const [isLoading, setIsLoading] = useState(true);
  let user = useSelector(state=>state.userAuth0)


  const handleImageLoad = () => {
    console.log("Entra al handle img");
    setIsLoading(false);
  };

  //clean name gender
  let Genders = props.Genders.map((g)=>{
    let name = g.name.split(" ")[0]
    return {
      ...g,
      name: name
    }
  }).slice(0,2)

  let addRedux = ()=>{
    let newRedux = [props, ...favorites.result]
    dispatch(putReduxFavorite(newRedux))
  } 

  let deleteRedux = ()=>{
    let newRedux = favorites.result.filter(ele=>ele.id !== props.id)
    dispatch(putReduxFavorite(newRedux))
  } 

  let handleAddFavorite = ()=>{
    let config = {
      userId: user.id,
      videogameId: props.id
    }
    setFavoriteBoolean(true)
    addFavoriteVideogame(config)
    .then(res=>{
      console.log("agregado correctamente");
      addRedux()

    }).catch(err=>{
      setFavoriteBoolean(false)
      alert(err)
    })
  }

  
  let handleDeleteFavorite = ()=>{
    let config = {
      userId: user.id,
      videogameId: props.id
    }
    setFavoriteBoolean(false)
    deleteFavoriteVideogame(config)
    .then(res=>{
      console.log("elimiando correctamente");
      deleteRedux()
    }).catch(err=>{
      setFavoriteBoolean(true)
      alert(err)
    })
  }

  let classCard = `card my-2 mx-2 flex-auto w-auto min-h-[330px] max-h-[330px] max-w-[300px] min-w-[300px]  text-blanco bg-gris  bg-base-100 shadow-xl
  md:my-3 md:mx-3 sm:my-2 sm:mx-2 rounded-md md:max-w-[280px] md:min-w-[280px]`

  let classCardNonde = `hidden`

  return (
    <>
      {isLoading? <LoadingCard/> : <></>}
          

      <div className={isLoading? classCardNonde : classCard}>

        <NavLink to={`detail/${props.id}`} className=" relative h-[180px] min-h-[150px] max-w-[300px] min-w-[300px] overflow-hidden rounded-t-md 
        md:max-w-[280px] md:min-w-[280px]">
          <img 
          className="object-cover h-full w-full"  
          src={props.background_image}
          onLoad={handleImageLoad}/>


        </NavLink>

        <div className="relative card-body py-2 px-4 justify-between">
          
          <div className="flex flex-row ">
            <h2 className="card-title text-start w-[75%] ">
              {props.name}
            </h2>
            <div  className="w-[20%] ml-[5%]">
              <div className="flex justify-center items-center absolute top-2 right-4 w-[40px] h-[40px] bg-blanco/20 border filter blur-[4] cursor-pointer rounded-full" >
                {favoriteBoolean?(
                  <Favorite 
                  onClick={handleDeleteFavorite}          
                  width={30}
                  height={30}
                  fill="rgb(230,230,230)"/>
                ):(
                <Favorite0      
                  onClick={handleAddFavorite}             
                  width={30}
                  height={30}
                  fill="rgb(4, 4, 4, 0.8)"/>
                )}
        

              </div>
            </div>
          </div>



          <div className="flex flex-row ">


            {/* Price */}
            <div className="flex items-center w-[40%]  h-[40px]">
                <h2 className="text-2xl w-[80px] font-bold font-primary rounded-xl text-blanco px-[7px] py-[2px] border-blanco border-[1px]">
                  {`$ ${props.price}`}
                </h2>
            </div>


            {/* Generos */}
            <div className="card-actions items-end  flex-1 justify-end   ">
              {Genders.length? (Genders.map((g)=>
                <div className="badge badge-outline text-sm px-2">{g.name}</div>
              )):<></>}
            </div>

          </div>

        </div>
      </div>
      
    </>

  )
}
