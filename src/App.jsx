import { useContext } from 'react'
import './App.css'
import img from './assets/hero-image-wr.jpg'
import { AsideFilters } from './components/AsideFilters'
import { TableCountries } from './components/TableCountries'
import { FilterContext } from './context/FilterContext'
import { SearchComponent } from './components/SearchComponent'

function App() {
  const { countriesFiltered } = useContext(FilterContext)
  const countriesFound = countriesFiltered.length

  return (
    <main className='app-main'>
      <header className='app-header'>
        <img
          src={img}
          alt='hero-image'
        />
      </header>
      <section className='container'>
        <header className='container-header'>
          <div>
            <p>Found {countriesFound} countries</p>
          </div>
          <SearchComponent />
        </header>
        <div className='container-info'>
          <AsideFilters />
          <TableCountries countries={countriesFiltered} />
        </div>
      </section>
    </main>
  )
}

export default App
