//Import Mock
import Countries from '../mocks/countriesMocjk.json'

export default function useMock() {
  const newCountries = Countries.map((countrie) => ({
    id: countrie.idd.suffixes[0],
    flag: countrie.flags.png,
    name: countrie.name.official,
    population: countrie.population,
    area: countrie.area,
    region: countrie.region
  }))

  return {
    newCountries
  }
}
