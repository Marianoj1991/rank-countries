import { useEffect, useState } from "react"

export function useSortCountries({ countriesState, setCountriesState }) {
  const [sort, setSort] = useState('')

  const handleSetSort = (term) => {
    setSort(term)
  }

  const handleChangeSort = (term = '') => {
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
    } else if (term === 'area') {
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
    handleChangeSort(sort)
  }, [sort])

  return {
    handleSetSort,
    handleChangeSort
  }
}
