import React, { useEffect, useState } from "react";
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

export default function NavBar({isLoadingVideogame, setIsLoadingVideogame, isLoadingImg}) {
  const [isHovered, setIsHovered] = useState(false);
  let countNotify = useSelector(state=>state.countNotify)
  const [loadingImg, setLoadingImg] = useState(true)

  //login?
  let userAuth0 = useSelector((state)=>state.userAuth0)  
  const { loginWithRedirect } = useAuth0()


  //loading img
  useEffect(()=>{
    setLoadingImg(true)
  }, [])

  let configFilter = useSelector((state)=>state.configFilterVideogames)
  let dispatch = useDispatch()

  //option true
  let [menu, setMenu] = useState(false)




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
      setIsLoadingVideogame(false)
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
    <div className="flex flex-row z-[100] container items-center justify-between bg-oscuro text-blanco h-[60px] py-2 pt-3   
    lg:rounded">
        
     
      <div className="flex flex-row p-0 m-0 ">
        <NavLink to={"/"}>
        <Logo           
          onMouseEnter={handleHover}
          onMouseLeave={() => setIsHovered(false)}
          width={50}
          height={50}
          fill={isHovered ? "rgb(211, 191, 13)" : "#ffffff" }
          style={{cursor: 'pointer', scale: 1.2}}/>
        </NavLink>
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
        {userAuth0?.imagePerfil? (
          <NavLink to={"/profile/favorites"}>
            <div className="">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator ml-[2px] ">
                  <img src={favoritos}/>
                  {countNotify? favoriteNum(countNotify):null}
                </div>
              </label>
            </div>
          </NavLink>
        ):(
          <div onClick={()=>loginWithRedirect()} className="cursor-pointer">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator ml-[2px] ">
                <img src={favoritos}/>
                {countNotify? favoriteNum(countNotify):null}
              </div>
            </label>
          </div>
        )}
       



        {/* Perfil */}
        <div className="relative w-150px max-h-full right-0 z-[110]">
          <div>
            <div onClick={()=>setMenu(!menu)} className="max-h-full w-12 rounded-full overflow-hidden cursor-pointer">

              {loadingImg?(
                 <img src={missingAvatar} alt="no register" />
              ):<></>}
        
              {userAuth0?.imagePerfil? (    
                  <>
                    <img 
                    src={`${userAuth0.imagePerfil}`} 
                    alt={userAuth0.name} 
                    onLoad={()=>setLoadingImg(false)}
                    onError={(e) => {
                      e.target.onerror = null
                      setLoadingImg(false)
                      e.target.src = missingAvatar; 
                    }}/>
                  </>
              ):<></>}
            </div>
          </div>

          <div className={menu? "absolute  top-14 right-0 w-[200px] px-2 py-1 bg-blanco text-oscuro rounded-lg"  : "hidden"}>
            {userAuth0?.imagePerfil? (
              <div className="font-semibold">
              <NavLink className="w-full" to={"/home"}>
                <div className="w-full cursor-pointer py-1 my-1 px-2 tracking-1.5 rounded-md hover:bg-oscuro/70 hover:text-blanco">
                  Home
                </div>
              </NavLink>

              <NavLink className="w-full" to={"/profile"}>
                <div className="w-full cursor-pointer py-1 my-1 px-2 tracking-1.5 rounded-md hover:bg-oscuro/70 hover:text-blanco">
                  Profile
                </div>
              </NavLink>

              <NavLink to={"/profile/favorites"}>
                <div className="w-full cursor-pointer py-1 my-1 px-2  rounded-md hover:bg-oscuro/70 hover:text-blanco">
                  Favorites
                </div>
              </NavLink>
              

              <NavLink to={"/profile/purchased"}>
                <div className="w-full cursor-pointer py-1 my-1 px-2  rounded-md hover:bg-oscuro/70 hover:text-blanco">
                  Purchased
                </div>
              </NavLink>

              <Logout classN="w-full cursor-pointer py-1 my-1 px-2  rounded-md hover:bg-oscuro/70 hover:text-blanco"/>

              </div>
            ):(
              <>
                <NavLink className="w-full" to={"/home"}>
                  <div className="w-full cursor-pointer py-1 my-1 px-2 tracking-1.5 rounded-md hover:bg-oscuro/70 hover:text-blanco">
                    Home
                  </div>
                </NavLink>
                <Login classN="w-full cursor-pointer py-1 my-1 px-2  rounded-md hover:bg-oscuro/70 hover:textbl hover:text-blanco"/>
              </>
            )}


          </div>
                  

        </div>

      </div>

    </div>

    
  )
}
