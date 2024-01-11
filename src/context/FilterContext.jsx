import { createContext, useCallback, useEffect, useState } from 'react'
import useMock from '../hooks/useMock'
import { getCountries } from '../services/get-countries'

// Mock to start the proyect
// const { newCountries } = useMock()

export const FilterContext = createContext()

export function useSortCountries({countriesState, setCountriesState}) {

  const [sort, setSort] = useState('')

  const handleSetSort = (term) => {
    setSort(term)
  }

  const handleChangeSort = (term) => {
    if (term === 'population') {
       const countriesSorted = [...countriesState.countries].sort(
         (a, b) => b.population - a.population
       )
       setCountriesState((prevState) => ({
         ...prevState,
         countries: countriesSorted
       }))
       return
    } else if (term === 'name') {
      const countriesSorted = [...countriesState.countries].sort((a, b) =>
        a.name.localeCompare(b.name)
      )
      setCountriesState((prevState) => ({
        ...prevState,
        countries: countriesSorted
      }))
      return
    } else {
      const countriesSorted = [...countriesState.countries].sort(
        (a, b) => b.area - a.area
      )
      setCountriesState((prevState) => ({
        ...prevState,
        countries: countriesSorted
      }))
      return
    }
  }

  useEffect(() => {
    // console.log('segundo useEffect')
    handleChangeSort(sort)
  }, [sort])


  return {
    handleSetSort,
    handleChangeSort
  }
}


export function FilterContextProvider({ children }) {

  const [regionFilters, setRegionFilters] = useState({
    region: 'all'
  })

  const [countriesState, setCountriesState] = useState({
    countries: []
  })
  
  const { handleSetSort } = useSortCountries({countriesState, setCountriesState})
  
  const getNewCountries = async (search = '') => {
    try {
      const newCountries = await getCountries(search)
      // console.log(newCountries)
      setCountriesState((prevState) => ({
        ...prevState,
        countries: newCountries
      }))
    } catch (err) {
      console.log(err)
      throw new Error('Error fetching data')
    }
  }
  
  useEffect(() => {
    // console.log('primer useEffect');
    getNewCountries()
  }, [])

  
  const changeRegion = (region) => {
    setRegionFilters((prevState) => ({
      ...prevState,
      region
    }))
  }

  const filterByRegion = useCallback((countries) => {
    return countries.filter(
      (country) =>
        regionFilters.region === 'all' ||
        country.region === regionFilters.region
    )
  })

  const countriesFiltered = filterByRegion(countriesState.countries)

  return (
    <FilterContext.Provider
      value={{
        changeRegion,
        countriesFiltered,
        getNewCountries,
        handleSetSort
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
