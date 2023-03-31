import React, { useEffect, useState } from "react";
import missingAvatar from "../assets/Missing_avatar.svg.png"
import favoritos from "../assets/favoritos.svg"
import { ReactComponent  as Logo } from "../assets/TS.svg"

export default function NavBar() {
  const [isHovered, setIsHovered] = useState(false);
  const [countFav, setCountFav] = useState(7)

  const handleHover = () => {
    setIsHovered(true);
  };

  let favoriteNum = (countFav)=>{
    if(countFav > 0 && countFav <= 9   ){
      return <span className=" badge badge-sm indicator-item left-[15px] p-[5px] top-[7px]">{`${countFav}`}</span>
    }else if(countFav > 9){
      return <span className=" badge badge-sm indicator-item left-[12px] p-[4px] top-[7px]">{`9+`}</span>
    }else{
      return <></>
    }
  }


  
  return (
    <div className="flex flex-row items-center justify-between bg-oscuro text-blanco h-[60px] py-2 marg-x rounded ">
        
     
      <div className="flex flex-row p-0 m-0 ">
        <Logo           
          onMouseEnter={handleHover}
          onMouseLeave={() => setIsHovered(false)}
          width={50}
          height={50}
          fill={isHovered ? "rgb(211, 191, 13)" : "#ffffff" }
          style={{cursor: 'pointer', scale: 1.2}}/>
      </div>

      <div className="flex flex-row items-center flex-1 w-auto justify-end pr-2">
        {/*Input*/}
        <div className="flex form-control flex-1">
          <input type="text" placeholder="Search" className="input bg-gris font-semibold text-blanco hover:bg-blanco px-2 h-10 hover:text-oscuro" />
        </div>

        {/*Carrito*/}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator ml-[2px]">
              <img src={favoritos}/>
              {countFav && favoriteNum(countFav)}
            </div>
          </label>

          <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow ">
            <div className="card-body">
              <span className="font-bold text-oscuro text-lg">{`8 Items`}</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Perfil */}
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={missingAvatar} alt="avatar" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li className="text-oscuro">
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li className="text-oscuro"><a>Settings</a></li>
            <li className="text-oscuro"><a>Logout</a></li>
          </ul>
        </div>

      </div>

    </div>

    
  )
}
