import React, { Suspense, lazy, useEffect, useState } from "react";
import LoadingCard from "./LoadingCard";
import { NavLink } from "react-router-dom";

export default function CardVideogames(props) {
  const [isLoading, setIsLoading] = useState(true);

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

  let classCard = `card my-2 mx-2 flex-auto w-auto min-h-[320px] max-h-[350px] max-w-[300px] min-w-[300px]  text-blanco bg-gris  bg-base-100 shadow-xl
  md:my-3 md:mx-3 sm:my-2 sm:mx-2 rounded-md md:max-w-[280px] md:min-w-[280px]`

  let classCardNonde = `hidden`

  return (
    <>
      {isLoading? <LoadingCard/> : <></>}
          

      <div className={isLoading? classCardNonde : classCard}>

        <NavLink to={`detail/${props.id}`} className="h-[180px] min-h-[150px] max-w-[300px] min-w-[300px] overflow-hidden rounded-t-md 
        md:max-w-[280px] md:min-w-[280px]">
          <img 
          className="object-cover h-full w-full"  
          src={props.img}
          onLoad={handleImageLoad}/>
        </NavLink>

        <div className="card-body py-2 px-4 justify-between">
          <h2 className="card-title text-start">
            {props.name}
          </h2>

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
