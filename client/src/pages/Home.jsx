import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Logout from "../components/Login/Logout";

export default function Home() {
  let [isLoadingVideogame, setIsLoadingVideogame] = useState(false)



  return (
    <>
      <NavBar       
      isLoadingVideogame={isLoadingVideogame}
      setIsLoadingVideogame={setIsLoadingVideogame}/>

      <Logout/>

      <Hero      
      isLoadingVideogame={isLoadingVideogame}
      setIsLoadingVideogame={setIsLoadingVideogame}/>
    </>
  );
}
