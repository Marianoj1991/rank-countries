import { Children } from 'react'
import mockArr from '../mocks/countriesMocjk.json'

import { v4 as uuidv4 } from 'uuid';

export async function getCountries(search = '') {
  if (search === '') {
    const resp = await fetch('https://restcountries.com/v3.1/all')
    const data = await resp.json()
    const dataMapped = data.map((countrie) => ({
      id: uuidv4(),
      flag: countrie.flags.png,
      name: countrie.name.official,
      population: countrie.population,
      area: countrie.area,
      region: countrie.region
    }))
    return dataMapped
  } else {
     const resp = await fetch(`https://restcountries.com/v3.1/name/${search}`)
     const data = await resp.json()
     const dataMapped = data.map((countrie) => ({
       id: uuidv4(),
       flag: countrie.flags.png,
       name: countrie.name.official,
       population: countrie.population,
       area: countrie.area,
       region: countrie.region
     }))
     return dataMapped
  }
}
