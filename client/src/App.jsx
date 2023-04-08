import './App.css';
import { Route, Routes } from "react-router-dom";
import axios from "axios"
import Home from './pages/Home';
import VideogameDetail from './components/VideogameDetail/VideogameDetail';


axios.defaults.baseURL = "https://videogames-ts-production.up.railway.app/"

function App() {

  return (
    <div className='App w-full min-w-full md:h-[2000px] bg-oscuro   '>
      <Routes>
        <Route exact path="/" element={<Home/>}/>

        <Route exact path="/:idVideogame" element={<VideogameDetail/>}/>
      </Routes>
    </div>


  )
}

export default App;
