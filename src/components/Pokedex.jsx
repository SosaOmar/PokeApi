import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import PokemonCard from './PokemonCard'
import "../Styles/pokedexCard.css"
import Search from './Search'
import SelectType from './SelectType'
import Pagination from './Pagination'

const Pokedex = () => {
  const trainerName = useSelector(state => state.trainerName)

  const [currentBlock, setCurrentBlock] = useState(1)
  const [page, setPage] = useState(0);

  const [pokemonsApi, setPokemonsApi] = useState()
  const [pokeSearch, setPokeSearch] = useState()
  const [valueType, setValueType] = useState("All")



  useEffect(() => {
    let URL
    if (valueType !== "All") {
      URL = `https://pokeapi.co/api/v2/type/${valueType}`
      axios.get(URL)
        .then(res => {
          const arr = res.data.pokemon.map(e => e.pokemon)
          setPokemonsApi({ results: arr })
        })
        .catch(err => console.log(err))
      console.log(pokemonsApi);
    }
    else if (pokeSearch) {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
      const obj = {
        results: [{ url }]
      }

      setPokemonsApi(obj)
    } else {
      const URL = `https://pokeapi.co/api/v2/pokemon/?limit=9999999999999&offset=0`
      axios.get(URL)
        .then(res => setPokemonsApi(res.data))
        .catch(err => console.log(err))
    }
  }, [pokeSearch, valueType, page])

  return (
    <>
      <div className="pokeball">
        <div className="pokeball-red"></div>
        <div className="pokeball-circle1"></div>
        <div className="pokeball-circle2"></div>
        <div className="pokeball-white"></div>
      </div>
      <div className='pokemon-card-container'>
        <h1>Welcome <strong className='trainer-name'>{trainerName}</strong>, here you can find your favorite Pokémons</h1>
        <div className="pokemon-card__searchAndType">
          <Search setValueType={setValueType} setPokeSearch={setPokeSearch}
          />
          <SelectType
            valueType={valueType}
            setValueType={setValueType}
            setPage={setPage}
            setCurrentBlock={setCurrentBlock}
          />


        </div>
        <Pagination
          pokemonsApi={pokemonsApi}
          page={page}
          setPage={setPage}
          currentBlock={currentBlock}
          setCurrentBlock={setCurrentBlock}
        />
        <div className="cards-pokemons">

          {
            pokemonsApi?.results.slice(page * 18, (page + 1) * 18).map(pokemon =>
              <PokemonCard
                key={pokemon.url}
                url={pokemon.url}
              />)
          }
        </div>
        <Pagination
          pokemonsApi={pokemonsApi}
          page={page}
          setPage={setPage}
          currentBlock={currentBlock}
          setCurrentBlock={setCurrentBlock}
        />
      </div>

    </>
  )
}

export default Pokedex