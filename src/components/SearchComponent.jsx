import {  useState } from 'react'
import searchSvg from '../assets/Search.svg'
import { useFilters } from '../hooks/useFilters'

//styles
import '../styles/searchComponent.css'

export function SearchComponent() {
  const { getNewCountries } = useFilters()
  const [ search, setSearch ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    getNewCountries(search)
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
  }

  return (
    <div className='search-container'>
      
      <img
        src={searchSvg}
        alt='input svg'
      />
      <form onSubmit={handleSubmit} className='search-form'>
        <input
          className='search-form-input'
          type='text'
          placeholder='Argentina, Brasil, China, EEUU...'
          value={search}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}
