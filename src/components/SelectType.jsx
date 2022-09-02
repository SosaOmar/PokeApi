import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectType = ({setValueType, valueType, setPage, setCurrentBlock}) => {
    const [types, setTypes] = useState()

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/type/`
        axios.get(URL)
        .then(res => setTypes(res.data.results))
        .catch(err => console.log(err))
    }, [])
    
    const handreChange = e =>{
        setValueType(e.target.value);
        setPage(0)
        setCurrentBlock(1)
    }


  return (
    <select className='type_select' value={valueType}onChange={handreChange}>
        <option value="All">All pokemons</option>
        {
            types?.map(type => 
                <option key={type.name} value = {type.name}>{type.name}</option>
                )
        }
    </select>
  )
}

export default SelectType