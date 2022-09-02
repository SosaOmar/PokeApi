import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../Styles/pokemonDetails.css"
import Pagination from './Pagination'



const PokemonDetailsjsx = () => {
  const [pokemon, setPokemon] = useState()
  const { name } = useParams()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))

  }, [])

  const reglaTres = (parametro) => {
    let resultado = (parametro * 100) / 150
    return resultado
  }


  return (
    <>
      <div className="pokeball">
        <div className="pokeball-red"></div>
        <div className="pokeball-circle1"></div>
        <div className="pokeball-circle2"></div>
        <div className="pokeball-white"></div>
      </div>

      <div className={`detail-pokemon-container ${pokemon?.types[0].type.name}bg`}>
        <div className="details-up">
          <div className="details-up__principal">
            <div className="img-pokemon">
              <img src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt="" />
            </div>
            <div className="details-up_weightAndHeight">
              <p><strong>{pokemon?.weight}</strong>  Weight</p>
              <p><strong>{pokemon?.height}</strong> Height</p>
            </div>
            <h1 className='details-up__name'>{pokemon?.name[0].toUpperCase() + pokemon?.name.slice(1)}</h1>
            <div className="pokemon__id">
              <p className='id-pokemon' >#{pokemon?.id}</p>
            </div>
          </div>
          <div className="details-up__second">
            <div className="type">
              <h3>Type</h3>
              <ul className='detail-pokemon-types-ul'>

                {
                  pokemon?.types.map(slot => (
                    <li className={`${slot.type.name}2`} key={slot.type.url}>{slot.type.name[0].toUpperCase() + slot.type.name.slice(1)}</li>
                  ))
                }
              </ul>
            </div>

            <div className="abiliti">
              <h3>Abilities</h3>
              <ul className='detail-pokemon-abilities-ul'>
                {
                  pokemon?.abilities.map(abiliti =>
                    <li className='detail-pokemon-abilities-li' key={abiliti.ability.name}>{abiliti.ability.name[0].toUpperCase() + abiliti.ability.name.slice(1)} </li>
                  )
                }
              </ul></div>


          </div>

          <div className="stats">
            <h3>Stats</h3>
            <ul className='detail-pokemon-stats-ul'>
              <li className='detail-pokemon-stats-li'>HP <strong>{pokemon?.stats[0].base_stat}/150</strong></li>
              <div className="max-stats">
                <div className="stats-pokemon" style={{ width: `${reglaTres(pokemon?.stats[0].base_stat)}%`}}></div>
              </div>
              <li className='detail-pokemon-stats-li'>Attack <strong>{pokemon?.stats[1].base_stat}/150</strong></li>
              <div className="max-stats">
                <div className="stats-pokemon" style={{ width: `${reglaTres(pokemon?.stats[1].base_stat)}%` }}></div>
              </div>
              <li className='detail-pokemon-stats-li'>Defense <strong>{pokemon?.stats[2].base_stat}/150</strong></li>
              <div className="max-stats">
                <div className="stats-pokemon" style={{ width: `${reglaTres(pokemon?.stats[2].base_stat)}%` }}></div>
              </div>
              <li className='detail-pokemon-stats-li'>Speed <strong>{pokemon?.stats[5].base_stat}/150</strong></li>
              <div className="max-stats">
                <div className="stats-pokemon" style={{ width: `${reglaTres(pokemon?.stats[5].base_stat)}%` }}></div>
              </div>
              <li className='detail-pokemon-stats-li'>Special Attack <strong>{pokemon?.stats[3].base_stat}/150</strong></li>
              <div className="max-stats">
                <div className="stats-pokemon" style={{ width: `${reglaTres(pokemon?.stats[3].base_stat)}%` }}></div>
              </div>
              <li className='detail-pokemon-stats-li'>Special Defense <strong>{pokemon?.stats[4].base_stat}/150</strong></li>
              <div className="max-stats">
                <div className="stats-pokemon" style={{ width: `${reglaTres(pokemon?.stats[4].base_stat)}%` }}></div>
              </div>
            </ul>
          </div>
        </div>

        <div className="details-down">
          <h3>Movements</h3>
          <ul className='detail-pokemon-movements-ul'>
            {
              pokemon?.moves.map(move =>
                <li className='detail-pokemon-movements-li' key={move.move.name}>{move.move.name[0].toUpperCase() + move.move.name.slice(1)} </li>
              )
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default PokemonDetailsjsx