import './App.css';
import { Route, Routes } from "react-router-dom";
import axios from "axios"
import Home from './pages/Home';
import VideogameDetail from './pages/VideogameDetail';
import CreateVideogame from './pages/CreateVideogame';


axios.defaults.baseURL = "https://videogames-ts-production.up.railway.app/"

function App() {

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
