import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import axios from "axios"

axios.defaults.baseURL = "http://localhost:3008/"

function App() {
  return (
    <div className='App bg-fondo'>
      <NavBar/>
      <Hero/>
    </div>
  )
}

export default App;
