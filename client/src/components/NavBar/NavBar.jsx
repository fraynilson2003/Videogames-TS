import React, { useState } from "react";
import favoritos from "../../assets/favoritos.svg"
import { ReactComponent  as Logo } from "../../assets/TS.svg"
import { cleanVideogames, setConfigFilter } from "../../redux/actions/filters";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from "../../redux/actions/actions";
import Logout from "../Login/Logout";
import missingAvatar from "../../assets/Missing_avatar.svg.png"
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../Login/Login";
import { NavLink } from "react-router-dom";

export default function NavBar({isLoadingVideogame, setIsLoadingVideogame}) {
  const [isHovered, setIsHovered] = useState(false);
  const [countFav, setCountFav] = useState(7)
  let configFilter = useSelector((state)=>state.configFilterVideogames)
  let dispatch = useDispatch()

  //login?
  let userAuth0 = useSelector((state)=>state.userAuth0)
  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0()


  //estado para input name
  let [inputName, setInputName] = useState(configFilter?.name)

  const handleHover = () => {
    setIsHovered(true);
  };


  const handleNameFilter = (event)=>{
    event.preventDefault()

    let newFilter = {
      ...configFilter,
      ["name"]: inputName
    }

    dispatch(setConfigFilter(newFilter))
    dispatch(cleanVideogames())

    //responses
    setIsLoadingVideogame(true)
    let res = getAllVideogames(newFilter).then((res)=>{
      dispatch(res)
      setIsLoadingVideogame(false )
    }).catch(err=>{
      alert(err)
    })
 
  }


  const handleChangeName = (event)=>{
    let value = event.target.value
    setInputName(value)
  }

  let favoriteNum = (countFav)=>{
    if(countFav > 0 && countFav <= 9   ){
      return <span className=" badge badge-sm indicator-item left-[15px] p-[5px] top-[7px] animate-pulse">{`${countFav}`}</span>
    }else if(countFav > 9){
      return <span className=" badge badge-sm indicator-item left-[12px] p-[4px] top-[7px] animate-pulse">{`9+`}</span>
    }else{
      return <></>
    }
  }


  
  return (
    <div className="flex flex-row container items-center justify-between bg-oscuro text-blanco h-[60px] py-2 pt-3   
    lg:rounded">
        
     
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
        <form onSubmit={handleNameFilter} className="hidden form-control flex-1 md:flex">
          <input 
            onChange={handleChangeName}
            value={inputName}
            type="text" 
            placeholder="Search" 
            className="input bg-gris font-semibold text-blanco hover:bg-blanco px-2 h-10 hover:text-oscuro" />
        </form>

        {/*Carrito*/}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator ml-[2px] ">
                <img src={favoritos}/>
                {countFav && favoriteNum(countFav)}
              </div>
            </label>

            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow ">
              <div className="card-body">
                <span className="font-bold text-oscuro text-lg">{`8 Items`}</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <NavLink className="w-full" to={"/profile/favorites"}>
                    <button className="btn btn-primary btn-block">View cart</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

        
        {/* Perfil */}
        <div className="dropdown dropdown-end ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {userAuth0?.imagePerfil? (
                <img src={`${userAuth0.imagePerfil}`} alt={userAuth0.name} />
              ):(
                <img src={missingAvatar} alt="no register" />
              )}
            </div>  
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {userAuth0?.imagePerfil? (
              <>
                <li className="text-oscuro">
                  <NavLink className="w-full" to={"/profile"}>
                    <a className="justify-between">
                      Profile
                      <span className="badge ml-4">New</span>
                    </a>
                  </NavLink>

                </li>
                <li className="text-oscuro">
                  <NavLink to={"/profile/favorites"}>
                    <a>Favorites</a>
                  </NavLink>
                  </li>
                <li className="text-oscuro">
                  <Logout/>
                </li>
              </>
            ):(
              <>
                <Login/>
              </>
            )}

          </ul>
        </div>

      </div>

    </div>

    
  )
}
