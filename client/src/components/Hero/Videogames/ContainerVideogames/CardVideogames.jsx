import React from "react";
import foto from "../../../assets/1273344.jpg";

export default function CardVideogames() {
  return (
    <div>

      <div className="card h-auto w-auto max-w-[350px] md:max-w-[250px] text-blanco bg-gris  bg-base-100 shadow-xl">
        <figure>
          <img src={foto} alt="Shoes" />
        </figure>

        <div className="card-body py-2">
          <h2 className="card-title">
            Shoes!
          </h2>
          <div className="card-actions justify-end pb-2">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
