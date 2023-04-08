import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanVideogames, setConfigFilter } from "../../../redux/actions/filters";
import { getAllVideogames } from "../../../redux/actions/actions";
import { Link } from "react-scroll"

export default function Paginado({isLoadingVideogame, setIsLoadingVideogame}) {
  let dispatch = useDispatch()
  let configFilter = useSelector((state)=>state.configFilterVideogames)
  let videogamesResult = useSelector((state)=>state.allVideogames)

  let changePagination = (action)=>{
    if(action === "prev" && configFilter.page > 1){
      let newFilter = {
        ...configFilter,
        page: Number(configFilter.page) - 1
      }
      dispatch(cleanVideogames())
      dispatch(setConfigFilter(newFilter))

      //responses
      setIsLoadingVideogame(true)
      let res = getAllVideogames(newFilter).then((res)=>{
        dispatch(res)
        setIsLoadingVideogame(false )
      }).catch(err=>{
        alert(err)
      })
    }

    if(action === "next" && configFilter.page < videogamesResult.totalPages){
      let newFilter = {
        ...configFilter,
        page: configFilter.page + 1
      }
      dispatch(cleanVideogames())
      dispatch(setConfigFilter(newFilter))

      //responses
      setIsLoadingVideogame(true)
      let res = getAllVideogames(newFilter).then((res)=>{
        dispatch(res)
        setIsLoadingVideogame(false )
      }).catch(err=>{
        alert(err)
      })
    }
  }

  return (
    <div className="flex justify-center items-center h-[50px] p-2">

      <div className="btn-group">
        <Link onClick={()=>changePagination("prev")} 
        to="#" 
        className="btn min-h-[40px] h-[40px] text-lg" 
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}>
            {"«"}
        </Link>

        <button className="btn min-h-[40px] h-[40px] pt-1">{` pag ${configFilter?.page? configFilter?.page : "..."}`}</button>
        <Link onClick={()=>changePagination("next")} 
        to="#" 
        className="btn min-h-[40px] h-[40px] text-lg"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}>
            {"»"}
        </Link>

      </div>

    </div>
  )
}
