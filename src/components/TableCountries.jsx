import '../styles/tableCountries.css'

export function TableCountries({countries}) {
  return (
    <article className='countries-container'>
      <table className='table'>
        <thead className='table-head'>
          <tr className='table-row'>
            <th className='table-headers'>Flag</th>
            <th className='table-headers'>Name</th>
            <th className='table-headers'>Population</th>
            <th className='table-headers'>Area (km**2)</th>
            <th className='table-headers'>Region</th>
          </tr>
        </thead>
        <tbody className='table-body'>
          {countries.map((countrie) => (
            <tr
              className='table-row'
              key={countrie.id}
            >
              <td className='table-data'>
                <img
                  className='table-row-image'
                  src={countrie.flag}
                  alt={countrie.name}
                />
              </td>
              <td className='table-data'>{countrie.name}</td>
              <td className='table-data'>{countrie.population}</td>
              <td className='table-data'>{countrie.area}</td>
              <td className='table-data'>{countrie.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  )
}
