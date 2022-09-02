import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../Styles/pokedexCard.css"
import { useNavigate } from 'react-router-dom'


const PokemonCard = ({ url }) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()

    const handleClick = () => navigate(`/pokedex/${pokemon.name}`)


    return (
        <article onClick={handleClick} className={`pokedex-card ${pokemon?.types[0].type.name}`}>
            <div className='pokedex-card__background'></div>
            <header className='pokedex-card__header'>
                <img src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt="" />
            </header>
            <section className='information'>
                <h3 className='information__name'>{`${pokemon?.name[0].toUpperCase() +  pokemon?.name.slice(1)}`}</h3>
                <ul className='information-ul-1'>
                    {
                        pokemon?.types.map(slot => (
                            <li className='information-li-1' key={slot.type.url}>{slot.type.name[0].toUpperCase() + slot.type.name.slice(1)}</li>
                        ))
                    }
                </ul>
                <ul className='information-ul'>
                    <li className='information-li'>HP <strong>{pokemon?.stats[0].base_stat}</strong></li>
                    <li className='information-li'>Attack <strong>{pokemon?.stats[1].base_stat}</strong></li>
                    <li className='information-li'>Defense <strong>{pokemon?.stats[2].base_stat}</strong></li>
                    <li className='information-li'>Speed <strong>{pokemon?.stats[5].base_stat}</strong></li>
                </ul>
            </section>
        </article>
    )
}

export default PokemonCard
