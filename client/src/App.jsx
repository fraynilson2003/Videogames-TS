import './App.css';
import { Route, Routes } from "react-router-dom";
import axios from "axios"
import Home from './pages/Home';
import VideogameDetail from './pages/VideogameDetail';
import CreateVideogame from './pages/CreateVideogame';
import { useLoginStorage } from './helpers/useLoginStorage';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getFavoritesVideogames, loginAuth0, putUserAuth0 } from './redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import Profile from './pages/Profile';


axios.defaults.baseURL = "https://videogames-ts-production.up.railway.app/"

function App() {
  let dispatch = useDispatch()
  const { loginWithRedirect, user, isAuthenticated, isLoading, getAccessTokenWithPopup } = useAuth0()
  
  let getFavorites = (id)=>{
    getFavoritesVideogames(id)
    .then(res=>{
      console.log((res.payload));
      dispatch(res)
    }).catch(err=>{
      alert(err)
    })

  }

  useEffect(()=>{
    const localStorage = window.localStorage.getItem("userStorage");
    if(isAuthenticated && !localStorage){
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
          getFavorites(res.id)
        }).catch(err=>{
          alert("No se pudo iniciar sesion")
        })
          
    }else if(localStorage){
        let userLogin = JSON.parse(localStorage)
        //loginWithRedirect().then(res=>console.log(res)).catch(err=>console.log(err))
        console.log("Entraron a 2");
  
        dispatch(putUserAuth0(userLogin))
        getFavorites(userLogin.id)
      
    }
  }, [])

  useEffect(()=>{
    const localStorage = window.localStorage.getItem("userStorage");
    if(isAuthenticated && !localStorage){
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
          getFavorites(res.id)
        }).catch(err=>{
          alert("No se pudo iniciar sesion")
        })
          
    }else if(localStorage){
        let userLogin = JSON.parse(localStorage)
        //loginWithRedirect().then(res=>console.log(res)).catch(err=>console.log(err))
        console.log("Entraron a 2");
  
        dispatch(putUserAuth0(userLogin))
        getFavorites(userLogin.id)
      
    }
  }, [isAuthenticated])
  return (
    <div className='App w-full min-w-full md:h-[2000px] '>
      <Routes>
        <Route exact path="/" element={<Home/>}/>

        <Route exact path="/detail/:idVideogame" element={<VideogameDetail/>}/>

        <Route exact path="/create" element={<CreateVideogame/>}/>

        <Route path='/profile' element={<Profile/>} />
        <Route path='/profile/:option' element={<Profile/>} />

      </Routes>
    </div>


  )
}

export default App;
