import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import axios from "axios"
import { Suspense } from 'react';


axios.defaults.baseURL = "http://localhost:3008/"

function App() {

  return (
    <div className='App h-auto md:h-[2000px] bg-fondo   '>
      <NavBar/>
      <Hero/>
    </div>
  )
}

export default App;
