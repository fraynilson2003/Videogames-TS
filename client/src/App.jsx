import './App.css';
import { Route, Routes } from "react-router-dom";
import axios from "axios"
import Home from './pages/Home';
import VideogameDetail from './pages/VideogameDetail';
import CreateVideogame from './pages/CreateVideogame';
import Login from './pages/Login';
import { useLoginStorage } from './helpers/useLoginStorage';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { putUserAuth0 } from './redux/actions/userAction';


axios.defaults.baseURL = "https://videogames-ts-production.up.railway.app/"

function App() {
  const [ userInfo, isLogin ] = useLoginStorage();

  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0()
  
  useEffect(()=>{
    if(isAuthenticated){
      const localStorage = window.localStorage.getItem("userStorage");

      if(!localStorage){
        let userLogin = {
          name: user.name,
          email: user.email,
          imagePerfil: user.picture
        }

        window.localStorage.setItem("userStorage", JSON.stringify(userLogin));
        putUserAuth0(userLogin)
      }else{
        let userLogin = JSON.parse(localStorage)
        putUserAuth0(userLogin)
      }

      window.localStorage.removeItem("userStorage");
      window.localStorage.setItem("userStorage", JSON.stringify({
        name: user.name,
        email: user.email,
        picture: user.picture
      }));
    }
  }, [])


  useEffect(()=>{

  }, [isLogin])
  return (
    <div className='App w-full min-w-full md:h-[2000px] '>
      <Routes>
        <Route exact path="/" element={<Home/>}/>

        <Route exact path="/detail/:idVideogame" element={<VideogameDetail/>}/>

        <Route exact path="/create" element={<CreateVideogame/>}/>

        <Route exact path="/login" element={<Login 
          userInfo={userInfo}
          isLogin={isLogin}/>}/>

      </Routes>
    </div>


  )
}

export default App;
