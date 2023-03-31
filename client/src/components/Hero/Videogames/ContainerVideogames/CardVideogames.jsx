import React from "react";
import foto from "../../../assets/1273344.jpg";

export default function CardVideogames(props) {

  let Genders = props.Genders.map((g)=>{
    let name = g.name.split(" ")[0]
    return {
      ...g,
      name: name
    }
  }).slice(1,4)


  return (
    <div className="card my-1 mx-1 flex-auto w-auto max-h-[300px] max-w-[300px]  text-blanco bg-gris  bg-base-100 shadow-xl
    md:max-w-[250px] md:my-3 md:mx-3 sm:my-2 sm:mx-2 ">
      <figure>
        <img src={props.img} alt="Shoes" />
      </figure>

      <div className="card-body py-2">
        <h2 className="card-title">
          {props.name}
        </h2>

        {/* Generos */}

        <div className="card-actions justify-end pb-2">
          {Genders.length? (Genders.map((g)=>
            <div className="badge badge-outline">{g.name}</div>
          )):<></>}
        </div>
      </div>
    </div>
      

  );
}
