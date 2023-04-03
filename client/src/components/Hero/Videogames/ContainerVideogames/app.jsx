import React, { useState } from "react";

export default function CardVideogames(props) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  let Genders = props.Genders.map((g) => {
    let name = g.name.split(" ")[0];
    return {
      ...g,
      name: name,
    };
  }).slice(0, 2);

  return (
    <div className="card my-2 mx-2 flex-auto w-auto max-h-[420px] max-w-[300px] min-w-[300px]  text-blanco bg-gris  bg-base-100 shadow-xl md:my-3 md:mx-3 sm:my-2 sm:mx-2 rounded-md md:max-w-[280px] md:min-w-[280px]">
      <div className="h-[180px] min-h-[150px] max-w-[300px] min-w-[300px] overflow-hidden rounded-t-md md:max-w-[280px] md:min-w-[280px]">
        {isLoading && <ImageFallback />}
        <img
          className="object-cover h-full w-full"
          loading="lazy"
          src={props.img}
          onLoad={handleImageLoad}
          style={{ display: isLoading ? "none" : "block" }}
        />
      </div>
      <div className="card-body py-2 px-4 justify-between">
        <h2 className="card-title text-start">{props.name}</h2>
        {/* Generos */}
        <div className="card-actions justify-end pb-2">
          {Genders.length ? (
            Genders.map((g) => (
              <div className="badge badge-outline text-sm px-2">{g.name}</div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
