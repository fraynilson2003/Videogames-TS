import React, { Suspense, lazy, useEffect, useState } from "react";
import LoadingCard from "./LoadingCard";
import { NavLink } from "react-router-dom";
import { ReactComponent  as Favorite } from "../../../../assets/favorite_FILL1_wght400_GRAD0_opsz40.svg"
import { ReactComponent  as Favorite0 } from "../../../../assets/favorite_FILL0_wght400_GRAD0_opsz40.svg"
import { addFavoriteVideogame, deleteFavoriteVideogame } from "../../../../redux/actions/userAction";
import { useSelector } from "react-redux";

export default function CardVideogames(props) {
  const [isLoading, setIsLoading] = useState(true);
  let user = useSelector(state=>state.userAuth0)

  const handleImageLoad = () => {
    console.log("Entra al handle img");
    setIsLoading(false);
  };

  let Genders = props.Genders.map((g)=>{
    let name = g.name.split(" ")[0]
    return {
      ...g,
      name: name
    }
  }).slice(0,2)

  let addFavorite = ()=>{
    let config = {
      userId: user.id,
      videogameId: props.id
    }
    deleteFavoriteVideogame(config)
    .then(res=>{
      alert(res)
    }).catch(err=>{
      alert(err)
    })
  }

  let classCard = `card my-2 mx-2 flex-auto w-auto min-h-[320px] max-h-[350px] max-w-[300px] min-w-[300px]  text-blanco bg-gris  bg-base-100 shadow-xl
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
          src={props.img}
          onLoad={handleImageLoad}/>


        </NavLink>

        <div className="relative card-body py-2 px-4 justify-between">
          
          <div className="flex flex-row ">
            <h2 className="card-title text-start w-[75%] ">
              {props.name}
            </h2>

            <div onClick={addFavorite} className="w-[20%] ml-[5%]">
              <div className="flex justify-center items-center absolute top-2 right-4 w-[40px] h-[40px] bg-blanco/20 border filter blur-[4] cursor-pointer rounded-full" >
                <Favorite           
                  width={30}
                  height={30}
                  fill="rgb(230,230,230)"/>

                {/* <Favorite0          
                  width={30}
                  height={30}
                  fill="rgb(4, 4, 4, 0.8)"/>                   */}
              </div>
            </div>
          </div>


          {/* Generos */}

          <div className="card-actions justify-end pb-2">
            {Genders.length? (Genders.map((g)=>
              <div className="badge badge-outline text-sm px-2">{g.name}</div>
            )):<></>}
          </div>
        </div>
      </div>
      
    </>

  )
}
