
import { useState } from 'react'
import { useFilters } from '../hooks/useFilters'
import '../styles/asideFilters.css'

export function AsideFilters() {
  const { handleSetSort, changeRegion } = useFilters()
  const [ checked, setChecked ] = useState('all')

  const handleSetChecked = (newState)  => {
    setChecked(newState)
  }

  const handleChange = (e) => {
    const region = e.target.value
    changeRegion(region)
  }

  const handleSortChange = (e) => {
    const term = e.target.value
    console.log('TERM: ', term)
    handleSetSort(term)
  }

  return (
    <aside className='aside'>
      <div className='sort-div'>
        <label
          className='sort-div--label'
          htmlFor='population'
        >
          Sort by
        </label>
        <select
          className='sort-div--select'
          onChange={handleSortChange}
          id='population'
        >
          <option value=''>Select an option</option>
          <option value='population'>Population</option>
          <option value='name'>Names</option>
          <option value='area'>Area</option>
        </select>
      </div>

      <div className='div-input'>
        <div
          className={`input-choice ${
            checked === 'all' ? 'with-background' : ''
          }`}
          onChange={() => handleSetChecked('all')}
        >
          <label htmlFor='all'>All</label>
          <input
            hidden
            value='all'
            onChange={handleChange}
            type='radio'
            id='all'
            name='continent'
            defaultChecked
          />
        </div>
        <div
          className={`input-choice ${
            checked === 'America' ? 'with-background' : ''
          }`}
          onChange={() => handleSetChecked('America')}
        >
          <label htmlFor='america'>America</label>
          <input
            hidden
            value='Americas'
            onChange={handleChange}
            type='radio'
            id='america'
            name='continent'
          />
        </div>
        <div
          className={`input-choice ${
            checked === 'Antartic' ? 'with-background' : ''
          }`}
          onChange={() => handleSetChecked('Antartic')}
        >
          <label htmlFor='antarctic'>Antartic</label>
          <input
            hidden
            value='Antarctic'
            onChange={handleChange}
            type='radio'
            id='antarctic'
            name='continent'
          />
        </div>
        <div
          className={`input-choice ${
            checked === 'Africa' ? 'with-background' : ''
          }`}
          onChange={() => handleSetChecked('Africa')}
        >
          <label htmlFor='africa'>África</label>
          <input
            hidden
            value='Africa'
            onChange={handleChange}
            type='radio'
            id='africa'
            name='continent'
          />
        </div>
        <div
          className={`input-choice ${
            checked === 'Asia' ? 'with-background' : ''
          }`}
          onChange={() => handleSetChecked('Asia')}
        >
          <label htmlFor='asia'>Asia</label>
          <input
            hidden
            value='Asia'
            onChange={handleChange}
            type='radio'
            id='asia'
            name='continent'
          />
        </div>
        <div
          className={`input-choice ${
            checked === 'Europe' ? 'with-background' : ''
          }`}
          onChange={() => handleSetChecked('Europe')}
        >
          <label htmlFor='europe'>Europe</label>
          <input
            hidden
            value='Europe'
            onChange={handleChange}
            type='radio'
            id='europe'
            name='continent'
          />
        </div>
        <div
          className={`input-choice ${
            checked === 'Oceania' ? 'with-background' : ''
          }`}
          onChange={() => handleSetChecked('Oceania')}
        >
          <label htmlFor='oceania'>Oceania</label>
          <input
            hidden
            value='Oceania'
            onChange={handleChange}
            type='radio'
            id='oceania'
            name='continent'
          />
        </div>
      </div>
    </aside>
  )
}
