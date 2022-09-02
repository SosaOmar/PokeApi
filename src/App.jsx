import Home from './components/Home'
import { Routes, Route } from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute'
import Pokedex from './components/Pokedex'
import PokemonDetails from './components/PokemonDetails.jsx'
import "../src/Styles/pokemonDetails.css"

function App() {



  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>} />

        <Route element={<ProtectedRoute/>}>
          <Route path='/pokedex' element={<Pokedex/>} />
          <Route path='/pokedex/:name' element = {<PokemonDetails/>}/>
        </Route>
        <Route path="*" element={<h1>Esta ruta no existe</h1>} />

      </Routes>
    </div>
  )
}

export default App
