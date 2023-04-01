import React from "react";
import foto from "../../../assets/1273344.jpg";

export default function CardVideogames(props) {

  let Genders = props.Genders.map((g)=>{
    let name = g.name.split(" ")[0]
    return {
      ...g,
      name: name
    }
  }).slice(0,2)


  return (
    <div className="card my-2 mx-2 flex-auto w-auto max-h-[300px] max-w-[250px]  text-blanco bg-gris  bg-base-100 shadow-xl
    md:max-w-[250px] md:my-3 md:mx-3 sm:my-2 sm:mx-2 rounded-md">

      <div className="h-[100px] min-h-[150px] min-w-[250px] bg-amarillo overflow-hidden rounded-t-md">
        <img className="object-cover h-full w-full" src={props.img} alt="Shoes" />
      </div>

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
      

  );
}
