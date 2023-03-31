import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import axios from "axios"
import { useEffect } from 'react';
import { getAllGenders } from './redux/actions/actions';
import { useDispatch } from 'react-redux';

axios.defaults.baseURL = "http://localhost:3008/"

function App() {
  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllGenders())
  },[])
  return (
    <div className='App bg-fondo'>
      <NavBar/>
      <Hero/>
    </div>
  )
}

export default App;
