import React from 'react'

const Search = ({setPokeSearch, setValueType}) => {
    const handleSubmit = e =>{
        e.preventDefault()
        setPokeSearch(e.target.name.value.trim().toLowerCase());
        setValueType("All")
        e.target.name.value = ""
    }
  return (
    <form className='form-search' onSubmit={handleSubmit} action="">
        <input className='search-input' id="name" type="text" placeholder='Search a pokemon...' />
        <button className='search-button'>Search</button>
    </form>
  )
}

export default Search