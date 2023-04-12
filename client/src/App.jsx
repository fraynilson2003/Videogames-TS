import './App.css';
import { Route, Routes } from "react-router-dom";
import axios from "axios"
import Home from './pages/Home';
import VideogameDetail from './pages/VideogameDetail';
import CreateVideogame from './pages/CreateVideogame';
import { useLoginStorage } from './helpers/useLoginStorage';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { loginAuth0, putUserAuth0 } from './redux/actions/userAction';
import { useDispatch } from 'react-redux';


axios.defaults.baseURL = "https://videogames-ts-production.up.railway.app/"

function App() {
  let dispatch = useDispatch()

  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0()
  
  let login = ()=>{
    console.log(isAuthenticated);
    const localStorage = window.localStorage.getItem("userStorage");
    if(isAuthenticated & !localStorage){
        let userLogin = {
          name: user.name,
          email: user.email,
          imagePerfil: user.picture
        }

        console.log("Entraron a 1");
        
        loginAuth0(userLogin)
        .then(res=>{
          window.localStorage.setItem("userStorage", JSON.stringify(res));
          dispatch(putUserAuth0(res))
        }).catch(err=>{
          alert("No se pudo iniciar sesion")
        })
          
      
    }else{
      if(localStorage){
        let userLogin = JSON.parse(localStorage)
        console.log("Entraron a 2");
  
        dispatch(putUserAuth0(userLogin))
      }
    }
  }
  
  useEffect(()=>{
    login()
  }, [isAuthenticated])

  useEffect(()=>{
    login()
  }, [])
  return (
    <div className='App w-full min-w-full md:h-[2000px] '>
      <Routes>
        <Route exact path="/" element={<Home/>}/>

        <Route exact path="/detail/:idVideogame" element={<VideogameDetail/>}/>

        <Route exact path="/create" element={<CreateVideogame/>}/>



      </Routes>
    </div>


  )
}

export default App;
