import React from 'react'
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa"
import iconReact from "../../../assets/atom.png"
import iconTS from "../../../assets/typescript.png"
import iconJS from "../../../assets/java-script-logo.png"
import Express from "../../../assets/express.png"
import NodeJS from "../../../assets/node.js.png"
import PostgreSQL from "../../../assets/postgreSQL.png"
import Redux from "../../../assets/redux.png"
import Sequelize from "../../../assets/sequelize-logo-black-and-white.png"


export default function DataDev() {
  return (
    <div className='flex flex-col h-auto w-full'>
      <h1 className='text-xl pl-4 font-primary font-normal'>My data</h1>
      <div className='flex flex-row w-full max-w-[220px] items-center justify-around m-4 h-16 text-[50px]'>
         <a href="https://github.com/fraynilson2003">
                <FaGithub />
         </a>

         <a href="https://www.linkedin.com/in/fray-desarrolador/">
                <FaLinkedin />
         </a>
      </div>

      <h1 className='text-xl mt-4 pl-4 font-primary font-normal'>Technologies in this app</h1>
      <div className='flex flex-row flex-wrap justify-around w-full max-w-[220px] mx-auto mt-4 '>

        <div className='flex flex-col justify-center items-center w-[80px] mx-2 my-3 '>
          <img className='object-contain w-[50px] invert' src={iconReact} alt="react" />
        </div>

        <div className='flex flex-col justify-center items-center  w-[80px] mx-2 my-3 '>
          <img className='object-contain w-[50px] invert' src={iconTS} alt="iconTS" />
        </div>

        <div className='flex flex-col justify-center items-center  w-[80px] mx-2 my-3 '>
          <img className='object-contain w-[50px] invert' src={iconJS} alt="iconJS" />
        </div>
        
        <div className='flex flex-col justify-center items-center  w-[80px] mx-2 my-3 '>
          <img className='object-contain w-[50px] brightness-0 scale-150 invert' src={Express} alt="Express" />
        </div>

        <div className='flex flex-col justify-center items-center  w-[80px] mx-2 my-3 '>
          <img className='object-contain w-[50px] invert' src={NodeJS} alt="NodeJS" />
        </div>
        
        <div className='flex flex-col justify-center items-center  w-[80px] mx-2 my-3 '>
          <img className='object-contain w-[50px] invert' src={Redux} alt="Redux" />
        </div>

        <div className='flex flex-col justify-center items-center  w-[80px] mx-2 my-3 '>
          <img className='object-contain brightness-0 w-[50px] invert' src={PostgreSQL} alt="PostgreSQL" />
        </div>
        
        <div className='flex flex-col justify-center items-center  w-[80px] mx-2 my-3 '>
          <img className='object-contain w-[50px] invert' src={Sequelize} alt="Sequelize" />
        </div>

      </div>

      <h1 className='text-xl mt-4 pl-4 font-primary font-normal'>View this project</h1>
      <div className='flex flex-row w-full max-w-[220px] items-center justify-around m-4 h-16 text-[50px]'>
        <a href="https://github.com/fraynilson2003">
          <FaGithub />
        </a>
      </div>

    </div>

  )
}
